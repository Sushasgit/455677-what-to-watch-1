import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainScreen from './main-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`MainScreen correctly renders after relaunch`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<MainScreen
    onClick={clickHandler}
  />
  );

  const startButton = app.find(`.small-movie-card__title`);
  startButton.forEach((card) => {
    card.simulate(`click`, {preventDefault() {}});
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
