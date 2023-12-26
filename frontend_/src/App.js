import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import {Container } from 'react-bootstrap'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import CartScreen from './screens/CartScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import ShippingScreen from './screens/ShippingScreen.js';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
function App() {
  return (
    <Router>
    <Header/>    
    <main className='py-3'>
      <Container>
        
      </Container>
         <Routes>
         <Route path='/order/:id' element={<OrderScreen/>}/>
         <Route path='/search/:keyword' element={<HomeScreen/>} exact/>
         <Route path='/' element={<HomeScreen/>} exact/>
         <Route path='/page/:pageNumber' element={<HomeScreen/>} exact/>
         <Route path='/search/:keyword/page/:pageNumber' element={<HomeScreen/>} exact/>
         <Route path='/login' element={<LoginScreen/>}/>
         <Route path='/payment' element={<PaymentScreen/>}/>
         <Route path='/placeorder' element={<PlaceOrderScreen/>}/>
         <Route path='/login/shipping' element={<ShippingScreen/>}/>
         <Route path='/register' element={<RegisterScreen/>}/>
         <Route path='/profile' element={<ProfileScreen/>}/>
         <Route path='/products/:id' element={<ProductScreen/>}/>
         <Route path='/cart/:id?' element={<CartScreen/>} />
         <Route path='/admin/userlist' element={<UserListScreen/>} />
         <Route path='/admin/user/:id/edit' element={<UserEditScreen/>} />
         <Route path='/admin/productlist' element={<ProductListScreen/>} exact/>
         <Route path='/admin/productlist/:pageNumber' element={<ProductListScreen/>} exact/>
         <Route path='/admin/orderlist' element={<OrderListScreen/>} exact/>
         <Route path='/admin/product/:id/edit' element={<ProductEditScreen/>} exact />
         </Routes>
    </main>
    <Footer/>
    </Router>
  );
}

// to make id as optional we use ? with id in cartscreen page
export default App;
