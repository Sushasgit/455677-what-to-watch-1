import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilmCard from './film-card';

const mock = {
  id: 1,
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  posterUrl: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `fantasy`,
  handleActiveCard: jest.fn(),
  clearActiveCard: jest.fn(),
  isPlaying: true,
};

configure({adapter: new Adapter()});

it(`Mouse Enter on film card button returns with info`, () => {
  const filmCard = mount(
      <FilmCard
        {...mock}
        film={mock}
        handleActiveCard={mock.handleActiveCard}
        onMouseEnter={mock.handleActiveCard}
      />);
  filmCard.find(`article`).simulate(`mouseenter`, mock.handleActiveCard);
  setTimeout(() => {
    expect(mock.handleActiveCard).toHaveBeenCalledWith(mock.id);
  }, 1000);
});
