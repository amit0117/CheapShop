<<<<<<< HEAD
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productCreateReviewReducer,
  productTopRatedReducer
} from './reducers/productReducers.js'
import { cartReducer } from './reducers/cartReducer.js'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer
} from './reducers/userReducer.js'
import {
  orderCreateReducer ,
  orderDetailsReducer,
  orderPayReducer,
  orderListMyReducer,
  orderListReducer,
  orderDeliverReducer,
} from './reducers/orderReducer.js'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete:productDeleteReducer,
  productCreate:productCreateReducer,
  productUpdate:productUpdateReducer,
  productCreateReview:productCreateReviewReducer,
  productTopRated:productTopRatedReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList:userListReducer,
  userDelete:userDeleteReducer,
  userUpdate:userUpdateReducer,
  orderCreate:orderCreateReducer,
  orderDetails:orderDetailsReducer,
  orderPay:orderPayReducer,
  orderListMy:orderListMyReducer,
  orderList:orderListReducer,
  orderDeliver:orderDeliverReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? localStorage.getItem('userInfo')
  : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? localStorage.getItem('shippingAddress')
  : {}

const intialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: JSON.parse(userInfoFromStorage) },
}
const middleware = [thunk]
const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
=======
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productCreateReviewReducer,
  productTopRatedReducer
} from './reducers/productReducers.js'
import { cartReducer } from './reducers/cartReducer.js'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer
} from './reducers/userReducer.js'
import {
  orderCreateReducer ,
  orderDetailsReducer,
  orderPayReducer,
  orderListMyReducer,
  orderListReducer,
  orderDeliverReducer,
} from './reducers/orderReducer.js'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete:productDeleteReducer,
  productCreate:productCreateReducer,
  productUpdate:productUpdateReducer,
  productCreateReview:productCreateReviewReducer,
  productTopRated:productTopRatedReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList:userListReducer,
  userDelete:userDeleteReducer,
  userUpdate:userUpdateReducer,
  orderCreate:orderCreateReducer,
  orderDetails:orderDetailsReducer,
  orderPay:orderPayReducer,
  orderListMy:orderListMyReducer,
  orderList:orderListReducer,
  orderDeliver:orderDeliverReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? localStorage.getItem('userInfo')
  : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? localStorage.getItem('shippingAddress')
  : {}

const intialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: JSON.parse(userInfoFromStorage) },
}
const middleware = [thunk]
const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
>>>>>>> 2e5265cb2c43261425b5782569d83d168965e9d9
