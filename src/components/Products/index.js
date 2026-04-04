import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD, getProductData } from '../../redux/actions';
import styled from 'styled-components';
import Button from '../Button';
import CircularProgress from '@mui/material/CircularProgress';




const ProductContainer=styled.div`
max-width:1600px;
width:100%;
height:100%;
padding:50px 0px;
margin:0;
.items{
  display:flex;
  flex-wrap:wrap;
  gap:20px;
  overflow-x: hidden;
  justify-content:center;
 .item{
   width:18%;
   border:1px solid #ccc;
   padding:20px;
    .product-image{
     display:flex;
     justify-content:center;
     margin-bottom:20px;
    img{
     width:150px;
    height:150px;
    }
  }
  .title{
    h4{
      font-size:18px;
    }
  }
  .description{
    span:nth-child(2){
   display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
    }
  }
  .add-cart{
    margin:10px 0;
    button{
      width:120px;
      height:35px;
      background: #2563EB;
      color:#fff;
      display:flex;
      justify-content:center;
      align-items:center;
    }
    .MuiCircularProgress-root{
      width:25px!important;
      height:25px!important;
      color:#fff;
    }
}
}
}
button{
  cursor: pointer;
}
`

export default function Products() {
const dispatch = useDispatch();
const { loading, products, err }= useSelector((state) => state.productsreducer);
const [cartLoading,setCartLoading]=useState({loading:false,id:null})

useEffect(()=>{
   dispatch(getProductData());
},[dispatch])

const addToCart=(item)=>{
setCartLoading({  loading:true,id:item.id})
setTimeout(() => {
  dispatch(ADD(item));
  setCartLoading(false)
},1000);
}

  return (
    <ProductContainer>
      <div className='items'>
      {
      products?.map(item=>
      <div className='item'>
      <div className='product-image'>
       <img src={item?.image} />
      </div>
        <div className='title'>
          <h4>{item?.title}</h4>
        </div>
        <div className='rating'>
          <span><b>Rating : </b>{item?.rating?.rate}</span>
          <span>({item?.rating?.count})</span>
        </div>
        <div className='price'>
          <p><span><b>Price : </b></span>₹{item?.price}</p>
        </div>
        <div className='description'>
         <span><b>Description : </b></span> 
          <span>{item?.description}</span>
        </div>
        <div className='add-cart'>
          {
            cartLoading.loading && cartLoading.id == item.id ? <Button className='loading-cta' text={<CircularProgress />}/>
            : <Button text="Add to Cart" onClick={()=>addToCart(item)} />
          }
        
        </div>
       </div>
     
        )
      }

      </div>
 
    </ProductContainer>
  )
}
