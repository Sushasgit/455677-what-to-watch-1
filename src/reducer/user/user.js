const initialState = {
  isAutorised: false,
  user: null,
};

const ActionType = {
  USER_LOGIN: `USER_LOGIN`,
  USER_LOGIN_FAILED: `USER_LOGIN_FAILED`
};

const ActionCreators = {
  userLogin: (user) => {
    return {
      type: ActionType.USER_LOGIN,
      payload: user,
    };
  },
  userLoginFailed: () => {
    return {
      type: ActionType.userLoginFailed
    };
  }
};

const Operation = {
  login: (data) => (dispatch, getState, api) => {
    return api.post(`/login`, data)
      .then((response) => dispatch(ActionCreators.userLogin(response.data)))
      .catch(() => {
        dispatch(ActionCreators.userLoginFailed);
      });
  },
  checkAuth: () => {
    return (dispatch, _getState, api) => {
      return api
        .get(`/login`)
        .then((res) => {
          if (res.status === 200) {
            dispatch(ActionCreators.userLogin(res.data));
          }
        });
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.USER_LOGIN:
      return Object.assign({}, state, {
        isAutorised: true,
        user: action.payload,
      });
    case ActionType.USER_LOGIN_FAILED:
      return Object.assign({}, initialState);
  }

  return state;
};

export {
  reducer,
  ActionCreators,
  ActionType,
  Operation
};

