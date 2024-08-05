export interface FileSystemItem {
  getName(): string;
}

export class File implements FileSystemItem {
  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }
}

export class Folder implements FileSystemItem {
  private items: FileSystemItem[] = [];

  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  addItem(item: FileSystemItem): void {
    this.items.push(item);
  }

  getItems(): FileSystemItem[] {
    return this.items;
  }
}
