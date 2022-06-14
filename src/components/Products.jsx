import React from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data'
import Product from './Product'
import axios from 'axios'
const Container=styled.div`
   display: flex;
   padding: 20px;
   flex-wrap: wrap;
`
const Products = ({cat,filters,sort}) => {
  const [products,setProducts]=React.useState([])
  const [filteredProducts,setFilteredProducts]=React.useState([]);
  React.useEffect(()=>{
const getProducts=async ()=>
{
  try{
    const res=await axios.get("http://localhost:3000/api/products")
    console.log(res)
}catch(err)
  {
    console.log(err)
  }
  getProducts()
}
  },[cat])
  
  return (
    <Container>
        {popularProducts.map(item=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products