import React, { useState } from 'react';
import EventEmitter from './EventEmitter';

interface PublisherProps {
  eventEmitter: EventEmitter;
}

const Publisher: React.FC<PublisherProps> = ({ eventEmitter }) => {
  const [message, setMessage] = useState('');
  const [additionalData, setAdditionalData] = useState('');

  const handlePublish = () => {
    eventEmitter.emit('message', { message, additionalData });
  };

  return (
    <div>
      <p>发布者: </p>
      <input
        type="text"
        placeholder="发布人"
        value={message}
        className="mt-2 mb-2"
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        className="ml-2 mr-2"
        type="text"
        placeholder="发布数据"
        value={additionalData}
        onChange={(e) => setAdditionalData(e.target.value)}
      />
      <button onClick={handlePublish}>触发订阅</button>
    </div>
  );
};

export default Publisher;
