/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './Login';

Enzyme.configure({ adapter: new Adapter() });

describe('<Login />', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation(init => [init, setState]);

  beforeEach(() => {
    wrapper = Enzyme.mount(Enzyme.shallow(<Login />).get(0));
  });

  afterEach(() => {
    jest.clearAllMocks();
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
