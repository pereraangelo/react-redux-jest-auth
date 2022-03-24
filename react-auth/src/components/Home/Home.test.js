import React from "react";
import ReactDOM from 'react-dom'
import {shallow} from "enzyme"; 
import {Home} from "./Home";
import {MemoryRouter} from "react-router";
import { findByTestAtrr } from "../../Utils";
import renderer from 'react-test-renderer'

const defaultProps={
    logout: jest.fn(),
    isAuthenticated:false,
    userName:""
  }
  
  
  


describe('FAQ component',()=>{ 
    
    const wrapper = shallow(<Home {...defaultProps} />);
    it('Home commponent matches the snapshot',()=>{
        const tree=renderer.create(<MemoryRouter ><Home/></MemoryRouter>).toJSON()
        expect(tree).toMatchSnapshot()
    });
      
 
    it('Home page should load without crahing',()=>{
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter ><Home/></MemoryRouter>, div);
    });

       
    it('show loading message until user logged in to the page',()=>{
        
        wrapper.setProps({ loggingInProgress: true });
        const loading=findByTestAtrr(wrapper, 'loading')
        expect(loading.length).toEqual(1)
 
    })
    

    

})

