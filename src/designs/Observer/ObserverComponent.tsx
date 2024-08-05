import React, { useEffect, useState } from 'react';
import ObservableSingleton from './ObservableSingleton';

const ObserverComponent: React.FC = () => {
  const [data, setData] = useState(ObservableSingleton.getInstance().data);

  useEffect(() => {
    const updateData = () => setData(ObservableSingleton.getInstance().data);
    ObservableSingleton.getInstance().addObserver(updateData);

    return () => {
      ObservableSingleton.getInstance().removeObserver(updateData);
    };
  }, []);

  const handleChangeData = () => {
    ObservableSingleton.getInstance().data = '数据被修改了！';
  };

  return (
    <div>
      <h2>观察者模式 + 单例模式</h2>
      <p className="mt-2 mb-2">数据: {data}</p>
      <button onClick={handleChangeData}>修改数据</button>
    </div>
  );
};

export default ObserverComponent;
