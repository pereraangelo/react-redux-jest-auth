import React from "react";
import ReactDOM from 'react-dom'
import {shallow} from "enzyme"; 
import {MemoryRouter} from "react-router";
import { findByTestAtrr } from "../../Utils";
import renderer from 'react-test-renderer'
import NotFound from "./NotFound";




describe('Notfound component',()=>{ 
    const wrapper = shallow( <NotFound />);
    it('Notfound commponent matches the snapshot',()=>{
        const tree=renderer.create(<MemoryRouter ><NotFound/></MemoryRouter>).toJSON()
        expect(tree).toMatchSnapshot()
    });
      
 
    it('Notfound page should load without crahing',()=>{
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter ><NotFound/></MemoryRouter>, div);
    });
     

    it('redirect user to Login page',()=>{
        const cancle = findByTestAtrr(wrapper, 'login').props().to
        
        expect(cancle).toEqual("/") 
         
    })

})