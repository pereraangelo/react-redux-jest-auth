
import React from "react";
import ReactDOM from 'react-dom'
import {Nav} from "./Nav";
import {MemoryRouter} from "react-router";
import renderer from 'react-test-renderer'
import { shallow } from "enzyme";
import { findByTestAtrr } from "../../Utils";

const defaultProps={
    logout: jest.fn(),
    isAuthenticated:false,
    userName:""
  }
  
  
  
 
describe('NavBar component',()=>{
    const wrapper = shallow(<Nav {...defaultProps} />);
    it('Nav should load without crahing',()=>{
        const div = document.createElement('div');
        ReactDOM.render(<Nav/>, div);
    });
    
    
    it('login component matches the snapshot',()=>{
        const tree=renderer.create(<MemoryRouter ><Nav/></MemoryRouter>).toJSON()
        expect(tree).toMatchSnapshot()
    });
      
      
    it('shows logout button when user logged in',()=>{

        wrapper.setProps({ isAuthenticated: true });
        const logoutBtn=findByTestAtrr(wrapper, 'logout')
        expect(logoutBtn.length).toEqual(1)
 
    })

      
    it('greets user when user logged in',()=>{
        
        wrapper.setProps({ isAuthenticated: true });
        const logoutBtn=findByTestAtrr(wrapper, 'greeting')
        expect(logoutBtn.length).toEqual(1)
 
    })

})

