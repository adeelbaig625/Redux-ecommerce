import React from 'react'
import styled from 'styled-components'
import { ShoppingCartOutlined,SearchOutlined,FavoriteBorderOutlined } from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'

const Info=styled.div`
width:100%;
opacity: 0;
height:100%;
position:absolute;
top:0;
left:0;
background-color: rgba(0,0,0,0.2);
display: flex;
align-items: center;
justify-content: center;
z-index: 3;
cursor: pointer;
transition: all 0.5s ease;
`

const Container=styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position:relative;

    &:hover ${Info}{
        opacity : 1;
    }
`

const Circle=styled.div`
width:200px;
height:200px;
border-radius: 50%;
background-color: white;
position: absolute;
`
const Image=styled.img`
height: 75%;
z-index: 2;
`

const Icon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color:white ;
display: flex;
justify-content: center;
align-items: center;
margin: 10px;
cursor: pointer;
transition:all 0.5s ease;
&:hover
{
    background-color: #e9f5f5;
    transform:scale(1.1);

}
`

const Product = ({item}) => {
    const navigate= useNavigate()
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon onClick={()=>navigate(`/product/${item._id}`)}>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product