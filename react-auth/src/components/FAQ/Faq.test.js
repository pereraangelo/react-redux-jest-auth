import React from "react";
import ReactDOM from 'react-dom'
import {shallow} from "enzyme"; 
import Faq from "./Faq";
import {MemoryRouter} from "react-router";
import { findByTestAtrr } from "../../Utils";
import renderer from 'react-test-renderer'




describe('FAQ component',()=>{ 
    const wrapper = shallow( <Faq />);
    it('Faq commponent matches the snapshot',()=>{
        const tree=renderer.create(<MemoryRouter ><Faq/></MemoryRouter>).toJSON()
        expect(tree).toMatchSnapshot()
    });
      
 
    it('Faq page should load without crahing',()=>{
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter ><Faq/></MemoryRouter>, div);
    });
    
    it('redirect user to registration page',()=>{
        const faq = findByTestAtrr(wrapper, 'registration').props().to
        expect(faq).toEqual("/registration")
         
    })


    it('redirect user to Login page',()=>{
        const cancle = findByTestAtrr(wrapper, 'login').props().to
        
        expect(cancle).toEqual("/") 
         
    })

})

