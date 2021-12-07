import { applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const allReducers = combineReducers({

})

const middleware = [thunk];

const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;