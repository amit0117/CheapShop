<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Form,
  Button,
  FormLabel,
  FormControl,
  Container,
  Row,
  Col,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import FormContainer from '../components/FormContainer.js'
import { getUserDetails, updateUser } from '../actions/userActions.js'
import { useParams, useNavigate } from 'react-router-dom'
import { USER_UPDATE_RESET } from '../constants/userConstants.js'
const UserEditScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userUpdate = useSelector((state) => state.userUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate

  // console.log(`called in  ${location.pathname}`)
  // console.log(userInfo)
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET })
      navigate('/admin/userlist')
      dispatch(getUserDetails(id))
    } else {
      if (!user.name || user._id !== id) {
        dispatch(getUserDetails(id))
      } else {
        setName(user.name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)
      }
    }
  }, [user, id, dispatch, navigate, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateUser({ _id: id, name, email, isAdmin }))
  }

  return (
    <Container>
      <FormContainer>
        <h2 className="text-center">Update User</h2>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <FormLabel>Name</FormLabel>
              <FormControl
                type="name"
                placeholder="Amit Kumar "
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
            <Form.Group controlId="isadmin" className="mt-2">
              <Form.Check
                type="checkbox"
                label="is Admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>
            <Row>
              <Col md={8}>
                <Button
                  type="submit"
                  variant="primary"
                  className="mt-md-3 mt-sm-3"
                >
                  Update user
                </Button>
              </Col>
              <Col>
                <Link to="/admin/userlist" className="btn btn-primary my-3">
                  Go Back
                </Link>
              </Col>
            </Row>
          </Form>
        )}
      </FormContainer>
    </Container>
  )
}

export default UserEditScreen
=======
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Form,
  Button,
  FormLabel,
  FormControl,
  Container,
  Row,
  Col,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import FormContainer from '../components/FormContainer.js'
import { getUserDetails, updateUser } from '../actions/userActions.js'
import { useParams, useNavigate } from 'react-router-dom'
import { USER_UPDATE_RESET } from '../constants/userConstants.js'
const UserEditScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userUpdate = useSelector((state) => state.userUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate

  // console.log(`called in  ${location.pathname}`)
  // console.log(userInfo)
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET })
      navigate('/admin/userlist')
      dispatch(getUserDetails(id))
    } else {
      if (!user.name || user._id !== id) {
        dispatch(getUserDetails(id))
      } else {
        setName(user.name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)
      }
    }
  }, [user, id, dispatch, navigate, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateUser({ _id: id, name, email, isAdmin }))
  }

  return (
    <Container>
      <FormContainer>
        <h2 className="text-center">Update User</h2>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <FormLabel>Name</FormLabel>
              <FormControl
                type="name"
                placeholder="Amit Kumar "
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
            <Form.Group controlId="isadmin" className="mt-2">
              <Form.Check
                type="checkbox"
                label="is Admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>
            <Row>
              <Col md={8}>
                <Button
                  type="submit"
                  variant="primary"
                  className="mt-md-3 mt-sm-3"
                >
                  Update user
                </Button>
              </Col>
              <Col>
                <Link to="/admin/userlist" className="btn btn-primary my-3">
                  Go Back
                </Link>
              </Col>
            </Row>
          </Form>
        )}
      </FormContainer>
    </Container>
  )
}

export default UserEditScreen
>>>>>>> 2e5265cb2c43261425b5782569d83d168965e9d9
