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
  it('Should rendred the component !', () => {
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
    expect(component).toMatchSnapshot();
  });
});
