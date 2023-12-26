<<<<<<< HEAD
import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import {
  listProducts,
  deleteProduct,
  createProduct,
} from '../actions/productActions'
import { useNavigate, useParams } from 'react-router-dom'
import { PRODUCT_CREATE_RESET } from '../constants/productConstant.js'
import Paginate from '../components/Paginate.js'
const ProductListScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const { id } = useParams()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList
  const {pageNumber} = useParams() || 1
  const productDelete = useSelector((state) => state.productDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete

  const productCreate = useSelector((state) => state.productCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET })
    if (!userInfo||!userInfo.isAdmin) {
      navigate('/login')
    }
    if (successCreate) {
      navigate(`/admin/product/${createdProduct._id}/edit`)
    } else {
      dispatch(listProducts('', pageNumber))
    }
  }, [
    dispatch,
    navigate,
    userInfo,
    successDelete,
    successCreate,
    pageNumber,
    createdProduct,
  ])

  const createProductHandler = () => {
    dispatch(createProduct())
  }

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteProduct(id))
    }
  }
  return (
    <Container>
      <Row className="align-items-center">
        <Col className="text-center">
          <h1>Products</h1>
        </Col>
        <Col className="d-flex flex-row-reverse">
          <Button className="my-3" onClick={createProductHandler}>
            <i className="fas fa-plus"></i> Create Product
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th className="text-center">Id</th>
                <th className="text-center">Name</th>
                <th className="text-center">Price</th>
                <th className="text-center">Category</th>
                <th className="text-center">Brand</th>
                <th className='text-center'>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td className="text-center">{product._id}</td>
                  <td className="text-center">{product.name}</td>
                  <td className="text-center">Rs{product.price}</td>
                  <td className="text-center">{product.category}</td>
                  <td className='text-center'>{product.brand}</td>
                  <td className="text-center">
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(product._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={pages} page={page} isAdmin={true} />
        </Container>
      )}
    </Container>
  )
}

export default ProductListScreen
=======
import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import {
  listProducts,
  deleteProduct,
  createProduct,
} from '../actions/productActions'
import { useNavigate, useParams } from 'react-router-dom'
import { PRODUCT_CREATE_RESET } from '../constants/productConstant.js'
import Paginate from '../components/Paginate.js'
const ProductListScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const { id } = useParams()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList
  const {pageNumber} = useParams() || 1
  const productDelete = useSelector((state) => state.productDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete

  const productCreate = useSelector((state) => state.productCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET })
    if (!userInfo||!userInfo.isAdmin) {
      navigate('/login')
    }
    if (successCreate) {
      navigate(`/admin/product/${createdProduct._id}/edit`)
    } else {
      dispatch(listProducts('', pageNumber))
    }
  }, [
    dispatch,
    navigate,
    userInfo,
    successDelete,
    successCreate,
    pageNumber,
    createdProduct,
  ])

  const createProductHandler = () => {
    dispatch(createProduct())
  }

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteProduct(id))
    }
  }
  return (
    <Container>
      <Row className="align-items-center">
        <Col className="text-center">
          <h1>Products</h1>
        </Col>
        <Col className="d-flex flex-row-reverse">
          <Button className="my-3" onClick={createProductHandler}>
            <i className="fas fa-plus"></i> Create Product
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th className="text-center">Id</th>
                <th className="text-center">Name</th>
                <th className="text-center">Price</th>
                <th className="text-center">Category</th>
                <th className="text-center">Brand</th>
                <th className='text-center'>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td className="text-center">{product._id}</td>
                  <td className="text-center">{product.name}</td>
                  <td className="text-center">Rs{product.price}</td>
                  <td className="text-center">{product.category}</td>
                  <td className='text-center'>{product.brand}</td>
                  <td className="text-center">
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(product._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={pages} page={page} isAdmin={true} />
        </Container>
      )}
    </Container>
  )
}

export default ProductListScreen
>>>>>>> 2e5265cb2c43261425b5782569d83d168965e9d9
