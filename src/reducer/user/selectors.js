import {createSelector} from "reselect/lib/index";
import NameSpace from '../name-spaces.js';

const NAME_SPACE = NameSpace.USER;

export const autorizeStatus = (state) => {
  return state[NAME_SPACE].isAutorised;
};

export const getUser = (state) => {
  return state[NAME_SPACE].user;
};

export const getUserInfo = createSelector(
    getUser,
    (user) => {
      return user ? {email: user.email, avatarUrl: user[`avatar_url`]} : null;
    }
);
