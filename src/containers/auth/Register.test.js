/* eslint-disable func-names */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Register from './Register';

describe('Testing of Register component', () => {
  let component;
  let props;

  Enzyme.configure({
    adapter: new Adapter()
  });
  props = {
    handleChange: jest.fn(),
    handleSubmit: jest.fn()
  };
  component = shallow(
    <Register
      handleChange={props.handleChange}
      handleSubmit={props.handleSubmit}
    />
  );
  it('Should rendred the component !', () => {
    expect(component).toMatchSnapshot();
  });
  it('Should capture checkbox ticked correctly onChange', function() {
    const component = mount(<Form />);
    const input = component.find('input').at(3);
    input.instance().checked = true;
    input.simulate('change');
    expect(component.state().subscribed).toEqual(true);
  });
  it('Should capture checkbox  correctly onChange', function() {
    const component = mount(<Form />);
    const input = component.find('input').at(3);
    input.instance().checked = true;
    input.simulate('change');
    expect(component.state().subscribed).toEqual(true);
  });
  it('Should capture checkbox ticked  onChange', function() {
    const component = mount(<Form />);
    const input = component.find('input').at(3);
    input.instance().checked = true;
    input.simulate('change');
    expect(component.state().subscribed).toEqual(true);
  });
  it('Should capture checkbox ticked correctly onChange', function() {
    const component = mount(<Form />);
    const input = component.find('input').at(3);
    input.instance().checked = true;
    input.simulate('change');
    expect(component.state().subscribed).toEqual(true);
  });
  it('Should  checkbox ticked correctly onChange', function() {
    const component = mount(<Form />);
    const input = component.find('input').at(3);
    input.instance().checked = true;
    input.simulate('change');
    expect(component.state().subscribed).toEqual(true);
  });

  input.simulate('change', {
    target: { selectedOptions: ['Japanese', 'French'] }
  });
  input.instance().value = ['Japanese', 'French'];
  input.simulate('select', { target: input.instance() });

  const state = { firstname: 'hello', lastname: 'world' };
  const expectedArg = 'Firstname: hello, Lastname: world';
  // const component = mount(<Form />);
  window.alert = jest.fn();
  component.setState(state);
  component.find('form').simulate('submit');
  expect(window.alert).toHaveBeenCalledWith(expectedArg);
});

describe('Title input', () => {
  it('Should capture title correctly onChange', () => {
    const title = wrapper.find('input').at(0);
    title.instance().value = 'Test';
    title.simulate('change');
    expect(setState).toHaveBeenCalledWith('Test');
  });
});

describe('Content input', () => {
  it('Should capture content correctly onChange', () => {
    const content = wrapper.find('input').at(1);
    content.instance().value = 'Testing';
    content.simulate('change');
    expect(setState).toHaveBeenCalledWith('Testing');
  });
});

describe('Title input', () => {
  it('Should capture title correctly onChange', () => {
    const title = wrapper.find('input').at(0);
    title.instance().value = 'Test';
    title.simulate('change');
    expect(setState).toHaveBeenCalledWith('Test');
  });
});

describe('Content input', () => {
  it('Should capture content correctly onChange', () => {
    const content = wrapper.find('input').at(1);
    content.instance().value = 'Testing';
    content.simulate('change');
    expect(setState).toHaveBeenCalledWith('Testing');
  });
});
