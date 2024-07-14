import React from 'react';
import './App.css';
import Notebook from './Notebook';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Jupyter-like Notebook</h1>
      <Notebook />
    </div>
  );
};

export default App;
