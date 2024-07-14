import React from 'react';
import { useSnapshot } from 'valtio';
import './App.css';
import CodeCell from './CodeCell';
import MarkdownCell from './MarkdownCell';
import { state } from './model/store';

const Notebook: React.FC = () => {
  const snapshot = useSnapshot(state);

  const handleAddCell = (type: 'markdown' | 'python' | 'sql') => {
    state.addCell(type);
  };

  return (
    <div className="notebook">
      {snapshot.cells.map(cell => {
        if (cell.type === 'markdown') {
          return <MarkdownCell key={cell.id} cell={cell} />;
        } else if (cell.type === 'python' || cell.type === 'sql') {
          return <CodeCell key={cell.id} cell={cell} />;
        } else {
          return null;
        }
      })}
      <button onClick={() => handleAddCell('markdown')}>Add Markdown Cell</button>
      <button onClick={() => handleAddCell('python')}>Add Python Cell</button>
      <button onClick={() => handleAddCell('sql')}>Add SQL Cell</button>
    </div>
  );
};

export default Notebook;
