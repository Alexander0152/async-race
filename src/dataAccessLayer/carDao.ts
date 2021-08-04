import Car from '../businessLayer/car';
import Winner from '../businessLayer/winner';

const base = 'http://localhost:3000';

const garage = `${base}/garage`;
const engine = `${base}/engine`;
const winners = `${base}/winners`;

const getSortOrder = (sort: string, order: string) => {
  if (sort && order) return `&_sort=${sort}&_order=${order}`;
  return '';
};
export default class CarDao {
  public static async getCars(
    page: number,
    limit: number = 7,
  ): Promise<{ cars: Car[]; count: number }> {
    const response: Response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
    const serverCars: { name: string; color: string; id: number }[] = await response.json();
    const cars: Car[] = [];

    serverCars.forEach((el: { name: string; color: string; id: number }) => {
      const newCar: Car = new Car(el.name, el.color, el.id);
      cars.push(newCar);
    });

    return {
      cars,
      count: +response.headers.get('X-Total-Count'),
    };
  }

  public static async getCar(id: number): Promise<{ name: string; color: string; id: number }> {
    return (await fetch(`${garage}/${id}`)).json();
  }

  public static async createCar(body: { name: string; color: string }): Promise<Car> {
    const response: Response = await fetch(garage, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const serverCar: { name: string; color: string; id: number } = await response.json();

    const newCar: Car = new Car(serverCar.name, serverCar.color, serverCar.id);
    return newCar;
  }

  public static async deleteCar(id: number): Promise<{}> {
    return (await fetch(`${garage}/${id}`, { method: 'DELETE' })).json();
  }

  public static async updateCar(
    id: number,
    body: {
      name: string;
      color: string;
    },
  ): Promise<{ name: string; color: string; id: number }> {
    return (
      await fetch(`${garage}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }

  public static async startEngine(id: number): Promise<{ velocity: number; distance: number }> {
    return (await fetch(`${engine}?id=${id}&status=started`)).json();
  }

  public static async stopEngine(id: number): Promise<{ velocity: number; distance: number }> {
    return (await fetch(`${engine}?id=${id}&status=stopped`)).json();
  }

  public static async drive(id: number): Promise<{ success: boolean }> {
    const response = await fetch(`${engine}?id=${id}&status=drive`).catch();

    return response.status !== 200 ? { success: false } : { ...(await response.json()) };
  }

  public static async getWinners(
    page: number,
    limit: number = 10,
    sort: string,
    order: string,
  ): Promise<{ winners: Winner[]; count: number }> {
    const response: Response = await fetch(
      `${winners}?_page=${page}&_limit=${limit}${getSortOrder(sort, order)}`,
    );
    const items: { id: number; wins: number; time: number }[] = await response.json();

    const result: { winners: Winner[]; count: number } = { winners: [], count: null };

    items.forEach(async (el) => {
      const newCarObj: { name: string; color: string; id: number } = await CarDao.getCar(el.id);
      const newCar: Car = new Car(newCarObj.name, newCarObj.color, newCarObj.id);

      const newWinner: Winner = new Winner(el.id, el.wins, el.time, newCar);
      result.winners.push(newWinner);
    });
    result.count = +response.headers.get('X-Total-Count');

    return result;

    // return {
    //   items: await Promise.all(
    //     items.map(async (winner: { id: number; wins: number; time: number }) => (
    //       {
    //       ...winner,
    //       car: await CarDao.getCar(winner.id),
    //     })),
    //   ),
    //   count: response.headers.get('X-Total-Count'),
    // };

    // const cars: Car[] = [];
    // responseValue.items.forEach((el: { name: string; color: string; id: number }) => {
    //   const newCar: Car = new Car(el.name, el.color, el.id);
    //   cars.push(newCar);
    // });
  }

  public static async getWinner(id: number) {
    return (await fetch(`${winners}/${id}`)).json();
  }

  public static async getWinnerStatus(id: number) {
    return (await fetch(`${winners}/${id}`)).status;
  }

  public static async deleteWinner(id: number): Promise<void> {
    (await fetch(`${winners}/${id}`, { method: 'DELETE' })).json();
  }

  public static async createWinner(body: {
    id: number;
    wins: number;
    time: number;
  }): Promise<{ id: number; wins: number; time: number }> {
    return (
      await fetch(winners, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }

  public static async updateWinner(
    id: number,
    body: { id: number; wins: number; time: number },
  ): Promise<{ wins: number; time: number; id: number } | {}> {
    return (
      await fetch(`${winners}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }

  public static async saveWinner(newId: number, newTime: number): Promise<void> {
    const winnerStatus = await this.getWinnerStatus(newId);

    if (winnerStatus === 404) {
      await this.createWinner({ id: newId, wins: 1, time: newTime });
    } else {
      const winner: { id: number; wins: number; time: number } = await this.getWinner(newId);
      await this.updateWinner(newId, {
        id: newId,
        wins: winner.wins + 1,
        time: newTime < winner.time ? newTime : winner.time,
      });
    }
  }
}
