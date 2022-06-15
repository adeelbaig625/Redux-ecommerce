
import React from 'react'
import styled from "styled-components"
import {useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Anouncement from '../components/Anouncement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from '../responsive'
const Container=styled.div``

const Title=styled.h1`margin: 20px;`

const FilterContainer=styled.div`
display: flex;
justify-content: space-between;

`
const Filter=styled.div`
margin: 20px;
${mobile({margin:"0px 20px",display:"flex",flexDirection:"column"})}
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({marginRight:"0px"})}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({margin:"10px"})}
`;

const Option = styled.option``;
function ProductList() {
  let params=useParams()
  const [filter,setFilters]=React.useState({});
  const [sort,setSort]=React.useState("newest");

  const handleFilters=(e)=>
  {
    const value=e.target.value;
    setFilters({
      ...filter,[e.target.name]:value
    })
  }
  return (
    <Container>
        <Navbar/>
        <Anouncement/>
        <Title>{params.category}</Title>
        <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name='color' onChange={handleFilters}>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name='size' onChange={handleFilters}>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={e=>setSort(e.target.value)}>
            <Option value="newest" >Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
        </FilterContainer>
        <Products cat={params.category} filters={filter} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList