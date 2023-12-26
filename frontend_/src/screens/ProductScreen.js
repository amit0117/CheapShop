<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  listProductDetails,
  createProductReview,
} from '../actions/productActions.js'
import { Link } from 'react-router-dom'
import { FormControl } from 'react-bootstrap'
// import { Form } from 'react-bootstrap'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Container,
  Form,
} from 'react-bootstrap'
import Rating from '../components/Rating.js'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import Meta from '../components/Meta.js'
// import axios from 'axios'
// import products from '../products'
import { useParams, useNavigate } from 'react-router-dom'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstant'

const ProductScreen = (props) => {
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()

  //  for accessing params use useParams hooks
  const { id } = useParams()
  // console.log(`productscreen id is ${id}`)
  const navigate = useNavigate()
  //  const product=products.find(p=>p._id===id);
  // const [product,setProduct]=useState({})

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productCreateReview = useSelector((state) => state.productCreateReview)
  const {
    success: successproductCreateReview,
    error: errorproductCreateReview,
  } = productCreateReview
  useEffect(() => {
    if (successproductCreateReview) {
      alert('Review created successfully.')
      setRating(0)
      setComment('')
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
    }
    dispatch(listProductDetails(id))
    // const fetchProduct=async()=>{
    //   const res=await axios.get(`/api/products/${id}`)
    //   const data=res.data
    //   setProduct(data)
    // }
    // fetchProduct()
  }, [dispatch, id, successproductCreateReview])

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProductReview(id, {
        rating,
        comment,
      }),
    )
  }
  return (
    <Container>
      <Link className="btn btn-primary m-3" to="/">
        Go back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container>
          <Meta title={product.name}/>
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <h3>{product.name}</h3>
                </ListGroupItem>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: Rs{product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            {/* for stock */}
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroupItem>
                    <Row>
                      <Col>Price: </Col>
                      <Col>
                        <strong>Rs{product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col>Availability: </Col>
                      <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroupItem>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Select Qty:</Col>
                        <Col>
                          <FormControl
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ),
                            )}
                          </FormControl>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                  <ListGroupItem>
                    <Button
                      onClick={addToCartHandler}
                      className="btn btn-info btn-block "
                      disabled={product.countInStock === 0}
                    >
                      <i className="fa-solid fa-cart-shopping"></i> Add To Cart
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <h2 className="text-center mt-2"> Reviews</h2>
              {product.reviews.length === 0 && (
                <Message>No review for this product.</Message>
              )}
              <ListGroup>
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                )
                )
                }
                <ListGroup.Item>
                  <h2 className="text-center">Write a review</h2>
                  {errorproductCreateReview && (
                    <Message variant="danger">
                      {errorproductCreateReview}
                    </Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as="select"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="">Select Rating...</option>
                          <option value="1">1-poor</option>
                          <option value="2">2-Fair</option>
                          <option value="3">3-Good</option>
                          <option value="4">4-Very good</option>
                          <option value="5">5-Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="comment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as="textarea"
                          row="3"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        />
                      </Form.Group>
                      <Button type="submit" variant="primary" className="mt-3">
                        Submit Review
                      </Button>
                    </Form>
                  ) : (
                    <Message variant="info">
                      Please <Link to="/login">Sign In </Link>to write a review.
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  )
}

export default ProductScreen
=======
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  listProductDetails,
  createProductReview,
} from '../actions/productActions.js'
import { Link } from 'react-router-dom'
import { FormControl } from 'react-bootstrap'
// import { Form } from 'react-bootstrap'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Container,
  Form,
} from 'react-bootstrap'
import Rating from '../components/Rating.js'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import Meta from '../components/Meta.js'
// import axios from 'axios'
// import products from '../products'
import { useParams, useNavigate } from 'react-router-dom'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstant'

const ProductScreen = (props) => {
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()

  //  for accessing params use useParams hooks
  const { id } = useParams()
  // console.log(`productscreen id is ${id}`)
  const navigate = useNavigate()
  //  const product=products.find(p=>p._id===id);
  // const [product,setProduct]=useState({})

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productCreateReview = useSelector((state) => state.productCreateReview)
  const {
    success: successproductCreateReview,
    error: errorproductCreateReview,
  } = productCreateReview
  useEffect(() => {
    if (successproductCreateReview) {
      alert('Review created successfully.')
      setRating(0)
      setComment('')
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
    }
    dispatch(listProductDetails(id))
    // const fetchProduct=async()=>{
    //   const res=await axios.get(`/api/products/${id}`)
    //   const data=res.data
    //   setProduct(data)
    // }
    // fetchProduct()
  }, [dispatch, id, successproductCreateReview])

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProductReview(id, {
        rating,
        comment,
      }),
    )
  }
  return (
    <Container>
      <Link className="btn btn-primary m-3" to="/">
        Go back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container>
          <Meta title={product.name}/>
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <h3>{product.name}</h3>
                </ListGroupItem>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: Rs{product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            {/* for stock */}
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroupItem>
                    <Row>
                      <Col>Price: </Col>
                      <Col>
                        <strong>Rs{product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col>Availability: </Col>
                      <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroupItem>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Select Qty:</Col>
                        <Col>
                          <FormControl
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ),
                            )}
                          </FormControl>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                  <ListGroupItem>
                    <Button
                      onClick={addToCartHandler}
                      className="btn btn-info btn-block "
                      disabled={product.countInStock === 0}
                    >
                      <i className="fa-solid fa-cart-shopping"></i> Add To Cart
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <h2 className="text-center mt-2"> Reviews</h2>
              {product.reviews.length === 0 && (
                <Message>No review for this product.</Message>
              )}
              <ListGroup>
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                )
                )
                }
                <ListGroup.Item>
                  <h2 className="text-center">Write a review</h2>
                  {errorproductCreateReview && (
                    <Message variant="danger">
                      {errorproductCreateReview}
                    </Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as="select"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="">Select Rating...</option>
                          <option value="1">1-poor</option>
                          <option value="2">2-Fair</option>
                          <option value="3">3-Good</option>
                          <option value="4">4-Very good</option>
                          <option value="5">5-Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="comment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as="textarea"
                          row="3"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        />
                      </Form.Group>
                      <Button type="submit" variant="primary" className="mt-3">
                        Submit Review
                      </Button>
                    </Form>
                  ) : (
                    <Message variant="info">
                      Please <Link to="/login">Sign In </Link>to write a review.
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  )
}

export default ProductScreen
>>>>>>> 2e5265cb2c43261425b5782569d83d168965e9d9
