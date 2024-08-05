type EventCallback<T = any> = (data: T) => void;

// 可以根据需要拓展once事件，只监听一次然后卸载事件
class EventEmitter {
  private events: { [key: string]: EventCallback[] } = {};

  subscribe<T>(event: string, callback: EventCallback<T>) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  unsubscribe<T>(event: string, callback: EventCallback<T>) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter(cb => cb !== callback);
  }

  emit<T>(event: string, data: T) {
    if (!this.events[event]) return;

    this.events[event].forEach(callback => callback(data));
  }
}

export default EventEmitter;
