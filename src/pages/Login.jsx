import React from 'react'
import styled from "styled-components"
import { mobile } from '../responsive';
import { useDispatch } from 'react-redux';
import { login } from '../redux/apiCalls';

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
  const [username,setUsername]=React.useState("")
  const [password,setPassword]=React.useState("")
  const dispatch=useDispatch()
  const handleClick=(e)=>
  {
    e.preventdefault()
    login(dispatch,{username,password})
  }
  return (
    <Container>
       <Wrapper>
           <Title>
               SIGN IN
           </Title>
           <Form>
               
               <Input placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
               <Input placeholder="password" type={'password'} onChange={(e)=>setPassword(e.target.value)}/>
        
               <Button onClick={handleClick}>LOGIN</Button>
               <Link>FORGOT PASSWORD?</Link>
               <Link>CREATE A NEW ACCOUNT</Link>
           </Form>
           </Wrapper>
    </Container>
  )
}

export default Login