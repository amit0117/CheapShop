<<<<<<< HEAD
import React ,{useEffect} from 'react'
// import products from '../products'

import { useDispatch,useSelector } from 'react-redux'
import {Row,Col,Container} from 'react-bootstrap'
import Product from '../components/Product'
import {listProducts} from '../actions/productActions.js'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import { useParams } from 'react-router-dom'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
const HomeScreen = () => {

  const dispatch=useDispatch()
  const productList=useSelector(state=>state.productList)
  const {loading,error,products,page,pages}=productList
  const {keyword}=useParams()
  const {pageNumber}=useParams()||1
  
 
  // const [products,setProducts]=useState([])
  useEffect(()=>{
    // below code is replaced by reducer to get product from global redux store
    // const fetchProducts=async()=>{
    //   const res=await axios.get('/api/products')
    //   const data=res.data
    //   setProducts(data)
    // }
    // fetchProducts()

    dispatch(listProducts(keyword,pageNumber));


  },[dispatch,keyword,pageNumber])
  return (

    <Container>
      <Meta/>
      {!keyword?<ProductCarousel/>:(
        <Link to='/' className='btn btn-info'>
          Go Back
        </Link>
      )}
      <h3 className="text-center">Latest Products </h3>
      {loading?(<Loader/>)
      :error?(<Message variant='danger'>{error}</Message>):
    (<>
    <Row className='d-flex align-items-center'>
        {
            products.map(product=>(
              <Col key={product._id} sm={10} md={5} lg={4} xl={3} >
              <Product product={product} />
              </Col>  
            ))
        }
    </Row>
    <Paginate pages={pages} page={page} keyword={keyword?keyword:''} />
    </>
    )
    }
     </Container>
  )
}

=======
import React ,{useEffect} from 'react'
// import products from '../products'

import { useDispatch,useSelector } from 'react-redux'
import {Row,Col,Container} from 'react-bootstrap'
import Product from '../components/Product'
import {listProducts} from '../actions/productActions.js'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import { useParams } from 'react-router-dom'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
const HomeScreen = () => {

  const dispatch=useDispatch()
  const productList=useSelector(state=>state.productList)
  const {loading,error,products,page,pages}=productList
  const {keyword}=useParams()
  const {pageNumber}=useParams()||1
  
 
  // const [products,setProducts]=useState([])
  useEffect(()=>{
    // below code is replaced by reducer to get product from global redux store
    // const fetchProducts=async()=>{
    //   const res=await axios.get('/api/products')
    //   const data=res.data
    //   setProducts(data)
    // }
    // fetchProducts()

    dispatch(listProducts(keyword,pageNumber));


  },[dispatch,keyword,pageNumber])
  return (

    <Container>
      <Meta/>
      {!keyword?<ProductCarousel/>:(
        <Link to='/' className='btn btn-info'>
          Go Back
        </Link>
      )}
      <h3 className="text-center">Latest Products </h3>
      {loading?(<Loader/>)
      :error?(<Message variant='danger'>{error}</Message>):
    (<>
    <Row className='d-flex align-items-center'>
        {
            products.map(product=>(
              <Col key={product._id} sm={10} md={5} lg={4} xl={3} >
              <Product product={product} />
              </Col>  
            ))
        }
    </Row>
    <Paginate pages={pages} page={page} keyword={keyword?keyword:''} />
    </>
    )
    }
     </Container>
  )
}

>>>>>>> 2e5265cb2c43261425b5782569d83d168965e9d9
export default HomeScreen