// App.tsx
import React from 'react';
import './App.css'; // 导入 CSS 文件
import IteratorView from './designs/Iterator/iterator.tsx';
import DecoratorView from './designs/Decorator/decorator.tsx';
import ProxyView from './designs/Proxy/proxy.tsx';
import FactoryView from './designs/Factory/factory.tsx';
import StrategyView from './designs/Strategy/strategy.tsx';
import PublishView from './designs/Publish/publish.tsx';
import SingletonView from './designs/SingleTon/singleTonView.tsx';
import { SingletonProvider } from './designs/SingleTon/SingletonContext';
import ObserverComponent from './designs/Observer/ObserverComponent';
import AnotherObserverComponent from './designs/Observer/AnotherObserverComponent';
import TaskListContainer from './designs/ContainerPtl/TaskListContainer.tsx';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="content">
        <div className="wrap">
          <IteratorView />
        </div>
        <div className="wrap">
          <DecoratorView />
        </div>
        <div className="wrap">
          <ProxyView />
        </div>
        <div className="wrap">
          <FactoryView />
        </div>
        <div className="wrap">
          <StrategyView />
        </div>
        <div className="wrap">
          <PublishView />
        </div>
        <div className="wrap">
          <SingletonProvider>
            <SingletonView />
          </SingletonProvider>
        </div>
        <div className="wrap">
          <ObserverComponent />
          <AnotherObserverComponent />
        </div>
        <div className="wrap">
          <TaskListContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
