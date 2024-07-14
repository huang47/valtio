const { proxy, subscribe } = require('valtio');
const { subscribeKey } = require('valtio/utils');

const uuid = require('uuid').v4;

class Notebook {
  constructor(props) {
    this.cells = props?.cells || [];
    return this;
  }

  addCell() {
    this.cells.push(new Cell(uuid()));
    return this;
  }

  removeCell(id) {
    this.cells = this.cells.filter(cell => cell.id !== id);
    return this;
  }
}

class Cell {
  constructor(id) {
    this.id = id;
    this.loading = false;
    return this;
  }

  async run() {
    this.loading = true;
    new Promise(resolve => setTimeout(resolve, 1_000));
    this.loading = false;
  }
}

const state = proxy(new Notebook());
subscribe(state, (e) => console.log('changed: ', e));
subscribeKey(state, 'loading', (e) => console.log('loading changed: ', e));

state.addCell();

(async () => {
  await state.cells[0].run();
})();
