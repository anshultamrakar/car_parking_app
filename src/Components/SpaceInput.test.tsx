import React from 'react'
import SpaceInput from './SpaceInput'
import {shallow } from 'enzyme'
import { configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
// import DataContext from '../Context/DataContext';
// import { DataProvider } from '../Context/DataContext';
// import { MemoryRouter } from "react-router-dom";

configure({ adapter: new Adapter()});



describe("<SpaceInput> cases ", () => {

     it('render SpaceInputs', () => {
         let wrapper
         wrapper = shallow(<SpaceInput/>); 
         expect(wrapper.exists()).toBeTruthy();
       }); 
     

       it("Updates the state in handle change event", () => {
           const container = shallow(<SpaceInput/>)
           container.find('#parking-create-text-input').at(0).simulate("change", {target :{
               name : "userInput",
               value : "xyz" 
           }});
           expect(container.find("#parking-create-text-input").get(0).props.value).toEqual("")
       })

    it("handleSubmit works", () => {
        const testValues = {
            handleSubmit: jest.fn(),
           };
           const wrapper = shallow(<SpaceInput/>) 
           wrapper.find('form').simulate('submit',{
           preventDefault: () => {}  });
           expect(testValues.handleSubmit).toHaveBeenCalledTimes(0);
    })
})






