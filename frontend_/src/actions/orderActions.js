<<<<<<< HEAD
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_DELIVERED_REQUEST,
  ORDER_DELIVERED_SUCCESS,
  ORDER_DELIVERED_FAIL,
} from '../constants/orderConstants'
import axios from 'axios'
export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/orders`, order, config)
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST })
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
    const { data } = await axios.get(`/api/orders/${id}`,config)
    // console.log( `called in orderaction getorderdetails and id is${id} order is${JSON.stringify(data)} `)
    // console.log(data);
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const payOrder = (id, paymentResult) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_PAY_REQUEST })
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
    const { data } = await axios.put(
      `/api/orders/${id}/pay`,
      paymentResult,
      config,
    )
    // console.log( `called in orderaction getorderPAY and id is${id} order is${JSON.stringify(data)} `)
    // console.log(data);
    dispatch({ type: ORDER_PAY_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ORDER_PAY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const deliverOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DELIVERED_REQUEST })
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
    const { data } = await axios.put(
      `/api/orders/${order._id}/deliver`,{},
      config,
    )
    // console.log( `called in orderaction getorderPAY and id is${id} order is${JSON.stringify(data)} `)
    // console.log(data);
    dispatch({ type: ORDER_DELIVERED_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ORDER_DELIVERED_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const listMyOrder = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_MY_REQUEST })
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
    const { data } = await axios.get(`/api/orders/myorders`, config)

    dispatch({ type: ORDER_LIST_MY_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ORDER_LIST_MY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const listOrder = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_REQUEST })
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
    const { data } = await axios.get(`/api/orders`, config)
    // console.log( `called in orderaction getorderPAY and id is${id} order is${JSON.stringify(data)} `)
    // console.log(data);
    dispatch({ type: ORDER_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ORDER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
=======
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_DELIVERED_REQUEST,
  ORDER_DELIVERED_SUCCESS,
  ORDER_DELIVERED_FAIL,
} from '../constants/orderConstants'
import axios from 'axios'
export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/orders`, order, config)
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST })
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
    const { data } = await axios.get(`/api/orders/${id}`,config)
    // console.log( `called in orderaction getorderdetails and id is${id} order is${JSON.stringify(data)} `)
    // console.log(data);
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const payOrder = (id, paymentResult) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_PAY_REQUEST })
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
    const { data } = await axios.put(
      `/api/orders/${id}/pay`,
      paymentResult,
      config,
    )
    // console.log( `called in orderaction getorderPAY and id is${id} order is${JSON.stringify(data)} `)
    // console.log(data);
    dispatch({ type: ORDER_PAY_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ORDER_PAY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const deliverOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DELIVERED_REQUEST })
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
    const { data } = await axios.put(
      `/api/orders/${order._id}/deliver`,{},
      config,
    )
    // console.log( `called in orderaction getorderPAY and id is${id} order is${JSON.stringify(data)} `)
    // console.log(data);
    dispatch({ type: ORDER_DELIVERED_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ORDER_DELIVERED_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const listMyOrder = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_MY_REQUEST })
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
    const { data } = await axios.get(`/api/orders/myorders`, config)

    dispatch({ type: ORDER_LIST_MY_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ORDER_LIST_MY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const listOrder = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_REQUEST })
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
    const { data } = await axios.get(`/api/orders`, config)
    // console.log( `called in orderaction getorderPAY and id is${id} order is${JSON.stringify(data)} `)
    // console.log(data);
    dispatch({ type: ORDER_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ORDER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
>>>>>>> 2e5265cb2c43261425b5782569d83d168965e9d9
