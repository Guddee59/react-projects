import Button from '../Button';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';


const MainContaier=styled.div`
margin:50px 0;
max-width:1600px;
padding:0 50px;
display:flex;
justify-content: space-between;
gap:40px;
.order-details{
  max-width:600px;
  width:80%;
  position:relative;
 .item{
  display:flex;
  gap:40px;
  margin-bottom:40px;
  border-bottom:1px solid #ccc;
  padding-bottom: 20px;
.product-image{
  img{
  width:150px;
  height:150px;
  }
 }
h4{
    width:250px;
    font-size:18px;
    padding-bottom:10px;
    border-bottom:1px solid #ccc;
  }
}
}
.order-summary{
   display:flex;
  justify-content: center;
  border:1px solid #ccc;
  width:500px;
}
`

export default function Carts() {
   const {carts} =useSelector(state=>state.cartreducer)
   const dispatch=useDispatch()
   return (
    <MainContaier>
      <div className='order-details'>
      {
        carts?.map((ele)=>
            <div className='item'>
              <div className='product-image'  >
              <img src={ele.image} alt={ele.title}/>
              </div>
              <div className='product-description'>
              <h4>{ele.title}</h4>
              <p>Rating: {ele?.rating?.rate} <span>({ele?.rating?.count})</span></p>
              <p><b>Price:</b> ₹{ele.price}</p> 
              <Button text='remove' onClick={()=>dispatch({type:'delete_cart', payload:ele})}/>
              </div>
            </div>
        )
      }
      </div>
      <div className="order-summary">
        <h3>Order Summary</h3>
      </div>
    </MainContaier>
  )
}
