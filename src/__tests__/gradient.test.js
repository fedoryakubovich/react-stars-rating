import React from 'react';
import { mount, shallow } from 'enzyme';

import Gradient from '../lib/gradient';

describe('Gradient', () => {
  it('Render', () => {
    const props = {
      primaryColor: 'orange',
      secondaryColor: 'grey',
      primaryOffset: 50,
      secondaryOffset: 50,
      index: 0,
      value: 1,
    };

    shallow(<Gradient {...props} />);
  });

  it('Props checking', () => {
    const props = {
      primaryColor: 'orange',
      secondaryColor: 'grey',
      primaryOffset: 50,
      secondaryOffset: 50,
      index: 0,
      value: 1,
    };
    const gradientWrapper = mount(<Gradient {...props} />);

    expect(gradientWrapper.props()).toEqual(props);
  });
});
