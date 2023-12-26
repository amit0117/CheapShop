<<<<<<< HEAD
import React,{useState} from 'react'
import {Form,Button,Col } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { useNavigate } from 'react-router-dom'
import { savePaymentMethod } from '../actions/cartActions.js'
const PaymentScreen = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const cart=useSelector(state=>state.cart)
  const {shippingAddress}=cart
  const [paymentMethod,setPaymentMethod]=useState('PayPal')
  if(!shippingAddress){
    navigate('/shipping')
  }
  const submitHandler=(e)=>{
  e.preventDefault()
  dispatch(savePaymentMethod(paymentMethod))
  navigate('/placeorder')
  }
  return (
   <FormContainer>
    <CheckoutSteps step1 step2 step3/>
    <h2 className="text-center mt-md-3 mt-sm-1">Payment Method</h2>
    <Form onSubmit={submitHandler}>
    <Form.Group >
     <Form.Label as='legend' >Select Method
    </Form.Label>   
    <Col>
    <Form.Check type='radio'
    label='PayPal or Credit Card'
    id='PayPal' 
    name='paymentMethod'
    value='PayPal'
    checked
    onChange={(e)=>setPaymentMethod(e.target.value)}>
    </Form.Check>
    <Form.Check type='radio'
    label='Stripe'
    id='Stripe' 
    name='paymentMethod'
    value='Stripe'
    disabled    
    onChange={(e)=>setPaymentMethod(e.target.value)}>
    </Form.Check>
    </Col>
    </Form.Group>
        <Button type="submit" variant='primary' className='mt-md-3 mt-sm-2' >
         Proceed to Pay
        </Button>
    </Form>
   </FormContainer>
  )
}

export default PaymentScreen
=======
import React,{useState} from 'react'
import {Form,Button,Col } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { useNavigate } from 'react-router-dom'
import { savePaymentMethod } from '../actions/cartActions.js'
const PaymentScreen = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const cart=useSelector(state=>state.cart)
  const {shippingAddress}=cart
  const [paymentMethod,setPaymentMethod]=useState('PayPal')
  if(!shippingAddress){
    navigate('/shipping')
  }
  const submitHandler=(e)=>{
  e.preventDefault()
  dispatch(savePaymentMethod(paymentMethod))
  navigate('/placeorder')
  }
  return (
   <FormContainer>
    <CheckoutSteps step1 step2 step3/>
    <h2 className="text-center mt-md-3 mt-sm-1">Payment Method</h2>
    <Form onSubmit={submitHandler}>
    <Form.Group >
     <Form.Label as='legend' >Select Method
    </Form.Label>   
    <Col>
    <Form.Check type='radio'
    label='PayPal or Credit Card'
    id='PayPal' 
    name='paymentMethod'
    value='PayPal'
    checked
    onChange={(e)=>setPaymentMethod(e.target.value)}>
    </Form.Check>
    <Form.Check type='radio'
    label='Stripe'
    id='Stripe' 
    name='paymentMethod'
    value='Stripe'
    disabled    
    onChange={(e)=>setPaymentMethod(e.target.value)}>
    </Form.Check>
    </Col>
    </Form.Group>
        <Button type="submit" variant='primary' className='mt-md-3 mt-sm-2' >
         Proceed to Pay
        </Button>
    </Form>
   </FormContainer>
  )
}

export default PaymentScreen
>>>>>>> 2e5265cb2c43261425b5782569d83d168965e9d9
