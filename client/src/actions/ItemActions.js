import uuid from 'uuid';
import axios from 'axios';
import {ADD_ITEM,DELETE_ITEM,GET_ITEMS, ITEMS_LOADING} from '../actions/types';

export const getItems = ()=>dispatch=>{
    dispatch(setItemsLoading());
    axios
        .get('/api/items/')
        .then(res=>
            dispatch({
                type: GET_ITEMS,
                payload:res.data
            }))
    return {
        type:GET_ITEMS
    };
}

export const addItem = (item)=> dispatch=>{
    axios
        .post('/api/items',item)
        .then(res=>dispatch({
            type:ADD_ITEM,
            payload:res.data
        }))
}

export const deleteItem = (id)=>(dispatch)=>{
    axios
        .delete(`/api/items/${id}`)
        .then(res=>dispatch({
            type:DELETE_ITEM,
            payload:res.data
    }))
}

export const setItemsLoading = (item)=>{
    return {
        type:ITEMS_LOADING
    };
}
