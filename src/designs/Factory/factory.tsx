import React from 'react';
import NotificationFactory from './NotificationFactory';

const App: React.FC = () => {
  return (
    <div>
      <h2>工厂模式</h2>
      <NotificationFactory type="email" message="这是一个邮件信息订阅" />
      <NotificationFactory type="sms" message="这是一个sms信息订阅" />
    </div>
  );
};

export default App;
