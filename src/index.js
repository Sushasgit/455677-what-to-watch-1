
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import {render} from 'react-dom';
import {Operation} from './reducer/data/data.js';
import {Operation as checkAuth} from './reducer/user/user';
import combineReducers from './reducer/index.js';
import thunk from "redux-thunk";
import {compose} from "recompose";
import {createAPI} from './api';

import App from './components/app/app.jsx';
const api = createAPI((...args) => store.dispatch(...args));
const store = createStore(
    combineReducers,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.dispatch(Operation.loadFilms());
store.dispatch(checkAuth.checkAuth());

render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    document.getElementById(`root`)
);

