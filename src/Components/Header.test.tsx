import { configure } from 'enzyme';
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header'
import { shallow } from 'enzyme';


configure({ adapter: new Adapter()});




describe("Header Component", () => {
    it('Renders correctly and set states', () => {
        const wrapper = shallow(<Header/>); 
        expect(wrapper.exists()).toBeTruthy();
      });
})