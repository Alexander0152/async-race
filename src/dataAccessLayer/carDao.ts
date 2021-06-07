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
  ): Promise<{ items: [{ name: string; color: string; id: number }]; count: string }> {
    const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);

    return {
      items: await response.json(),
      count: response.headers.get('X-Total-Count'),
    };
  }

  public static async getCar(id: number) {
    return (await fetch(`${garage}/${id}`)).json();
  }

  public static async createCar(body: Body) {
    return (
      await fetch(garage, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }

  public static async deleteCar(id: number) {
    return (await fetch(`${garage}/${id}`, { method: 'DELETE' })).json();
  }

  public static async updateCar(id: number, body: Body) {
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

  public static async startEngine(id: number) {
    return (await fetch(`${engine}?id=${id}&status=started`)).json();
  }

  public static async stopEngine(id: number) {
    return (await fetch(`${engine}?id=${id}&status=stopped`)).json();
  }

  public static async drive(id: number) {
    const response = await fetch(`${engine}?id=${id}&status=drive`).catch();

    return response.status !== 200 ? { success: false } : { ...(await response.json()) };
  }

  public static async getWinners(page: number, limit: number = 7, sort: string, order: string) {
    const response = await fetch(
      `${winners}?_page=${page}&_limit=${limit}${getSortOrder(sort, order)}`,
    );
    const items = await response.json();

    return {
      items: await Promise.all(
        items.map(async (winner: { id: number; wins: number; time: number }) => ({
          ...winner,
          car: await CarDao.getCar(winner.id),
        })),
      ),
      count: response.headers.get('X-Total-Count'),
    };
  }

  public static async getWinner(id: number) {
    return (await fetch(`${winners}/${id}`)).json();
  }

  public static async getWinnerStatus(id: number) {
    return (await fetch(`${winners}/${id}`)).status;
  }

  public static async deleteWinner(id: number) {
    return (await fetch(`${winners}/${id}`, { method: 'DELETE' })).json();
  }

  public static async createWinner(body: { id: number; wins: number; time: number }) {
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

  public static async updateWinner(id: number, body: { id: number; wins: number; time: number }) {
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

  public static async saveWinner(newId: number, newTime: number) {
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
