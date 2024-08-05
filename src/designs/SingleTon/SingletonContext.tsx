import React, { createContext, useContext, useState, ReactNode } from 'react';
import Singleton from './Singleton';

interface SingletonContextProps {
  data: string;
  setData: (data: string) => void;
}

const SingletonContext = createContext<SingletonContextProps | undefined>(
  undefined
);

export const SingletonProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState(Singleton.getInstance().data);

  const updateData = (newData: string) => {
    Singleton.getInstance().setData(newData);
    setData(newData);
  };

  return (
    <SingletonContext.Provider value={{ data, setData: updateData }}>
      {children}
    </SingletonContext.Provider>
  );
};

export const useSingleton = () => {
  const context = useContext(SingletonContext);
  if (!context) {
    throw new Error('必须提供一个单例上下文 SingletonProvider');
  }
  return context;
};
