import React from 'react';
import EmailNotification from './EmailNotification';
import SMSNotification from './SMSNotification';

interface NotificationProps {
  type: 'email' | 'sms';
  message: string;
}

const NotificationFactory: React.FC<NotificationProps> = ({
  type,
  message,
}) => {
  switch (type) {
    case 'email':
      return <EmailNotification message={message} />;
    case 'sms':
      return <SMSNotification message={message} />;
    default:
      return null;
  }
};

export default NotificationFactory;
