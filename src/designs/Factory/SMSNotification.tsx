import React from 'react';

interface SMSNotificationProps {
  message: string;
}

const SMSNotification: React.FC<SMSNotificationProps> = ({ message }) => {
  return <div className="mt-2">SMS订阅消息: {message}</div>;
};

export default SMSNotification;
