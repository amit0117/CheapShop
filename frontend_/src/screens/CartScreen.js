<<<<<<< HEAD
import React,{useEffect} from 'react'
import { Link ,useParams,useLocation,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {Row,Col,ListGroup,Image,Button,Card, ListGroupItem,FormControl, Container} from 'react-bootstrap'
import Message from '../components/Message.js'
import { addToCart,removeFromCart } from '../actions/cartActions.js'
const CartScreen = (props) => {
const dispatch=useDispatch()
const location=useLocation()
const navigate=useNavigate()
    const qty=location.search?Number(location.search.split('=')[1]):1
    const {id}=useParams()
    const cart=useSelector(state=>state.cart)
    const {cartItems}=cart
    // console.log(`this is cartScreen  ${id}`)
useEffect(()=>{
    if(id){
      // console.log('useeffect called')
        dispatch(addToCart(id,qty))
    }
},[dispatch,id,qty])
const removFromCartHandler=(id)=>{
  dispatch(removeFromCart(id))
}
const checkoutHandler=()=>{
  navigate('/login?redirect=shipping')
}
  return (
    <Container>
  <Row>
    <Col md={8}>
      <h1 className="text-center">Shopping Cart</h1>
      {cartItems.length===0?<Message>Your Cart is empty <Link to='/'>Go Back</Link></Message>:(
        <ListGroup variant='flush'>
          {
            cartItems.map(item=>(
              <ListGroupItem key={item.product}>
                <Row>
                  <Col md={2}>
                    <Link to={`/products/${item.product}`}>
                    <Image src={item.image} alt={item.name} fluid rounded/>                   
                    </Link>
                  </Col>
                  <Col md={2}>
                    <Link to ={`/products/${item.product}`}>{item.name}
                    </Link>
                  </Col>
                  <Col md={2}>Rs :{item.price}
                  </Col>
                  <Col md={2}>
                  <FormControl as='select' value={item.qty} 
                  onChange={(e)=>dispatch(addToCart(item.product,Number(e.target.value)))}>
                        {  [...Array(item.countInStock).keys()].map(x=>
                        <option key={x+1} value={x+1}>
                          {x+1}
                        </option>)
                        }
                        </FormControl>
                  </Col>
                  <Col md={2}>
                    <Button type='button' variant='light' onClick={()=>removFromCartHandler(item.product)}>
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))
          }
        </ListGroup>
      )}
    </Col>
    <Col md={4}>
     <Card>
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <h2 className="text-center">Total:
            {
              cartItems.reduce((acc,item)=>acc+item.qty,0)
            }
            {' '}items
          </h2>
          </ListGroup.Item>
          <ListGroup.Item>
            
          <h2 className='text-center'>
          Rs {
            cartItems.reduce((acc,item)=>acc+item.qty*item.price,0).toFixed(2)
            }
          </h2>
         
        </ListGroup.Item>
       <ListGroupItem>
       <div className="d-flex justify-content-center">
        <Button 
          type='button'
          className="d-flex btn btn-block btn-info "
        disabled={cartItems.length===0}
        onClick={checkoutHandler}
        >Proceed TO Checkout
        </Button>
        </div>
       </ListGroupItem>
      </ListGroup>
     </Card>
    </Col>
  
  </Row>
  </Container>
  )
}

export default CartScreen
=======
import React,{useEffect} from 'react'
import { Link ,useParams,useLocation,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {Row,Col,ListGroup,Image,Button,Card, ListGroupItem,FormControl, Container} from 'react-bootstrap'
import Message from '../components/Message.js'
import { addToCart,removeFromCart } from '../actions/cartActions.js'
const CartScreen = (props) => {
const dispatch=useDispatch()
const location=useLocation()
const navigate=useNavigate()
    const qty=location.search?Number(location.search.split('=')[1]):1
    const {id}=useParams()
    const cart=useSelector(state=>state.cart)
    const {cartItems}=cart
    // console.log(`this is cartScreen  ${id}`)
useEffect(()=>{
    if(id){
      // console.log('useeffect called')
        dispatch(addToCart(id,qty))
    }
},[dispatch,id,qty])
const removFromCartHandler=(id)=>{
  dispatch(removeFromCart(id))
}
const checkoutHandler=()=>{
  navigate('/login?redirect=shipping')
}
  return (
    <Container>
  <Row>
    <Col md={8}>
      <h1 className="text-center">Shopping Cart</h1>
      {cartItems.length===0?<Message>Your Cart is empty <Link to='/'>Go Back</Link></Message>:(
        <ListGroup variant='flush'>
          {
            cartItems.map(item=>(
              <ListGroupItem key={item.product}>
                <Row>
                  <Col md={2}>
                    <Link to={`/products/${item.product}`}>
                    <Image src={item.image} alt={item.name} fluid rounded/>                   
                    </Link>
                  </Col>
                  <Col md={2}>
                    <Link to ={`/products/${item.product}`}>{item.name}
                    </Link>
                  </Col>
                  <Col md={2}>Rs :{item.price}
                  </Col>
                  <Col md={2}>
                  <FormControl as='select' value={item.qty} 
                  onChange={(e)=>dispatch(addToCart(item.product,Number(e.target.value)))}>
                        {  [...Array(item.countInStock).keys()].map(x=>
                        <option key={x+1} value={x+1}>
                          {x+1}
                        </option>)
                        }
                        </FormControl>
                  </Col>
                  <Col md={2}>
                    <Button type='button' variant='light' onClick={()=>removFromCartHandler(item.product)}>
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))
          }
        </ListGroup>
      )}
    </Col>
    <Col md={4}>
     <Card>
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <h2 className="text-center">Total:
            {
              cartItems.reduce((acc,item)=>acc+item.qty,0)
            }
            {' '}items
          </h2>
          </ListGroup.Item>
          <ListGroup.Item>
            
          <h2 className='text-center'>
          Rs {
            cartItems.reduce((acc,item)=>acc+item.qty*item.price,0).toFixed(2)
            }
          </h2>
         
        </ListGroup.Item>
       <ListGroupItem>
       <div className="d-flex justify-content-center">
        <Button 
          type='button'
          className="d-flex btn btn-block btn-info "
        disabled={cartItems.length===0}
        onClick={checkoutHandler}
        >Proceed TO Checkout
        </Button>
        </div>
       </ListGroupItem>
      </ListGroup>
     </Card>
    </Col>
  
  </Row>
  </Container>
  )
}

export default CartScreen
>>>>>>> 2e5265cb2c43261425b5782569d83d168965e9d9
