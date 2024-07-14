
export type CellType = 'markdown' | 'python' | 'sql';

export class Cell {
  id: string;
  type: CellType;
  content: string;
  status: string;
  isLoading: boolean;

  constructor(id: string, type: CellType, content: string) {
    this.id = id;
    this.type = type;
    this.content = content;
    this.isLoading = false;
    this.status = 'foo';
    return this;
  }

  update(content: string) {
    this.content = content;
  }

  async run() {
    this.isLoading = true;
    await new Promise(resolve => setTimeout(resolve, 1_000));
    this.isLoading = false;
  }
}