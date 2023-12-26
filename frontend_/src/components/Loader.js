import React from 'react'
import { Spinner } from 'react-bootstrap'
const Loader = () => {
  return (
    <div className='d-flex justify-content-center'>
      <span><strong>Loading</strong></span>
    <Spinner animation="grow" size="sm" className='m-1' variant='info'/>
    <Spinner animation="grow" size="sm" className='m-1' variant='info'/>
    <Spinner animation="grow" size="sm" className='m-1' variant='info'/>
    <Spinner animation="grow" size="sm" className='m-1' variant='info'/>
    <Spinner animation="grow" size="sm" className='m-1' variant='info'/>
    </div>
  )
}

export default Loader
