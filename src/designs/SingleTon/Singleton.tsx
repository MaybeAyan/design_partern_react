class Singleton {
  private static instance: Singleton;
  public data: string;

  private constructor() {
    this.data = '初始数据';
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public setData(data: string) {
    this.data = data;
  }
}

export default Singleton;
