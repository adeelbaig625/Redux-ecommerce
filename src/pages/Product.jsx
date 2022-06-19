import React from 'react'
import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Anouncement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../responsive'
import {useParams } from 'react-router-dom'
import {publicRequest} from '../requestMethod'
import {addProduct} from '../redux/cartRedux'
import {useDispatch} from 'react-redux'

const Container=styled.div``
const Wrapper=styled.div`
padding:50px;
display: flex;
${mobile({padding:"10px",flexDirection:"column"})}
`
const ImgContainer=styled.div`
flex:1;
`
const Image=styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height:"40vh"})}
`
const InfoContainer=styled.div`
flex:1;
padding: 0px 50px;
${mobile({padding:"10px"})}
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
${mobile({width:"100%"})}
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
  border:1px solid #000;
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
${mobile({width:"100%"})}
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
  let params=useParams()
  const id=params.id
  const [product,setProduct]=React.useState({});
  const [quantity,setQuantity]=React.useState(1)
  const [color,setColor] = React.useState("");
  const [size, setSize] = React.useState("");
  const dispatch = useDispatch()
  React.useEffect(()=>
  {
   const getProduct= async ()=>
   {
    try{
      const res=await publicRequest.get("/products/find/"+id)
      console.log(res.data)
      setProduct(res.data)
    }catch{}
   }
   getProduct()
  },[id])

  const handleQuantity = (type) => {
    if(type==="desc")
    {
      console.log(product.size)
      quantity>1 && setQuantity(quantity-1)
    }
    else
    {
     setQuantity(quantity+1)
    } 
  }

  const handleClick=()=>
  {
    dispatch(addProduct({product,quantity,price:product.price * quantity}));
  
  }
  return (
   <Container>
       <Navbar/>
       <Announcement/>
       <Wrapper>
        <ImgContainer>
        <Image src={product?.img}/>
        </ImgContainer>
        <InfoContainer>
            <Title>{product?.title}</Title>
            <Desc>
            {product?.desc}
            </Desc>
            <Price>$ {product?.price}</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                {product.color?.map((c)=>
                  <FilterColor color={c} key={c}/>
                )}
              
                
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                {product.size?.map((s)=>
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                )}
                
                </FilterSize>
                
              </Filter>
            </FilterContainer>
      <AddContainer>
        <AmountContainer>
        <Remove onClick={()=>handleQuantity("desc")}/>
          <Amount>{quantity}</Amount>
          <Add onClick={()=>handleQuantity("inc")}/>
        </AmountContainer>
        <Button onClick={()=>handleClick()}>ADD TO CART</Button>
      </AddContainer>
        </InfoContainer>
       </Wrapper>
       <Newsletter/>
       <Footer/>
   </Container>
  )
}

export default Product