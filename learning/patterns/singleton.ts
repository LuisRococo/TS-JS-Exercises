class Counter {
  count: number = 0;
  static instance: Counter | undefined = undefined;

  private constructor() {}

  public static getInstance() {
    if (!this.instance) this.instance = new Counter();
    return this.instance;
  }

  public increment() {
    this.count++;
  }
}

const counter = Counter.getInstance();
counter.increment();
counter.increment();
counter.increment();

console.log(Counter.getInstance().count);
