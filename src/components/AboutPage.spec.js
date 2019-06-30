import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from './AboutPage';

describe('<AboutPage />', () => {
  it('should have a header called \'About\'', () => {
    const wrapper = shallow(<AboutPage />);
    const actual = wrapper.find('h1').text();
    const expected = 'About Sky Betting and Gaming App';

    expect(actual).toEqual(expected);
  });

  it('should have a header with \'alt-header\' class', () => {
    const wrapper = shallow(<AboutPage />);
    const actual = wrapper.find('h1').prop('className');
    const expected = 'alt-header';

    expect(actual).toEqual(expected);
  });

});
