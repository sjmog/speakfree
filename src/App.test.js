import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('initializes with an empty pointer', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().pointer.length).toEqual(0);
});
