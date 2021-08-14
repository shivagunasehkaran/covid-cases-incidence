import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import SectionHeader from '../../src/components/SectionHeader';

enzyme.configure({adapter: new Adapter()});

describe('Section header details component validation', () => {
  it('renders correctly with Section header detail elments', async () => {
    const wrapper = shallow(<SectionHeader />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with image elements', async () => {
    const wrapper = shallow(<SectionHeader />);
    expect(wrapper.find('Image')).toHaveLength(1);
  });

  it('should render with text elements', async () => {
    const wrapper = shallow(<SectionHeader />);
    expect(wrapper.find('Text')).toHaveLength(1);
  });
});
