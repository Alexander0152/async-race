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

  static disableBtns(btn_class: string) {
    const buttons: HTMLCollectionOf<Element> = document.getElementsByClassName(btn_class);
    for (let i: number = 0; i < buttons.length; i += 1) {
      (buttons[i] as HTMLButtonElement).disabled = true;
    }
  }

  static enableBtns(btn_class: string) {
    const buttons: HTMLCollectionOf<Element> = document.getElementsByClassName(btn_class);
    for (let i: number = 0; i < buttons.length; i += 1) {
      (buttons[i] as HTMLButtonElement).disabled = false;
    }
  }
}
