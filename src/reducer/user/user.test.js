
import {
  ActionType,
  reducer,
} from "./user";

// import {movies} from '../../mocks/films.js';

it(`Reducer should change active genre`, () => {
  expect(reducer({
    isAutorised: `false`,
    user: null,
  }, {
    type: ActionType.USER_LOGIN,
    payload: {
      avatarUrl: "/wtw/static/avatar/1.jpg",
      email: "ssss@gmail.com"
    }
  })).toEqual({
    isAutorised: true,
    user: {
      avatarUrl: "/wtw/static/avatar/1.jpg",
      email: "ssss@gmail.com"
    }
  });
});

// it(`Should make a correct API call to /films`, () => {
//   const dispatch = jest.fn();
//   const api = createAPI(dispatch);
//   const mock = new MockAdapter(api);
//   const loader = Operation.loadFilms();

//   mock.onGet(`/films`).reply(200, [{fake: true}]);

//   loader(dispatch, jest.fn(), api).then(() => {
//     expect(dispatch).toHaveBeenCalledTimes(1);
//     expect(dispatch).toHaveBeenCalledWith({
//       type: ActionType.GET_FILMS,
//       payload: [{fake: true}]
//     });
//   });
// });
