import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import {mobile} from '../responsive'
const Container=styled.div`
height:60px;
${mobile({ height:"50px"})}
`;

const Wrapper= styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
${mobile({ padding:"10px 0px"})}
`;

const Language= styled.span`
font-size:1rem;
cursor:pointer;
${mobile({ display:"none"})}
`
const SearchContainer=styled.div`
    border: 0.5px solid lightgray;
    display:flex;
    align-items:center;
    padding:5px;
    margin-left:25px;
`
const Left= styled.div`
flex:1;
display:flex;
align-items:center;
`

const Input=styled.input`
border:none;
${mobile({ width:"50px"})}
`

const Center= styled.div`

text-align:center;
flex:1;
`
const Logo= styled.h1`
        font-weight:bold;
        ${mobile({ fontSize:"24px"})}
    `
const Right= styled.div`
flex:1;
display:flex;
align-items:center;
justify-content: flex-end;


`
const MenuItem= styled.div `
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    ${mobile({ fontSize:"12px",marginLeft:"10px"})}
    `
const Navbar = () => {
    const quantity=useSelector(state=>state.cart.quantity)
    console.log(quantity)
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/>
               <Search style={{color:'grey',fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>Store.</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlined/>
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar