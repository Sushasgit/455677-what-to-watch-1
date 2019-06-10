import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import MainScreen from '../main-screen/main-screen.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import PrivateRoute from '../../hocs/private-route/private-route.jsx';

import {ActionCreators} from '../../reducer/data/data.js';
import {getFilteredFilms, getUniqGenres, getActiveGenre} from '../../reducer/data/selectors.js';
import {autorizeStatus, getUserInfo} from '../../reducer/user/selectors.js';


const App = ({films, isAutorised, user}) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <MainScreen user={user} isAutorised={isAutorised} films={films}/>}/>
        <Route path="/login" component={SignIn} />
        <PrivateRoute path="/mylist" component={MainScreen} />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  activeGenre: PropTypes.string,
  genres: PropTypes.array,
  isAutorised: PropTypes.bool,
  user: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    films: getFilteredFilms(state),
    genres: getUniqGenres(state),
    activeGenre: getActiveGenre(state),
    isAutorised: autorizeStatus(state),
    user: getUserInfo(state),
  });
};
const mapDispatchToProps = (dispatch) => ({
  onGenreChange: (evt, genre) => {
    evt.preventDefault();
    dispatch(ActionCreators.changeActiveGenre(genre));
    dispatch(ActionCreators.getGenreFilms(genre));
  },
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
