import React from 'react';
import { useSingleton } from './SingletonContext';
import OtherView from './otherView';

const SingletonComponent: React.FC = () => {
  const { data, setData } = useSingleton();

  const handleChangeData = () => {
    setData('我被修改了！');
  };

  return (
    <div>
      <h2>单例模式</h2>
      <p className="mt-2 mb-2">数据: {data}</p>
      <button onClick={handleChangeData}>修改数据</button>

      <div className="border-violet-800 border p-2 rounded m-2">
        <OtherView />
      </div>
    </div>
  );
};

export default SingletonComponent;
