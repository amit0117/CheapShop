<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import {   useNavigate } from 'react-router-dom'
import {
  Form,
  Button,
  Row,
  Col,
  FormLabel,
  FormControl,
  Container,
  Table
} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import { getUserDetails, updateUserProfile } from '../actions/userActions.js'
import { listMyOrder } from '../actions/orderActions.js'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants.js'
const ProfileScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  // const location = useLocation()
  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const orderListMy = useSelector((state) => state.orderListMy)
  const { loading:loadingOrders,error:errorOrders,orders} = orderListMy

  // console.log(`called in  ${location.pathname}`)
  // console.log(userInfo)
  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      if (!user||!user.name||success) {
        dispatch({type:USER_UPDATE_PROFILE_RESET})
        dispatch(getUserDetails('profile'))
        dispatch(listMyOrder())
      } else {
        setName(user.name)
        setEmail(user.email)  
      }
    }
  }, [dispatch, userInfo, navigate, user,success])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage(`Password mismatch.`)
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }

  return (
    <Container>
      <Row>
        <Col md={5} >
          <h2 className="text-center">
            My Profile
          </h2>
          {message && <Message variant="danger">{message}</Message>}
          {error && <Message variant="danger">{error}</Message>}
          {success && <Message variant="success">Profile Updated !!</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <FormLabel>Name</FormLabel>
              <FormControl
                type="name"
                placeholder="Amit kumar"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></FormControl>
            </Form.Group>
            <Form.Group controlId="email">
              <FormLabel>Email Address</FormLabel>
              <FormControl
                type="email"
                placeholder="abc@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></FormControl>
            </Form.Group>
            <Form.Group controlId="password">
              <FormLabel>Password</FormLabel>
              <FormControl
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></FormControl>
            </Form.Group>
            <Form.Group controlId="Password">
              <FormLabel>Confirm Password</FormLabel>
              <FormControl
                type="Password"
                placeholder="Password"
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
              ></FormControl>
            </Form.Group>
            <Button
              type="submit"
              variant="primary"
              className="mt-md-3 mt-sm-3 mt-xs-1"
            >
              Update Details
            </Button>
          </Form>
        </Col>
        <Col md={7}>
          <h2 className='text-center'>
            My Orders
          </h2>
          {loadingOrders?<Loader/>:errorOrders?<Message variant='danger'>{errorOrders}</Message>:(
            <Table striped bordered hover responsive className='table-sm'>
             <thead>
              <tr>
                <th className='text-center'>Id</th>
                <th className='text-center'>Date</th>
                <th className='text-center'>Total</th>
                <th className='text-center'>Paid</th>
                <th className='text-center'>Delivered</th>
                <th className='text-center'></th>
              </tr>
              </thead>
              <tbody>
                {
                  orders.map(order=>{
                    <tr key={order._id }>
                      <td className='text-center'>{order._id}</td>
                      <td className='text-center'>{order.createdAt.substring(0,10)}</td>
                      <td className='text-center'>{order.totalPrice}</td>
                      <td className='text-center'>{order.isPaid?order.paidAt.substring(0,10):(
                        <i className='fas fa-times' style={{color:'red'}}></i>
                      )}
                      </td>
                      <td>{order.isDelivered?order.deliveredAT.substring(0,10):(
                        <i className='fas fa-times' style={{color:'red'}}></i>
                      )}
                      </td>
                      <td className='text-center'>
                        <LinkContainer to ={`/order/${order._id}`}>
                          <Button variant='info'>Details</Button>
                        </LinkContainer>
                      </td>
                    </tr>
                  })
                }
              </tbody>
            </Table>
          )

          }
        </Col>
      </Row>
    </Container>
  )
}

export default ProfileScreen
=======
import React, { useState, useEffect } from 'react'
import {   useNavigate } from 'react-router-dom'
import {
  Form,
  Button,
  Row,
  Col,
  FormLabel,
  FormControl,
  Container,
  Table
} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import { getUserDetails, updateUserProfile } from '../actions/userActions.js'
import { listMyOrder } from '../actions/orderActions.js'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants.js'
const ProfileScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  // const location = useLocation()
  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const orderListMy = useSelector((state) => state.orderListMy)
  const { loading:loadingOrders,error:errorOrders,orders} = orderListMy

  // console.log(`called in  ${location.pathname}`)
  // console.log(userInfo)
  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      if (!user||!user.name||success) {
        dispatch({type:USER_UPDATE_PROFILE_RESET})
        dispatch(getUserDetails('profile'))
        dispatch(listMyOrder())
      } else {
        setName(user.name)
        setEmail(user.email)  
      }
    }
  }, [dispatch, userInfo, navigate, user,success])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage(`Password mismatch.`)
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }

  return (
    <Container>
      <Row>
        <Col md={5} >
          <h2 className="text-center">
            My Profile
          </h2>
          {message && <Message variant="danger">{message}</Message>}
          {error && <Message variant="danger">{error}</Message>}
          {success && <Message variant="success">Profile Updated !!</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <FormLabel>Name</FormLabel>
              <FormControl
                type="name"
                placeholder="Amit kumar"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></FormControl>
            </Form.Group>
            <Form.Group controlId="email">
              <FormLabel>Email Address</FormLabel>
              <FormControl
                type="email"
                placeholder="abc@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></FormControl>
            </Form.Group>
            <Form.Group controlId="password">
              <FormLabel>Password</FormLabel>
              <FormControl
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></FormControl>
            </Form.Group>
            <Form.Group controlId="Password">
              <FormLabel>Confirm Password</FormLabel>
              <FormControl
                type="Password"
                placeholder="Password"
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
              ></FormControl>
            </Form.Group>
            <Button
              type="submit"
              variant="primary"
              className="mt-md-3 mt-sm-3 mt-xs-1"
            >
              Update Details
            </Button>
          </Form>
        </Col>
        <Col md={7}>
          <h2 className='text-center'>
            My Orders
          </h2>
          {loadingOrders?<Loader/>:errorOrders?<Message variant='danger'>{errorOrders}</Message>:(
            <Table striped bordered hover responsive className='table-sm'>
             <thead>
              <tr>
                <th className='text-center'>Id</th>
                <th className='text-center'>Date</th>
                <th className='text-center'>Total</th>
                <th className='text-center'>Paid</th>
                <th className='text-center'>Delivered</th>
                <th className='text-center'></th>
              </tr>
              </thead>
              <tbody>
                {
                  orders.map(order=>{
                    <tr key={order._id }>
                      <td className='text-center'>{order._id}</td>
                      <td className='text-center'>{order.createdAt.substring(0,10)}</td>
                      <td className='text-center'>{order.totalPrice}</td>
                      <td className='text-center'>{order.isPaid?order.paidAt.substring(0,10):(
                        <i className='fas fa-times' style={{color:'red'}}></i>
                      )}
                      </td>
                      <td>{order.isDelivered?order.deliveredAT.substring(0,10):(
                        <i className='fas fa-times' style={{color:'red'}}></i>
                      )}
                      </td>
                      <td className='text-center'>
                        <LinkContainer to ={`/order/${order._id}`}>
                          <Button variant='info'>Details</Button>
                        </LinkContainer>
                      </td>
                    </tr>
                  })
                }
              </tbody>
            </Table>
          )

          }
        </Col>
      </Row>
    </Container>
  )
}

export default ProfileScreen
>>>>>>> 2e5265cb2c43261425b5782569d83d168965e9d9
