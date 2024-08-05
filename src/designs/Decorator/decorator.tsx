// App.tsx
import React from 'react';
import { TextMessage } from './TextMessage';
import { CompressedMessage, EncryptedMessage } from './MessageDecorator';

const decoratorView: React.FC = () => {
  const message = new TextMessage('Hello, World!');
  const encryptedMessage = new EncryptedMessage(message);
  const compressedMessage = new CompressedMessage(encryptedMessage);

  return (
    <div>
      <h2>装饰器模式</h2>
      <p className="mt-2">原始数据: {message.getContent()}</p>
      <p className="mt-2">加密数据: {encryptedMessage.getContent()}</p>
      <p className="mt-2">压缩数据: {compressedMessage.getContent()}</p>
    </div>
  );
};

export default decoratorView;
