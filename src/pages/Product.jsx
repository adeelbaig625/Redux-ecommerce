import React from 'react'

import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Anouncement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'

const Container=styled.div``
const Wrapper=styled.div`
padding:50px;
display: flex;
`
const ImgContainer=styled.div`
flex:1;
`
const Image=styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`
const InfoContainer=styled.div`
flex:1;
padding: 0px 50px;
`
const Title=styled.h1`
font-weight: 200;
`
const Desc=styled.p`
margin: 20px 0px;
`
const Price=styled.span`
font-weight: 100;
font-size: 40px; 
`
const FilterContainer= styled.div`
display: flex;
width: 50%;
margin: 30px 0px;
justify-content: space-between;
`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
  margin: 0px 5px;
  cursor:pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
display: flex;
width: 50%;
align-items: center;
justify-content: space-between;
`
const AmountContainer = styled.div`
display: flex;
align-items:center;
font-weight: 700;`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px;
`
const Button = styled.button`
padding: 15px;
border: 1px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
  background-color: #f8f4f4;
}
`

function Product() {
  return (
   <Container>
       <Navbar/>
       <Announcement/>
       <Wrapper>
        <ImgContainer>
        <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png"/>
        </ImgContainer>
        <InfoContainer>
            <Title>SweatShirt</Title>
            <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, expedita sed. Adipisci mollitia quia quas maiores delectus aliquid doloribus ad, sunt illo velit soluta fugiat eius in sed aperiam debitis.
            </Desc>
            <Price>$20</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black"/>

                <FilterColor color="darkblue"/>
                <FilterColor color="gray"/>
                
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
                
              </Filter>
            </FilterContainer>
      <AddContainer>
        <AmountContainer>
        <Remove/>
          <Amount>1</Amount>
          <Add/>
        </AmountContainer>
        <Button>ADD TO CART</Button>
      </AddContainer>
        </InfoContainer>
       </Wrapper>
       <Newsletter/>
       <Footer/>
   </Container>
  )
}

export default Product