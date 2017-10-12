import { createStore } from 'redux';
import rootReducer from './reducers';

export default (initialState) => {
	console.log(initialState)
	return createStore(rootReducer, initialState);
}
