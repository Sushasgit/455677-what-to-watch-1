import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilmCard from './film-card';

const mock = {
  id: 1,
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  posterUrl: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `fantasy`,
};

configure({adapter: new Adapter()});

it(`Click on film card button returns with info`, () => {
  const clickHandler = jest.fn(() => mock);
  const filmCard = shallow(<FilmCard film={mock} onClick={clickHandler} />);

  const button = filmCard.find(`button`);
  button.simulate(`click`, clickHandler);

  expect(clickHandler).toHaveReturnedWith(mock);
});
