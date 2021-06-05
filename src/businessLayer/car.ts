export default class Car {
  private currentName: string;

  private currentColor: string;

  private currentId: number;

  private currentBestTime: number;

  private currentWinsNumber: number = 0;

  constructor(newName: string, newColor: string, newId: number) {
    this.currentName = newName;
    this.currentColor = newColor;
    this.currentId = newId;
  }

  get color(): string {
    return this.currentColor;
  }

  set color(newColor: string) {
    this.currentColor = newColor;
  }

  get name(): string {
    return this.currentName;
  }

  set name(newName: string) {
    this.currentName = newName;
  }

  get id(): number {
    return this.currentId;
  }

  set id(newId: number) {
    this.currentId = newId;
  }

  get bestTime(): number {
    return this.currentBestTime;
  }

  set bestTime(newTime: number) {
    this.currentBestTime = newTime;
  }

  get winsNumber(): number {
    return this.currentWinsNumber;
  }

  set winsNumber(newNumber: number) {
    this.currentWinsNumber = newNumber;
  }
}
