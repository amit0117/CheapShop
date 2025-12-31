import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from "../constants/cartConstants.js";
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

// For Better Understanding of why we need Thunk Middleware in Redux
// For "How to dispatch a Redux action with a timeout?"Visit: https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559
// For "Why do we need middleware for async flow?" Visit: https://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux/34599594#34599594

// Since we have used Thunk we will get the dispatch and getState as arguments
// Because thunk middleware check if the action is a function then it will call the function and pass the dispatch and getState as arguments
// else call the next(action) to the next middleware or reducer
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
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
  });
  // These Local Storage Items are used to persist the cart items and shipping address in the browser
  // When the user will logout or close the browser then store will re-intialized and the cart items and shipping address will be lost
  // So we need to store the cart items and shipping address in the local storage
  // So that when the user will login again then the cart items and shipping address will be loaded from the local storage
  // And the user will not lose the cart items and shipping address
  // The Re-initialization of store from the local storage has been handled in the store.js file
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
export const saveShippingAddress = (data) => (dispatch, getState) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};
export const savePaymentMethod = (data) => (dispatch, getState) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });
  localStorage.setItem("paymentMethod", JSON.stringify(data));
};

// Also why to use Action Creators in Redux
// So that components don't have to implement the same logic again and again
// Also the component should not aware about that action is async or sync
