import React from 'react';
import { FaInfoCircle, FaPlay, FaSpinner, FaTrash } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './App.css';
import { Cell } from './model/Cell';
import { state } from './model/store';

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const handleRun = () => state.runCell(cell.id);

  const handleDelete = () => {
    state.removeCell(cell.id);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    state.updateCell({ ...cell, content: event.target.value });
  };

  return (
    <div className="cell code-cell">
      <div className="icon-container">
        <button onClick={handleRun} disabled={cell.isLoading} className="icon">
          {cell.isLoading ? <FaSpinner /> : <FaPlay />}
        </button>
        <FaInfoCircle className="icon" />
        <FaTrash className="icon" onClick={handleDelete} />
      </div>
      <textarea value={cell.content} onChange={handleChange} />
      <SyntaxHighlighter language={cell.type} style={vscDarkPlus}>
        {cell.content}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeCell;
