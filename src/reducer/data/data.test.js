import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {
  ActionType,
  reducer,
  Operation
} from "./data";

import {movies} from '../../mocks/films.js';

it(`Reducer should change active genre`, () => {
  expect(reducer({
    activeGenre: `All genres`,
    films: movies
  }, {
    type: ActionType.CHANGE_ACTIVE_GENRE,
    payload: `Horror`
  })).toEqual({
    activeGenre: `Horror`,
    films: movies
  });
});

it(`Should make a correct API call to /films`, () => {
  const dispatch = jest.fn();
  const api = createAPI(dispatch);
  const mock = new MockAdapter(api);
  const loader = Operation.loadFilms();

  mock.onGet(`/films`).reply(200, [{fake: true}]);

  loader(dispatch, jest.fn(), api).then(() => {
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionType.GET_FILMS,
      payload: [{fake: true}]
    });
  });
});
