
import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withActiveCard from './with-active-card.jsx';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveCard(MockComponent);

it(`with-active-card HOC should change  active card on callback`, () => {
  const wrap = shallow(<MockComponentWrapped/>);

  wrap.instance()._handleActiveCard();
  expect(wrap.state().activeCard).toEqual(null);
});
