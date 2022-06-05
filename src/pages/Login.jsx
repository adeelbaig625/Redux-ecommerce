import React from 'react'
import styled from "styled-components"
import { mobile } from '../responsive';
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(rgba(255,255,255,0.3),
    rgba(255,255,255,0.3)),
    url('https://wallpaperaccess.com/full/2489626.jpg') center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: white;
${mobile({width:"75%"})}
`;
const Form = styled.form`
display: flex;
flex-direction: column;
`;
const Title = styled.h1`
font-size:24px;
font-weight: 300;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
font-size: 14px;
margin:20px 10px 0px 0px;
padding: 10px;
`;
const Link = styled.a`
margin:10px 0px;
font-size: 14px;
text-decoration: underline;
cursor: pointer;
`;
const Button = styled.button`
width: 40%;
border: none;
margin: 10px 0px;
padding: 15px 20px;
background-color:teal;
color:white;
cursor:pointer;
`;
const Login = () => {
  return (
    <Container>
       <Wrapper>
           <Title>
               SIGN IN
           </Title>
           <Form>
               
               <Input placeholder="username"/>
               <Input placeholder="password"/>
        
               <Button>LOGIN</Button>
               <Link>FORGOT PASSWORD?</Link>
               <Link>CREATE A NEW ACCOUNT</Link>
           </Form>
           </Wrapper>
    </Container>
  )
}

export default Login