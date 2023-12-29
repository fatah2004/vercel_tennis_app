// redux/store.js
import { createStore } from 'redux';
import counterReducer from './reducer';
const store = createStore(counterReducer,window.__REDUX_DEVTOOLS_EXTENSION__());
 //window.__REDUX_DEVTOOLS_EXTENSION__.open();
export default store;
