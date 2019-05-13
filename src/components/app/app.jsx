import React from 'react';
import PropTypes from 'prop-types';

import MainScreen from '../main-screen/main-screen.jsx';

const App = ({films}) => {
  return <MainScreen films={films} />;
};

App.propTypes = {
  films: PropTypes.array.isRequired,
};

export default App;
