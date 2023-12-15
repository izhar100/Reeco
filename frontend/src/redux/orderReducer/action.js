import { api } from "../../db"
import { GET_ORDER_ERROR, GET_ORDER_REQ, GET_ORDER_SUCCESS, UPDATE_ORDER } from "./actionType"

export const getOrders=async(dispatch)=>{
    try {
        dispatch({type:GET_ORDER_REQ})
        const res=await fetch(api)
        const data=await res.json()
        dispatch({type:GET_ORDER_SUCCESS,payload:data})
        return data;
    } catch (error) {
        console.log(error)
        dispatch({type:GET_ORDER_ERROR})
    }

}

export const updateOrder=(data)=>async(dispatch)=>{
    try {
        const res=await fetch(`${api}/${data.id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data.order)
        })
        const result=await res.json()
        dispatch({type:UPDATE_ORDER,payload:[result]})
        return result
    } catch (error) {
        console.log(error)
    }
}