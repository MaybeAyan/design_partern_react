import React from 'react';

interface EmailNotificationProps {
  message: string;
}

const EmailNotification: React.FC<EmailNotificationProps> = ({ message }) => {
  return <div className="mt-2">邮件订阅消息: {message}</div>;
};

export default EmailNotification;
