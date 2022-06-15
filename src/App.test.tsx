import { configure } from 'enzyme';
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import App from './App'
import { shallow } from 'enzyme';


configure({ adapter: new Adapter()});



