<<<<<<< HEAD
import React,{useState,useEffect} from 'react'
import {Link, useLocation,useNavigate} from 'react-router-dom'
import {Form,Button,Row,Col, FormLabel, FormControl} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import FormContainer from '../components/FormContainer.js'
import {register} from '../actions/userActions.js'

const RegisterScreen = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const [confirmPassword,setconfirmPassword]=useState('')
    const [message,setMessage]=useState(null)

    const location=useLocation()
    const redirect=location.search?location.search.split('=')[1]:'/'
    const userRegister=useSelector(state=>state.userRegister)
    const{loading,error,userInfo}=userRegister

    // console.log(`called in  ${location.pathname}`)
    // console.log(userInfo)
    useEffect(()=>{
     if(userInfo){
        
        navigate(redirect)
     }
  
    },[navigate,userInfo,redirect])

    const submitHandler=(e)=>{
        e.preventDefault()
        if(password!==confirmPassword){
            setMessage(`Passowrd don't match.`)
        }
        else{
        dispatch(register(name,email,password))
        }
    }

  return (
    <div className=''>
    <FormContainer >
      <h2 className="text-center">Sign Up</h2>
    {message&&<Message variant='danger'>{message}</Message>}
    {error && <Message variant='danger'>{error}</Message>}
    {loading &&<Loader/>}
      <Form onSubmit={submitHandler} >
        <Form.Group controlId='name'>
            <FormLabel>
              Name
            </FormLabel>
            <FormControl type='name' 
            placeholder='Amit Kumar '
            value={name}
            onChange={(e)=>setName(e.target.value)}
            >
            </FormControl>
        </Form.Group>
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
        </Form.Group>
        <Form.Group controlId='Password'>
            <FormLabel>
               Confirm Password
            </FormLabel>
            <FormControl type='Password' 
            placeholder=' Password'
            value={confirmPassword}
            onChange={(e)=>setconfirmPassword(e.target.value)}
            >
            </FormControl>
        </Form.Group>
        <Button type='submit' variant='primary' className='mt-md-3 mt-sm-3 mt-xs-1'>
            Sign Up
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
        Already have an account?{' '}
        <Link to ={redirect?`/login?redirect=${redirect}`:'/login'}>
            Sign In
        </Link>
        </Col>
      </Row>
    </FormContainer>
    </div>
  )
}

export default RegisterScreen
=======
import React,{useState,useEffect} from 'react'
import {Link, useLocation,useNavigate} from 'react-router-dom'
import {Form,Button,Row,Col, FormLabel, FormControl} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import FormContainer from '../components/FormContainer.js'
import {register} from '../actions/userActions.js'

const RegisterScreen = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const [confirmPassword,setconfirmPassword]=useState('')
    const [message,setMessage]=useState(null)

    const location=useLocation()
    const redirect=location.search?location.search.split('=')[1]:'/'
    const userRegister=useSelector(state=>state.userRegister)
    const{loading,error,userInfo}=userRegister

    // console.log(`called in  ${location.pathname}`)
    // console.log(userInfo)
    useEffect(()=>{
     if(userInfo){
        
        navigate(redirect)
     }
  
    },[navigate,userInfo,redirect])

    const submitHandler=(e)=>{
        e.preventDefault()
        if(password!==confirmPassword){
            setMessage(`Passowrd don't match.`)
        }
        else{
        dispatch(register(name,email,password))
        }
    }

  return (
    <div className=''>
    <FormContainer >
      <h2 className="text-center">Sign Up</h2>
    {message&&<Message variant='danger'>{message}</Message>}
    {error && <Message variant='danger'>{error}</Message>}
    {loading &&<Loader/>}
      <Form onSubmit={submitHandler} >
        <Form.Group controlId='name'>
            <FormLabel>
              Name
            </FormLabel>
            <FormControl type='name' 
            placeholder='Amit Kumar '
            value={name}
            onChange={(e)=>setName(e.target.value)}
            >
            </FormControl>
        </Form.Group>
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
        </Form.Group>
        <Form.Group controlId='Password'>
            <FormLabel>
               Confirm Password
            </FormLabel>
            <FormControl type='Password' 
            placeholder=' Password'
            value={confirmPassword}
            onChange={(e)=>setconfirmPassword(e.target.value)}
            >
            </FormControl>
        </Form.Group>
        <Button type='submit' variant='primary' className='mt-md-3 mt-sm-3 mt-xs-1'>
            Sign Up
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
        Already have an account?{' '}
        <Link to ={redirect?`/login?redirect=${redirect}`:'/login'}>
            Sign In
        </Link>
        </Col>
      </Row>
    </FormContainer>
    </div>
  )
}

export default RegisterScreen
>>>>>>> 2e5265cb2c43261425b5782569d83d168965e9d9
 