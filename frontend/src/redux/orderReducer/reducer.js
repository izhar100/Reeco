import { GET_ORDER_ERROR, GET_ORDER_REQ, GET_ORDER_SUCCESS } from "./actionType"

const initState={
    loading:false,
    orders:[],
    error:false
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case GET_ORDER_REQ:{
            return {
                ...state,loading:true
            }
        }
        case GET_ORDER_SUCCESS:{
            return {
                ...state,loading:false,orders:payload
            }
        }
        case GET_ORDER_ERROR:{
            return {
                ...state,loading:false,error:true
            }
        }
        default:{
            return state
        }
    }
}