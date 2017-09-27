/**
 * Testing our OffsetNavSlide component
 */

import { shallow } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bootstrap-styled/lib/BootstrapProvider';
import NavigationBar, { defaultProps } from '../NavigationBar';
import OffsetNavSlide from '../OffsetNavSlide';

const children = (<h1>Test</h1>);

describe('<OffsetNavSlide />', () => {
  let theme;
  let props;

  beforeEach(() => {
    theme = defaultProps.theme;
    props = Object.assign(defaultProps, {
      children,
    });
  });

  it('should render an OffsetNavSlide', () => {
    const renderedComponent = shallow(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...props}>
          <OffsetNavSlide>
            {children}
          </OffsetNavSlide>
        </NavigationBar>
      </BootstrapProvider>
    );
    expect(renderedComponent.find('OffsetNavSlide').length).toEqual(1);
  });
});
