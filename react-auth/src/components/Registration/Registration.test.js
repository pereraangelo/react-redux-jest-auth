import React from 'react'
import ReactDOM from 'react-dom'
import { shallow} from 'enzyme'
import renderer from 'react-test-renderer'
import {MemoryRouter} from "react-router"
import  {Registration} from './Registration'
import { findByTestAtrr, simulateChangeOnInput, simulateCheckBox } from '../../Utils'
 
const defaultProps={
    register: jest.fn(),
    alert:"",
    potentialUser:"",
    alreadyAuser:""
}
 

describe('Register Component',()=>{
    const wrapper = shallow(<Registration {...defaultProps} />);

    beforeEach(()=>jest.resetAllMocks())

    it('Register page should load without crahing',()=>{
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter ><Registration/></MemoryRouter>, div);
    });

    it('Register component matches the snapshot',()=>{
        const tree=renderer.create(<MemoryRouter ><Registration/></MemoryRouter>).toJSON()
        expect(tree).toMatchSnapshot()
    });

    it('check form contains 5 inputs, 2 button,2 links,1 checkbox ',()=>{
        expect(wrapper.find('form').length).toBe(1)
        expect(wrapper.find('input').length).toBe(6);
        expect(wrapper.find('button').length).toBe(1);
        expect(wrapper.find('Link').length).toBe(2);


        expect(findByTestAtrr(wrapper, 'userName').length).toEqual(1)
        expect(findByTestAtrr(wrapper, 'email').length).toEqual(1)
        expect(findByTestAtrr(wrapper, 'password').length).toEqual(1)
        expect(findByTestAtrr(wrapper, 'confirmPassword').length).toEqual(1)
        expect(findByTestAtrr(wrapper, 'acceptTerms').length).toEqual(1)
        expect(findByTestAtrr(wrapper, 'showPassword').length).toEqual(1)
        expect(findByTestAtrr(wrapper, 'register').length).toBe(1); 
        expect(findByTestAtrr(wrapper, 'cancle').length).toBe(1); 
        expect(findByTestAtrr(wrapper, 'FAQ').length).toBe(1); 
        expect(findByTestAtrr(wrapper, 'login')).toBeTruthy(); 
        
    })



    it('let fill the form',()=>{

        const userNameInput         =   simulateChangeOnInput(wrapper,'userName','John')
        const emailInput            =   simulateChangeOnInput(wrapper,'email','john@gmail.com')
        const passwordInput         =   simulateChangeOnInput(wrapper,'password','pass123')
        const confirmPasswordInput  =   simulateChangeOnInput(wrapper,'confirmPassword','pass123')
        const acceptAggrement       =   simulateCheckBox(wrapper,'acceptTerms',true)

        expect(userNameInput.props().value).toEqual('John')
        expect(emailInput.props().value).toEqual('john@gmail.com')
        expect(passwordInput.props().value).toEqual('pass123')
        expect(confirmPasswordInput.props().value).toEqual('pass123')
        expect(acceptAggrement.props().value).toEqual(true)
    
    })



    it('fills email field if user enter it on login page ',()=>{

        wrapper.setProps({ potentialUser: 'john@gmail.com' });
        const testdata=findByTestAtrr(wrapper, 'email').props().value
        expect(testdata).toEqual('john@gmail.com')

    })



    it('shows password in plain text',()=>{

        simulateCheckBox(wrapper,'showPassword',true)
        const passwordField = findByTestAtrr(wrapper, 'password').props().type
        const confirmPasswordField = findByTestAtrr(wrapper, 'password').props().type

        expect(passwordField).toEqual("text")
        expect(confirmPasswordField).toEqual("text")
    })



 
    it('redirect user to Login page',()=>{
        const cancle = findByTestAtrr(wrapper, 'cancle').props().to
        
        expect(cancle).toEqual("/")
         
    })



    it('redirect user to faq page',()=>{
        const faq = findByTestAtrr(wrapper, 'FAQ').props().to
        expect(faq).toEqual("/FAQ")
         
    })



    it('shows alert if user clicks the registration button ',()=>{

        wrapper.setProps({ alert: 'test alert' });
        const testdata=findByTestAtrr(wrapper, 'alert-element').length
        expect(testdata).toEqual(1)
 
    })


    
    it('shows alert with link back to login page, if user alerady registered ',()=>{

        wrapper.setProps({ alert: 'test alert' });
        wrapper.setProps({ alreadyAuser: true });
        const testdata=findByTestAtrr(wrapper, 'login').props().to
        expect(testdata).toEqual("/")
 
    })

})

 
 