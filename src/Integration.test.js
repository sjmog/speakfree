import React     from 'react';
import ReactDOM  from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { mount } from 'enzyme';
import App       from './App';
import Button    from './Button';

it('renders without crashing', () => {
  mount(<App />);
});

it('clicking a button changes the global pointer to that button\'s value', () => {
  const app = mount(<App />);
  const button = app.find('.Button').first().getDOMNode();
  TestUtils.Simulate.click(button);

  expect(app.find('.Display').text()).toEqual("a");
});