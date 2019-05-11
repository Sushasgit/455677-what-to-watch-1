
import React from 'react';
import {render} from 'react-dom';
import films from './mocks/films.js';

import App from './components/app/app.jsx';

render(
    <App films={films} />,
    document.getElementById(`root`)
);

