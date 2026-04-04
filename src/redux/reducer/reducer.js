const INIT_STATE_CART={
    carts:[]
 }
 const INIT_STATE_PRODUCTS={
   products:[],
   loading:false,
   err:null
 }

export const cartreducer=(state=INIT_STATE_CART,action)=>{
    switch(action.type){
      case 'add_cart':
        const exists=state.carts.find(ele=>ele.title===action.payload.title)
        if(exists){
          return state
        }
       return {
         ...state,
         carts:[...state.carts,action.payload]
       }
       case 'delete_cart':
        const remove_item=state.carts.filter(ele=>ele.title!==action.payload.title)
        return {
              ...state,
              carts:remove_item
        }
        default:
          return state
    }
}

export const productsreducer=(state=INIT_STATE_PRODUCTS,action)=>{
  switch(action.type){
    case 'PRODUCT_REQUEST':
      return{
        ...state,
        loading:true
      }
      case 'PRODUCT_SUCCESS':
        return{
          ...state,
          products:action.payload,
          loading:false
           }
       case 'PRODUCT_FAIL':
        return{
          ...state,
          products:[],
          err:action.payload,
          loading:false
        }
        default:
          return state
  }
}