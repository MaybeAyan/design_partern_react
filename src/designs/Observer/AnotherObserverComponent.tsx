import React, { useEffect, useState } from 'react';
import ObservableSingleton from './ObservableSingleton';

const AnotherObserverComponent: React.FC = () => {
  const [data, setData] = useState(ObservableSingleton.getInstance().data);

  useEffect(() => {
    const updateData = () => setData(ObservableSingleton.getInstance().data);
    ObservableSingleton.getInstance().addObserver(updateData);

    return () => {
      ObservableSingleton.getInstance().removeObserver(updateData);
    };
  }, []);

  const handleChangeData = () => {
    ObservableSingleton.getInstance().data = '数据被另一个组件修改了！';
  };

  return (
    <div className="mt-2 border p-2 border-violet-800">
      <h2>另一个观察者组件</h2>
      <p className="mt-2 mb-2">数据: {data}</p>
      <button onClick={handleChangeData}>修改数据</button>
    </div>
  );
};

export default AnotherObserverComponent;
