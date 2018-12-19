import {createStore,compose ,applyMiddleware} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk';

// const 

const store = createStore(reducer,compose(applyMiddleware(thunk)))

export default store;