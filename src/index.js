
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import {render} from 'react-dom';
import {reducer} from './reducer.js';
import App from './components/app/app.jsx';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    document.getElementById(`root`)
);

