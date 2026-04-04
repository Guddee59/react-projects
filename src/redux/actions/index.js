import axios from 'axios';
export const ADD=(item)=>{  
    return{
        type:'add_cart',
        payload:item
    }
}

export const DELETE=(item)=>{  
    return{
        type:'delete_cart',
        payload:item
    }
}

export const getProductData=()=>async(dispatch)=>{
 dispatch({
    type:'PRODUCT_REQUEST'
 })
 try{
   const apiData= await axios.get('https://fakestoreapi.com/products')
   dispatch({
    type:'PRODUCT_SUCCESS',
    payload:apiData.data
   })
 }
 catch(err){
   dispatch({
    type:'PRODUCT_FAIL',
    payload:err.message 
   })
 }
}