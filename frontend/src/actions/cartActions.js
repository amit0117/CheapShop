import axios from 'axios'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants.js'
// Writing Async Logic with Thunks
// So far, all the logic in our application has been synchronous.
//  Actions are dispatched, the store runs the reducers and calculates
//  the new state, and the dispatch function finishes. But, the JavaScript 
// language has many ways to write code that is asynchronous, and our apps 
// normally have async logic for things like fetching data from an API. We need
//  a place to put that async logic in our Redux apps.

// A thunk is a specific kind of Redux function that can contain asynchronous logic. 
// Thunks are written using two functions:

// An inside thunk function, which gets dispatch and getState as arguments
// The outside creator function, which creates and returns the thunk function
// we can use try catch here for error handling

// why we need of redux-thunk bcz we can't make any asynchronous call inside a reducer
// We know that we're not allowed to put any kind of async logic in reducers. 
// But, that logic has to live somewhere.
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })
  // console.log(getState.cart)
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
export const saveShippingAddress = (data) => (dispatch, getState) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  })
  localStorage.setItem('shippingAddress', JSON.stringify(data))
}
export const savePaymentMethod = (data) => (dispatch, getState) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  })
  localStorage.setItem('paymentMethod', JSON.stringify(data))
}
