export interface Message {
  getContent(): string;
}

export class TextMessage implements Message {
  constructor(private content: string) {}

  getContent(): string {
    return this.content;
  }
}
