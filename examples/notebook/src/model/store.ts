import { proxy } from 'valtio';
import { devtools } from 'valtio/utils';
import { Notebook } from './Notebook';

export const state = proxy(new Notebook());

export const unsub = devtools(state, { name: 'Notebook', enabled: true, trace: true });
(window as any).state = state