import { createStore } from 'redux';
import { favoritesReducer } from '../reducers/reducers';

export const store = createStore(favoritesReducer);