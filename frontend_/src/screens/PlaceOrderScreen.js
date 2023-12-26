<<<<<<< HEAD
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Container,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSteps from '../components/CheckoutSteps'
import Message from '../components/Message'
import { createOrder } from '../actions/orderActions'
const PlaceOrderScreen = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // calculating various prices for placing order
  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }
  cart.itemsPrice = addDecimal(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0),
  )
  cart.shippingPrice = addDecimal(cart.itemsPrice > 100 ? 0 : 10)
  cart.taxPrice = addDecimal(Number((0.1 * cart.itemsPrice).toFixed(2)))
  cart.totalPrice = addDecimal(
    Number(cart.itemsPrice) +
      Number(cart.shippingPrice) +
      Number(cart.taxPrice),
  )
  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate
  
  useEffect(() => {
    if (success) {
      // console.log(` called in placeorderscreen in useeffect ${JSON.stringify(order)}`)
      navigate(`/order/${order._id}`)
    }
  }, [navigate, success,order])
  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        itemsPrice: cart.itemsPrice,
        totalPrice: cart.totalPrice,
      }),
    )
  }
  return (
    <Container>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row className="mt-md-4">
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address: </strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city},{' '}
                {cart.shippingAddress.postalCode},{' '}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {cart.paymentMethod}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup.Item variant="flush">
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1} className="mb-2">
                          <Link to={`/products/${item.product}`}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              style={{ borderRadius: '5%' }}
                            />
                          </Link>
                        </Col>
                        <Col>
                          <Link to={`/products/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          ({item.qty}*Rs{item.price})=Rs
                          {(item.qty * item.price).toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup.Item>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3 className="text-center">Order Summary</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items Price</Col>
                  <Col>Rs{cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping Price</Col>
                  <Col>Rs{cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>Rs{cart.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total Price</Col>
                  <Col>Rs{cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup.Item>
              <ListGroup.Item className="d-grid">
                <Button
                  type="button"
                  className=" btn btn-block btn-warning "
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default PlaceOrderScreen
=======
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Container,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSteps from '../components/CheckoutSteps'
import Message from '../components/Message'
import { createOrder } from '../actions/orderActions'
const PlaceOrderScreen = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // calculating various prices for placing order
  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }
  cart.itemsPrice = addDecimal(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0),
  )
  cart.shippingPrice = addDecimal(cart.itemsPrice > 100 ? 0 : 10)
  cart.taxPrice = addDecimal(Number((0.1 * cart.itemsPrice).toFixed(2)))
  cart.totalPrice = addDecimal(
    Number(cart.itemsPrice) +
      Number(cart.shippingPrice) +
      Number(cart.taxPrice),
  )
  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate
  
  useEffect(() => {
    if (success) {
      // console.log(` called in placeorderscreen in useeffect ${JSON.stringify(order)}`)
      navigate(`/order/${order._id}`)
    }
  }, [navigate, success,order])
  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        itemsPrice: cart.itemsPrice,
        totalPrice: cart.totalPrice,
      }),
    )
  }
  return (
    <Container>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row className="mt-md-4">
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address: </strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city},{' '}
                {cart.shippingAddress.postalCode},{' '}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {cart.paymentMethod}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup.Item variant="flush">
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1} className="mb-2">
                          <Link to={`/products/${item.product}`}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              style={{ borderRadius: '5%' }}
                            />
                          </Link>
                        </Col>
                        <Col>
                          <Link to={`/products/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          ({item.qty}*Rs{item.price})=Rs
                          {(item.qty * item.price).toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup.Item>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3 className="text-center">Order Summary</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items Price</Col>
                  <Col>Rs{cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping Price</Col>
                  <Col>Rs{cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>Rs{cart.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total Price</Col>
                  <Col>Rs{cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup.Item>
              <ListGroup.Item className="d-grid">
                <Button
                  type="button"
                  className=" btn btn-block btn-warning "
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default PlaceOrderScreen
>>>>>>> 2e5265cb2c43261425b5782569d83d168965e9d9
