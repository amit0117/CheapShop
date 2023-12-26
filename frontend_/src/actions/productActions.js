<<<<<<< HEAD
import axios from 'axios'
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
} from '../constants/productConstant'

export const listProducts = (keyword='',pageNumber='') => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })
    const { data } = await axios.get(`/api/products/?keyword=${keyword}&pageNumber=${pageNumber}`)
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const listTopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TOP_REQUEST })
    const { data } = await axios.get(`/api/products/top`)
    // console.log(`called in productAction `)
    // console.log(data)
    dispatch({
      type: PRODUCT_TOP_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}


export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

     await axios.delete(`/api/products/${id}`, config)
    // console.log( `called in orderaction getorderPAY and id is${id} order is${JSON.stringify(data)} `)
    // console.log(data);
    dispatch({ type: PRODUCT_DELETE_SUCCESS})
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    // console.log('called in orderAction')

    // console.log(userInfo)
    // console.log(order)
  const {data}=   await axios.post(`/api/products`, {},config)
    // console.log( `called in orderaction getorderPAY and id is${id} order is${JSON.stringify(data)} `)
    // console.log(data);
    dispatch({ type: PRODUCT_CREATE_SUCCESS,payload:data})
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_UPDATE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    // console.log('called in orderAction')

    // console.log(userInfo)
    // console.log(order)
  const {data}=   await axios.put(`/api/products/${product._id}`, product,config)
    // console.log( `called in orderaction getorderPAY and id is${id} order is${JSON.stringify(data)} `)
    // console.log(data);
    dispatch({ type: PRODUCT_UPDATE_SUCCESS,payload:data})
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })

  } catch (error) {
    dispatch({
      type: PRODUCT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const createProductReview = (id,review) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    // console.log('called in orderAction')

    // console.log(userInfo)
    // console.log(order)
  await axios.post(`/api/products/${id}/reviews`, review,config)
    // console.log( `called in orderaction getorderPAY and id is${id} order is${JSON.stringify(data)} `)
    // console.log(data);
    dispatch({ type: PRODUCT_CREATE_REVIEW_SUCCESS})
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
=======
import axios from 'axios'
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
} from '../constants/productConstant'

export const listProducts = (keyword='',pageNumber='') => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })
    const { data } = await axios.get(`/api/products/?keyword=${keyword}&pageNumber=${pageNumber}`)
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const listTopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TOP_REQUEST })
    const { data } = await axios.get(`/api/products/top`)
    // console.log(`called in productAction `)
    // console.log(data)
    dispatch({
      type: PRODUCT_TOP_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}


export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

     await axios.delete(`/api/products/${id}`, config)
    // console.log( `called in orderaction getorderPAY and id is${id} order is${JSON.stringify(data)} `)
    // console.log(data);
    dispatch({ type: PRODUCT_DELETE_SUCCESS})
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    // console.log('called in orderAction')

    // console.log(userInfo)
    // console.log(order)
  const {data}=   await axios.post(`/api/products`, {},config)
    // console.log( `called in orderaction getorderPAY and id is${id} order is${JSON.stringify(data)} `)
    // console.log(data);
    dispatch({ type: PRODUCT_CREATE_SUCCESS,payload:data})
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_UPDATE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    // console.log('called in orderAction')

    // console.log(userInfo)
    // console.log(order)
  const {data}=   await axios.put(`/api/products/${product._id}`, product,config)
    // console.log( `called in orderaction getorderPAY and id is${id} order is${JSON.stringify(data)} `)
    // console.log(data);
    dispatch({ type: PRODUCT_UPDATE_SUCCESS,payload:data})
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })

  } catch (error) {
    dispatch({
      type: PRODUCT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const createProductReview = (id,review) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    // console.log('called in orderAction')

    // console.log(userInfo)
    // console.log(order)
  await axios.post(`/api/products/${id}/reviews`, review,config)
    // console.log( `called in orderaction getorderPAY and id is${id} order is${JSON.stringify(data)} `)
    // console.log(data);
    dispatch({ type: PRODUCT_CREATE_REVIEW_SUCCESS})
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
>>>>>>> 2e5265cb2c43261425b5782569d83d168965e9d9
