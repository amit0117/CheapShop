<<<<<<< HEAD
import React, { useState } from 'react'
import { Form, Button, FormControl, FormLabel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { useNavigate } from 'react-router-dom'
import { saveShippingAddress } from '../actions/cartActions.js'
const ShippingScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  const [address, setAddress] = useState(
    shippingAddress.address ? shippingAddress.address : '',
  )
  const [city, setCity] = useState(
    shippingAddress.city ? shippingAddress.city : '',
  )
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode ? shippingAddress.postalCode : '',
  )
  const [country, setCountry] = useState(
    shippingAddress.country ? shippingAddress.country : '',
  )
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    navigate('/payment')
  }
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h2 className="text-center mt-md-3 mt-sm-1">Shipping</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <FormLabel>Address</FormLabel>
          <FormControl
            type="address"
            placeholder="Enter Address "
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></FormControl>
        </Form.Group>
        <Form.Group controlId="city">
          <FormLabel>City</FormLabel>
          <FormControl
            type="city"
            placeholder="Enter city "
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></FormControl>
        </Form.Group>
        <Form.Group controlId="postalCode">
          <FormLabel>PostalCode</FormLabel>
          <FormControl
            type="postalCode"
            placeholder="Enter Postal Code "
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></FormControl>
        </Form.Group>
        <Form.Group controlId="country">
          <FormLabel>Country</FormLabel>
          <FormControl
            type="country"
            placeholder="Enter Country "
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></FormControl>
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-md-3 mt-sm-2">
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
=======
import React, { useState } from 'react'
import { Form, Button, FormControl, FormLabel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { useNavigate } from 'react-router-dom'
import { saveShippingAddress } from '../actions/cartActions.js'
const ShippingScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  const [address, setAddress] = useState(
    shippingAddress.address ? shippingAddress.address : '',
  )
  const [city, setCity] = useState(
    shippingAddress.city ? shippingAddress.city : '',
  )
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode ? shippingAddress.postalCode : '',
  )
  const [country, setCountry] = useState(
    shippingAddress.country ? shippingAddress.country : '',
  )
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    navigate('/payment')
  }
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h2 className="text-center mt-md-3 mt-sm-1">Shipping</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <FormLabel>Address</FormLabel>
          <FormControl
            type="address"
            placeholder="Enter Address "
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></FormControl>
        </Form.Group>
        <Form.Group controlId="city">
          <FormLabel>City</FormLabel>
          <FormControl
            type="city"
            placeholder="Enter city "
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></FormControl>
        </Form.Group>
        <Form.Group controlId="postalCode">
          <FormLabel>PostalCode</FormLabel>
          <FormControl
            type="postalCode"
            placeholder="Enter Postal Code "
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></FormControl>
        </Form.Group>
        <Form.Group controlId="country">
          <FormLabel>Country</FormLabel>
          <FormControl
            type="country"
            placeholder="Enter Country "
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></FormControl>
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-md-3 mt-sm-2">
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
>>>>>>> 2e5265cb2c43261425b5782569d83d168965e9d9
