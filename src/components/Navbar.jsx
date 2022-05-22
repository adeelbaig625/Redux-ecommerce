import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
height:60px;
`;

const Wrapper= styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
`;

const Language= styled.span`
font-size:1rem;
cursor:pointer;
`
const SearchContainer=styled.div`
    border: 0.5px solid lightgray;
    display:flex;
    align-items:center;
    paddding:5px;
    margin-left:25px;
`
const Left= styled.div`
flex:1;
display:flex;
align-items:center;
`

const Input=styled.input`
border:none;`

const Center= styled.div`
text-align:center;
flex:1;
`
const Logo= styled.h1`
        font-weight:bold;
    `
const Right= styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;

`
const MenuItem= styled.div `
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    `
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
               <Search style={{color:'grey',fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>Adeel Store.</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined/>
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar