type Observer = () => void;

class Observable {
  private observers: Observer[] = [];

  /**
   * 添加观察者
   * @param observer 
   */
  addObserver(observer: Observer) {
    this.observers.push(observer);
  }
  
  /**
   * 删除观察者
   * @param observer 
   */
  removeObserver(observer: Observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  /**
   * 通知所有观察者
   */
  notifyObservers() {
    this.observers.forEach(observer => observer());
  }
}

export default Observable;
