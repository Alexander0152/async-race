import settings from './settings';

const models = settings.carModels;
const names = settings.carNames;

export default class Utils {
  private static getRandomName(): string {
    const model: string = models[Math.floor(Math.random() * models.length)];
    const name: string = names[Math.floor(Math.random() * models.length)];
    return `${model} ${name}`;
  }

  private static getRandomColor(): string {
    const letters: string = '0123456789ABCDEF';
    let color: string = '#';
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  public static generateRandomCars(): { name: string; color: string }[] {
    const number = settings.generateCarsNumber;
    return new Array(number)
      .fill(1)
      .map(() => ({ name: Utils.getRandomName(), color: Utils.getRandomColor() }));
  }
}
