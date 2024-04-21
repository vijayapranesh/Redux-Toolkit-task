import {createSlice} from '@reduxjs/toolkit'
import {data} from '../components/Data'

const initialState = {
    products : data ,
    cartCount:0,
    total:0,
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        incrementFunc : (state ,{payload}) => {
            const item = state.products.find(item => item.name === payload.name)
            item.quantity++
        },
        decrementFunc : (state ,{payload}) => {
            const item = state.products.find(item => item.name === payload.name)
            item.quantity--
        },
        removeFunc : (state ,{payload}) => {
            state.products = state.products.filter(item => item.name !== payload.name)
        },
        updateTotal : (state) => {
            let cartCount = 0
            let total = 0
            state.products.forEach(item => {
                cartCount += item.quantity
                total += item.quantity * item.price
            })
            state.cartCount = cartCount
            state.total = total
        
        }    
    }

})

export const {incrementFunc,decrementFunc,removeFunc,updateTotal} = cartSlice.actions

export default cartSlice.reducer