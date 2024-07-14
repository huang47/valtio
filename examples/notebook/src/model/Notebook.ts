import { v4 as uuid } from 'uuid';
import { Cell, CellType } from './Cell';

export class Notebook {
  cells: Cell[] = [];

  constructor(props?: { cells: Cell[] }) {
    this.cells = props?.cells || [];
    return this;
  }

  addCell(type: CellType) {
    this.cells.push(new Cell(uuid(), type, ''));
  }

  removeCell(id: string) {
    this.cells = this.cells.filter(cell => cell.id !== id);
  }

  updateCell(cell: Partial<Omit<Cell, 'id'>> & Required<Pick<Cell, 'id' | 'content'>>) {
    const foundCell = this.cells.find(c => c.id === cell.id);
    if (foundCell) {
      foundCell.update(cell.content);
    }
  }

  async runCell(id: string) {
    const foundCell = this.cells.find(c => c.id === id);
    if (foundCell) {
      await foundCell.run();
    }
  }
}