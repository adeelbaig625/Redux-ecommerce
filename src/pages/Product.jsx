import React from 'react'

import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Anouncement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
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
        </InfoContainer>
       </Wrapper>
       <Newsletter/>
       <Footer/>
   </Container>
  )
}

export default Product