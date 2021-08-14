// library imports
import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// page imports
import Dashboard from '../../src/views/Dashboard';

enzyme.configure({adapter: new Adapter()});

describe('Dashboard screen', () => {
  it('renders correctly with Dashboard details', async () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
