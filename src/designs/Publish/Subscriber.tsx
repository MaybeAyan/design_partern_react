import React, { useEffect, useState } from 'react';
import EventEmitter from './EventEmitter';

interface SubscriberProps {
  eventEmitter: EventEmitter;
}

interface MessageEvent {
  message: string;
  additionalData: string;
}

const Subscriber: React.FC<SubscriberProps> = ({ eventEmitter }) => {
  const [messages, setMessages] = useState<MessageEvent[]>([]);

  useEffect(() => {
    const handleMessage = (data: MessageEvent) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    };

    eventEmitter.subscribe<MessageEvent>('message', handleMessage);

    return () => {
      eventEmitter.unsubscribe<MessageEvent>('message', handleMessage);
    };
  }, [eventEmitter]);

  return (
    <div>
      <h2 className="mt-2 mb-2">订阅者: </h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            {msg.message} - {msg.additionalData}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subscriber;
