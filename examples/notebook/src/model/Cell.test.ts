import { snapshot } from 'valtio';
import { Cell, CellType } from './Cell';

describe('Cell', () => {
  it('should initialize with the correct properties', () => {
    const id = '1';
    const type: CellType = 'markdown';
    const content = 'Hello, world!';
    const cell = new Cell(id, type, content);

    expect(cell.id).toBe(id);
    expect(cell.type).toBe(type);
    expect(cell.content).toBe(content);
    expect(cell.isLoading).toBe(false);
  });

  it('should update the content correctly', () => {
    const id = '1';
    const type: CellType = 'markdown';
    const content = 'Hello, world!';
    const newContent = 'Updated content';
    const cell = new Cell(id, type, content);

    cell.update(newContent);

    expect(cell.content).toBe(newContent);
  });

  it('should set isLoading to true during run', async () => {
    const id = '1';
    const type: CellType = 'markdown';
    const content = 'Hello, world!';
    const cell = new Cell(id, type, content);

    expect(cell.isLoading).toBe(false);

    const promise = cell.run();

    expect(cell.isLoading).toBe(true);

    await promise;

    expect(cell.isLoading).toBe(false);
  });

  it('should create a proxy object', () => {
    const id = '1';
    const type: CellType = 'markdown';
    const content = 'Hello, world!';
    const cell = new Cell(id, type, content);

    const cellSnapshot = snapshot(cell);

    expect(cellSnapshot).toEqual({
      id,
      type,
      content,
      isLoading: false,
    });
  });
});