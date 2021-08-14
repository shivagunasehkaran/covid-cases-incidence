import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import ChildItem from '../../src/components/ChildItem';

enzyme.configure({adapter: new Adapter()});

describe('ChildItem component validation', () => {
  it('renders correctly with child item elments', async () => {
    const wrapper = shallow(<ChildItem />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with image elements', async () => {
    const wrapper = shallow(<ChildItem />);
    expect(wrapper.find('Image')).toHaveLength(1);
  });

  it('should render with text elements', async () => {
    const wrapper = shallow(<ChildItem />);
    expect(wrapper.find('Text')).toHaveLength(1);
  });
});
