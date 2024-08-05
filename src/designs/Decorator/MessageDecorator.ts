import { Message } from "./TextMessage";

export abstract class MessageDecorator implements Message {
  constructor(protected message: Message) {}

  abstract getContent(): string;
}

export class EncryptedMessage extends MessageDecorator {
  getContent(): string {
    return `加密(${this.message.getContent()})`;
  }
}

export class CompressedMessage extends MessageDecorator {
  getContent(): string {
    return `压缩(${this.message.getContent()})`;
  }
}