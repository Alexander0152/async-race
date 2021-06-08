import Car from '../businessLayer/car';
import CarDao from '../dataAccessLayer/carDao';

export default class CarService {
  public static async getCars(
    page: number,
    limit: number = 7,
  ): Promise<{ cars: Car[]; count: string }> {
    return CarDao.getCars(page, limit);
  }

  public static async getCar(id: number): Promise<{ name: string; color: string; id: number }> {
    return CarDao.getCar(id);
  }

  public static async createCar(body: {
    name: string;
    color: string;
  }): Promise<{ name: string; color: string; id: number }> {
    return CarDao.createCar(body);
  }

  public static async deleteCar(id: number): Promise<{}> {
    return CarDao.deleteCar(id);
  }

  public static async updateCar(id: number, body: { name: string; color: string }): Promise<{}> {
    return CarDao.updateCar(id, body);
  }
}
