<<<<<<< HEAD
import React,{useState,useEffect} from 'react'
import {Link, useLocation,useNavigate} from 'react-router-dom'
import {Form,Button,Row,Col, FormLabel, FormControl} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import FormContainer from '../components/FormContainer.js'
import {login} from '../actions/userActions.js'
const LoginScreen = (props) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const location=useLocation()
    const navigate=useNavigate()
    const redirect=location.search?location.search.split('=')[1]:'/'
    
    const dispatch=useDispatch()
    const userLogin=useSelector(state=>state.userLogin)
    const{loading,error,userInfo}=userLogin
    useEffect(()=>{
      if(userInfo){
        
        // console.log(`redirect to ${redirect}`)
        navigate(redirect)
     }
    },[navigate,userInfo,redirect])

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(login(email,password))
    }

  return (
    <FormContainer >
      <h2 className="text-center">Sign In</h2>
     {loading &&<Loader/>}
     {error && <Message variant='danger'>{error}</Message>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
            <FormLabel>
                Email Address
            </FormLabel>
            <FormControl type='email' 
            placeholder='abc@gmail.com'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            >
            </FormControl>
        </Form.Group>
        <Form.Group controlId='password'>
            <FormLabel>
               Password
            </FormLabel>
            <FormControl type='password' 
            placeholder='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            >
            </FormControl>
            {/* <br /> */}
        </Form.Group>
        <Button type='submit' variant='primary' className='mt-md-3 mt-sm-3 mt-xs-2'>
            Sign In
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
        Don't have an account?{' '}
        <Link to ={redirect?`/register?redirect=${redirect}`:'/register'}>
            Sign Up
        </Link> 
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
=======
import React,{useState,useEffect} from 'react'
import {Link, useLocation,useNavigate} from 'react-router-dom'
import {Form,Button,Row,Col, FormLabel, FormControl} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import FormContainer from '../components/FormContainer.js'
import {login} from '../actions/userActions.js'
const LoginScreen = (props) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const location=useLocation()
    const navigate=useNavigate()
    const redirect=location.search?location.search.split('=')[1]:'/'
    
    const dispatch=useDispatch()
    const userLogin=useSelector(state=>state.userLogin)
    const{loading,error,userInfo}=userLogin
    useEffect(()=>{
      if(userInfo){
        
        // console.log(`redirect to ${redirect}`)
        navigate(redirect)
     }
    },[navigate,userInfo,redirect])

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(login(email,password))
    }

  return (
    <FormContainer >
      <h2 className="text-center">Sign In</h2>
     {loading &&<Loader/>}
     {error && <Message variant='danger'>{error}</Message>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
            <FormLabel>
                Email Address
            </FormLabel>
            <FormControl type='email' 
            placeholder='abc@gmail.com'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            >
            </FormControl>
        </Form.Group>
        <Form.Group controlId='password'>
            <FormLabel>
               Password
            </FormLabel>
            <FormControl type='password' 
            placeholder='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            >
            </FormControl>
            {/* <br /> */}
        </Form.Group>
        <Button type='submit' variant='primary' className='mt-md-3 mt-sm-3 mt-xs-2'>
            Sign In
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
        Don't have an account?{' '}
        <Link to ={redirect?`/register?redirect=${redirect}`:'/register'}>
            Sign Up
        </Link> 
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
>>>>>>> 2e5265cb2c43261425b5782569d83d168965e9d9
 