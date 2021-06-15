import Car from './car';

export default class Winner {
  private currentCar: Car;

  private currentId: number;

  private currentTime: number;

  private currentWins: number;

  constructor(newId: number, newWins: number, newTime: number, newCar: Car) {
    this.currentId = newId;
    this.currentWins = newWins;
    this.currentTime = newTime;
    this.currentCar = newCar;
  }

  get car(): Car {
    return this.currentCar;
  }

  set car(newCar: Car) {
    this.currentCar = newCar;
  }

  get id(): number {
    return this.currentId;
  }

  set id(newId: number) {
    this.currentId = newId;
  }

  get wins(): number {
    return this.currentWins;
  }

  set wins(newWins: number) {
    this.currentWins = newWins;
  }

  get time(): number {
    return this.currentTime;
  }

  set time(newTime: number) {
    this.currentTime = newTime;
  }
}
