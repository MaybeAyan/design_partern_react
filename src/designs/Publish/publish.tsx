import React from 'react';
import EventEmitter from './EventEmitter';
import Publisher from './Publisher';
import Subscriber from './Subscriber';

const eventEmitter = new EventEmitter();

const PublishView: React.FC = () => {
  return (
    <div>
      <h2 className="mb-2">发布订阅模式</h2>
      <Publisher eventEmitter={eventEmitter} />
      <Subscriber eventEmitter={eventEmitter} />
    </div>
  );
};

export default PublishView;
