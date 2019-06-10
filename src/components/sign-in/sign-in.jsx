import React from 'react';
import {connect} from 'react-redux';
import {Operation} from '../../reducer/user/user.js';
import PropTypes from 'prop-types';


import {getFilteredFilms, getUniqGenres, getActiveGenre} from '../../reducer/data/selectors.js';
import {getUserInfo, autorizeStatus} from '../../reducer/user/selectors.js';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ``,
      password: ``,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const {email, password} = this.state;

    if (email && password) {
      this.props.onLogin(e, {email, password});
      this.props.history.push(`/`);
    }
  }
  render() {
    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form onSubmit={this.handleSubmit} method='post' className="sign-in__form">
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input onChange={this.handleChange} className="sign-in__input" type="email" placeholder="Email address" name="email" id="user-email" />
                <label className="sign-in__label visually-hidden" forHtml="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input onChange={this.handleChange} className="sign-in__input" type="password" placeholder="Password" name="password" id="user-password" />
                <label className="sign-in__label visually-hidden" forHtml="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

SignIn.propTypes = {
  films: PropTypes.array.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  activeGenre: PropTypes.string,
  genres: PropTypes.array,
  history: PropTypes.object,
  onLogin: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    films: getFilteredFilms(state),
    genres: getUniqGenres(state),
    activeGenre: getActiveGenre(state),
    user: getUserInfo(state),
    isAutorised: autorizeStatus(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  onLogin: (evt, data) => {
    evt.preventDefault();
    dispatch(Operation.login({
      email: data.email,
      password: data.password,
    }));
  },
});

export {SignIn};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
