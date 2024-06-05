/*
Basically allows you to mix two or more classes
*/

type Constructor<T = {}> = new (...args: any[]) => T;

const Sortable = <TBase extends Constructor>(Base: TBase) => {
  return class extends Base {
    public sort() {
      console.log("Sorting....");
    }
  };
};

const Activable = <TBase extends Constructor>(Base: TBase) => {
  return class extends Base {
    public active: boolean;
    constructor(...args: any[]) {
      super(...args);
      this.active = true;
    }

    public activate() {
      this.active = true;
    }

    public deactivate() {
      this.active = false;
    }
  };
};

class UtilityClass {}

class Combined extends Activable(Sortable(UtilityClass)) {}

const instance = new Combined();
instance.activate();
instance.sort();
