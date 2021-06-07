import CarDao from '../dataAccessLayer/carDao';

export default class CarService {
  public static async getCars(
    page: number,
    limit: number = 7,
  ): Promise<{ items: [{ name: string; color: string; id: number }]; count: string }> {
    return CarDao.getCars(page, limit);
  }
}
