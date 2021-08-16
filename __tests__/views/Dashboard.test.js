// library imports
import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// page imports
import Dashboard from '../../src/views/Dashboard';
// util imports
import {ConstantText} from '../../src//utills/ConstantText';

enzyme.configure({adapter: new Adapter()});

describe('Dashboard screen', () => {
  it('renders correctly with Dashboard details', async () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Dashboard screen : sectionlist', () => {
  it('should sectionlist return keyExtractor correctly', () => {
    const DATA = [
      {
        id: 1,
        title: ConstantText.incidence,
        data: [
          {
            id: 1,
            days: ConstantText.days30,
          },
          {
            id: 2,
            days: ConstantText.days60,
          },
          {
            id: 3,
            days: ConstantText.days90,
          },
        ],
      },
      {
        id: 2,
        title: ConstantText.cases,
        data: [
          {
            id: 1,
            days: ConstantText.days30,
          },
          {
            id: 2,
            days: ConstantText.days60,
          },
          {
            id: 3,
            days: ConstantText.days90,
          },
        ],
      },
    ];
    const wrapper = shallow(<Dashboard item={DATA} />);
    expect(wrapper.find('SectionList').length).toEqual(1);
  });
});
