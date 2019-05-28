import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import films from '../../mocks/films.js';
import withData from './with-data.jsx';

const genres = [`All genres`, `Fantasy`, `Dramas`, `History`, `Trillers`];

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withData(MockComponent);

it(`with-data HOC should get data`, () => {
  const wrap = shallow(<MockComponentWrapped/>);

  wrap.instance()._findAllData(films);
  expect(wrap.state().genresList).toEqual(genres);
});
