import React from 'react';
import { FaPlay, FaTrash } from 'react-icons/fa';
import { Cell } from './model/Cell';
import { state } from './model/store';

interface CellComponentProps {
  cell: Cell;
}

const CellComponent: React.FC<CellComponentProps> = ({ cell }) => {
  const handleRun = () => {
    cell.run();
  };

  const handleDelete = () => {
    cell.isLoading = true; // Use some temporary state before removal
    setTimeout(() => {
      state.removeCell(cell.id);
    }, 1000);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    cell.update(event.target.value);
  };

  return (
    <div className="cell">
      <div className="icon-container">
        <button onClick={handleRun} disabled={cell.isLoading} className="icon">
          {cell.isLoading ? <span className="spinner"></span> : <FaPlay />}
        </button>
        <FaTrash className="icon" onClick={handleDelete} />
      </div>
      <textarea value={cell.content} onChange={handleChange} />
    </div>
  );
};

export default CellComponent;
