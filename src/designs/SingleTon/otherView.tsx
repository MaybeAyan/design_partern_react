import React from 'react';
import { useSingleton } from './SingletonContext';

const OtherView: React.FC = () => {
  const { data, setData } = useSingleton();

  const handleChangeData = () => {
    setData('我被初始化了');
  };

  return (
    <div>
      <h2>另一个使用了单例数据的组件</h2>
      <p className="mt-2 mb-2">数据: {data}</p>
      <button onClick={handleChangeData}>修改数据</button>
    </div>
  );
};

export default OtherView;
