<<<<<<< HEAD
import React from 'react'
import{Card} from 'react-bootstrap'
import Rating from './Rating'
import {Link }from 'react-router-dom'

const Product = ({product}) => {
  return (
<Card className='my-2 p-2 rounded ' style={{ width: '17rem',height:'27rem' }} >
<Link to={`/products/${product._id}`}>
    <Card.Img src={product.image} variant='top' style={{borderRadius:'2%',maxWidth:'100%',maxHeight:'250px' ,minWidth:'100%',minHeight:'250px'}}/>
</Link>
<Card.Body>
<Link to={`/products/${product._id}`}>
    <Card.Title  as='div'>
    <strong>{product.name}</strong>
    </Card.Title>
</Link>

<Card.Text as='div'>
  <Rating value={product.rating} text={`${product.numReviews} reviews`} />
</Card.Text>
<Card.Text as='h3'>
Rs{product.price}
</Card.Text>
</Card.Body>
</Card>
  )
}

export default Product
=======
import React from 'react'
import{Card} from 'react-bootstrap'
import Rating from './Rating'
import {Link }from 'react-router-dom'

const Product = ({product}) => {
  return (
<Card className='my-2 p-2 rounded ' style={{ width: '17rem',height:'27rem' }} >
<Link to={`/products/${product._id}`}>
    <Card.Img src={product.image} variant='top' style={{borderRadius:'2%',maxWidth:'100%',maxHeight:'250px' ,minWidth:'100%',minHeight:'250px'}}/>
</Link>
<Card.Body>
<Link to={`/products/${product._id}`}>
    <Card.Title  as='div'>
    <strong>{product.name}</strong>
    </Card.Title>
</Link>

<Card.Text as='div'>
  <Rating value={product.rating} text={`${product.numReviews} reviews`} />
</Card.Text>
<Card.Text as='h3'>
Rs{product.price}
</Card.Text>
</Card.Body>
</Card>
  )
}

export default Product
>>>>>>> 2e5265cb2c43261425b5782569d83d168965e9d9
