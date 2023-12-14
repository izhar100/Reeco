import { api } from "../../db"
import { GET_ORDER_ERROR, GET_ORDER_REQ, GET_ORDER_SUCCESS } from "./actionType"

export const getOrders=async(dispatch)=>{
    try {
        dispatch({type:GET_ORDER_REQ})
        const res=await fetch(api)
        const data=await res.json()
        console.log(data)
        dispatch({type:GET_ORDER_SUCCESS,payload:data})
    } catch (error) {
        console.log(error)
        dispatch({type:GET_ORDER_ERROR})
    }

}