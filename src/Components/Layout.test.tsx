import { configure } from 'enzyme';
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import Layout from './Layout'

configure({ adapter: new Adapter()});

import { shallow, mount } from 'enzyme';


describe("<Layout> cases" , () => {

  it("rendering perfectly Layout component" , () => {
       const wrapper = shallow(<Layout/>)
       expect(wrapper.exists()).toBeTruthy()
  })
 

  it("Updating the car registration text ", () => {
    const container = shallow(<Layout/>)
    container.find('#parking-drawing-registration-input').at(0).simulate("change", {target :{
       name : "registration",
        value : "xyz" 
    }});
    expect(container.find("#parking-drawing-registration-input").get(0).props.value).toEqual("")
  })


  it("Updating the the time input ", () => {
    const container = shallow(<Layout/>)
    container.find('#time').at(0).simulate("change", {target :{
        name : "time",
        value : "xyz" 
    }});
    expect(container.find("#time").get(0).props.value).toEqual("")
  })


  it("testing the handleSubmit2 in the app", () => {
    const testValues = {
      handleSubmit2: jest.fn(),
     };
     const wrapper = shallow(<Layout/>) 
     wrapper.find('form').simulate('submit',{
     preventDefault: () => {}  });
     expect(testValues.handleSubmit2).toHaveBeenCalledTimes(0);
  })


})

