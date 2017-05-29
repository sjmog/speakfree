import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Button from './Button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
});

it('sets the pointer of the parent to the head letter on first click', () => {
  const onClickStub = jest.fn();
  const button = shallow(<Button head="a" onClick={onClickStub} />);
  button.find('button').simulate('click');
  expect(onClickStub.mock.calls[0][0]).toEqual("a");
});