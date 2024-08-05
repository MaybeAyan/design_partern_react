// App.tsx
import React, { useState } from 'react';
import { UserServiceProxy } from './UserServiceProxy';

const ProxyView: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const userService = new UserServiceProxy();

  const handleFetchUserData = async () => {
    try {
      const data = await userService.getUserData(userId);
      setUserData(data);
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('fail');
      }
      setUserData(null);
    }
  };

  return (
    <div>
      <h2>代理模式</h2>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="请输入用户id"
        className="mr-2 mt-2"
      />
      <button className="button" onClick={handleFetchUserData}>
        请求用户数据
      </button>
      {userData && <p>{userData}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ProxyView;
