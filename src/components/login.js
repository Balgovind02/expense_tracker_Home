import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';





function LoginPage(){
    return (
        <div>
            <Wrapper>
            <Header>ExpenseTrack</Header>
            <Login>Login</Login>
            </Wrapper>
        </div>
    );
}
export default LoginPage;

const Amount = styled.button`
display: block;
background-size: 200% auto;
background-image: linear-gradient(to right, #fff 0%, #1E00FF 50%, #fff 100%);
transition: 0.5s;
&:hover {
  background-position: right center;
} 

`;

const Input = styled.input`
    background-color: #EAF1FE;

`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Login = 
    styled.button`
    background-color: #7968F8;
    color: #fff;
    font-family: 'Inter', sans-serif;
    text-align: center;
    width: 50%;
    height: 30px;
    border: none;
    margin-left: auto;
    margin-right: auto;
    corner-radius: 4px:
    font-weight: 900;
`;



const Header = styled.div`
    background: #7968F8
    font-family: 'Inter', sans-serif;
    text-align: center;
    width: 90%;
    height: 45px;
    color: white;
    
    `;