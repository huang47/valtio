import React from 'react';
import { FaInfoCircle, FaPlay, FaSpinner, FaTrash } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import './App.css';
import { Cell } from './model/Cell';
import { state } from './model/store';

interface MarkdownCellProps {
  cell: Cell;
}

const MarkdownCell: React.FC<MarkdownCellProps> = ({ cell }) => {
  const handleRun = () => state.runCell(cell.id);

  const handleDelete = () => {
    state.removeCell(cell.id);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    state.updateCell({ ...cell, content: event.target.value });
  };

  return (
    <div className="cell markdown-cell">
      <div className="icon-container">
        <button onClick={handleRun} disabled={cell.isLoading} className="icon">
          {cell.isLoading ? <FaSpinner /> : <FaPlay />}
        </button>
        <FaInfoCircle className="icon" />
        <FaTrash className="icon" onClick={handleDelete} />
      </div>
      <textarea value={cell.content} onChange={handleChange} />
      <ReactMarkdown>{cell.content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownCell;
