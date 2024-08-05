// App.tsx
import React from 'react';
import { File, Folder } from './File';
import { FileSystemIterator } from './FileSystemIterator';

const IteratorView: React.FC = () => {
  const root = new Folder('root');
  const folder1 = new Folder('folder1');
  const folder2 = new Folder('folder2');
  const file1 = new File('file1');
  const file2 = new File('file2');
  const file3 = new File('file3');

  folder1.addItem(file1);
  folder1.addItem(file2);
  folder2.addItem(file3);
  root.addItem(folder1);
  root.addItem(folder2);

  const iterator = new FileSystemIterator(root);

  const elements = [];
  while (iterator.hasNext()) {
    const item = iterator.next();
    if (item) {
      elements.push(<p key={elements.length}>{item.getName()}</p>);
    }
  }

  return (
    <div>
      <h2>迭代器模式</h2>
      <div className="mt-2">{elements}</div>
    </div>
  );
};

export default IteratorView;
