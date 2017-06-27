import React from 'react';
import renderer from 'react-test-renderer';
import Heading from '../Heading';


describe('Heading', () => {
  it('should show the total number of friends', () => {

    const component = renderer.create(
      <Heading count={75} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

  });
});
