class Car {
  public readonly name: string;
  public doorNumber: number;
  protected motor: string;
  private isOn: boolean = false;

  constructor(name: string, doorNumber: number, motor: string) {
    this.name = name;
    this.motor = motor;
    this.doorNumber = doorNumber;
  }

  public start() {
    this.isOn = true;
    console.log("The car is on");
  }

  public stop() {
    this.isOn = false;
    console.log("The car is off");
  }

  public printInfo() {
    console.log(
      `This car name is: ${this.name} and its motor is a ${this.motor}`
    );
  }
}

class Nissan extends Car {
  constructor(name: string, doorNumber: number) {
    const motor = "Nissan Motor";
    super(name, doorNumber, motor);
  }

  public printInfo(): void {
    console.log("This is a nissan car");
    super.printInfo();
  }
}

const nissanCar = new Nissan("tsuru", 4);
nissanCar.printInfo();
