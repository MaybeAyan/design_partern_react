import Observable from './Observer';

class ObservableSingleton extends Observable {
  private static instance: ObservableSingleton;
  private _data: string = "初始数据";

  private constructor() {
    super();
  }

  public static getInstance(): ObservableSingleton {
    if (!ObservableSingleton.instance) {
      ObservableSingleton.instance = new ObservableSingleton();
    }
    return ObservableSingleton.instance;
  }

  get data() {
    return this._data;
  }

  set data(value: string) {
    this._data = value;
    this.notifyObservers();
  }
}

export default ObservableSingleton;
