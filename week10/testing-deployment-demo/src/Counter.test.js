// src/Counter.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter component', () => {
  it('renders without crashing', () => {
    shallow(<Counter />);
  });

  it('renders the count correctly', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find('p').text()).toEqual('Count: 0');
  });

  it('increments the count correctly', () => {
    const wrapper = shallow(<Counter />);
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.find('p').text()).toEqual('Count: 1');
  });

  it('decrements the count correctly', () => {
    const wrapper = shallow(<Counter />);
    wrapper.find('button').at(1).simulate('click');
    expect(wrapper.find('p').text()).toEqual('Count: -1');
  });
});
