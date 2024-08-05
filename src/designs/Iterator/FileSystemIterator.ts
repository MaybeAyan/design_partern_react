import { FileSystemItem, Folder } from "./File";

export interface Iterator<T> {
  next(): T | null;
  hasNext(): boolean;
}

export class FileSystemIterator implements Iterator<FileSystemItem> {
  private stack: FileSystemItem[] = [];

  constructor(private root: FileSystemItem) {
    this.stack.push(root);
  }

  next(): FileSystemItem | null {
    if (this.hasNext()) {
      const current = this.stack.pop();
      if (current instanceof Folder) {
        this.stack.push(...current.getItems().reverse());
      }
      return current || null;
    }
    return null;
  }

  hasNext(): boolean {
    return this.stack.length > 0;
  }
}
