interface Observable {
  name: string;
  notify: () => void;
}

class Client implements Observable {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public notify() {
    console.log(`Client named '${this.name}' was notified`);
  }
}

class Observer {
  private observers: Observable[] = [];

  public subscribe(newSubscriber: Observable) {
    this.observers.push(newSubscriber);
  }

  public notify() {
    for (const subscriber of this.observers) {
      subscriber.notify();
    }
  }
}

const client1 = new Client("Luis");
const client2 = new Client("Ro");
const client3 = new Client("Paco");

const observer = new Observer();
observer.subscribe(client1);
observer.subscribe(client2);
observer.subscribe(client3);

observer.notify();
