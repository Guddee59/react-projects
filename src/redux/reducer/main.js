// This file is to handle multiple reducers
import { combineReducers} from "redux";
import { cartreducer, productsreducer } from "./reducer";



export const rootreducer=combineReducers({
    cartreducer,
    productsreducer
})
;
