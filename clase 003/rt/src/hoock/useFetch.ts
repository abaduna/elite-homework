import { API } from "../APi"
import { SET_ADD, SET_ERROR } from "../action/Fetch"
import { fetchReducer,initialState } from "../reducers/Fetch"
import {useReducer}from "react"


export const useFetch =()=>{
    const [state, dispatch] = useReducer(fetchReducer,initialState)

    const fetchData =async <T> ()=>{
        try {
            const {data} = await API.get("")
            dispatch({type:SET_ADD,payload:data})
            console.log(data);
            
        } catch (error) {
            dispatch({type:SET_ERROR})
        }
    }
    return {state,fetchData}
}