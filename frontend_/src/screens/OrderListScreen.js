<<<<<<< HEAD
import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import { listOrder } from '../actions/orderActions.js'
import { useNavigate } from 'react-router-dom'
const OrderListScreen = () => {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const orderList = useSelector((state) => state.orderList)
  const { loading, error, orders } = orderList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if(userInfo&&userInfo.isAdmin)
    dispatch(listOrder())
    else{
      navigate('/login')
    }
  }, [dispatch,navigate,userInfo])


  return (
    <Container>
      <h1 className="text-center">Orders</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danget">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th className='text-center'>Id</th>
              <th className='text-center'>User</th>
              <th className='text-center'>Date</th>
              <th className='text-center'>Total</th>
              <th className='text-center'>Delivered</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className='text-center'>{order._id}</td>
                <td className='text-center'>{order.user&&order.user.name}</td>
                <td className='text-center'>
                    {order.createdAt.substring(0,10)}
                </td>
                <td>
                    Rs{order.totalPrice}
                </td>
                <td className='text-center'>
                  {order.isPaid ? (
                    order.paidAt.substring(0,10)
                  ) : (
                    <i className="fas fa-times" style={{ color: 'red' }}></i>
                  )}
                </td>
                <td className='text-center'>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0,10)
                  ) : (
                    <i className="fas fa-times" style={{ color: 'red' }}></i>
                  )}
                </td>
                <td className='text-center'>
                <LinkContainer to={`/order/${order._id}/edit`}>
                   <Button variant='light' className='btn-sm'>
                    Details
                   </Button>
                </LinkContainer>
          
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  )
}

export default OrderListScreen
=======
import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import { listOrder } from '../actions/orderActions.js'
import { useNavigate } from 'react-router-dom'
const OrderListScreen = () => {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const orderList = useSelector((state) => state.orderList)
  const { loading, error, orders } = orderList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if(userInfo&&userInfo.isAdmin)
    dispatch(listOrder())
    else{
      navigate('/login')
    }
  }, [dispatch,navigate,userInfo])


  return (
    <Container>
      <h1 className="text-center">Orders</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danget">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th className='text-center'>Id</th>
              <th className='text-center'>User</th>
              <th className='text-center'>Date</th>
              <th className='text-center'>Total</th>
              <th className='text-center'>Delivered</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className='text-center'>{order._id}</td>
                <td className='text-center'>{order.user&&order.user.name}</td>
                <td className='text-center'>
                    {order.createdAt.substring(0,10)}
                </td>
                <td>
                    Rs{order.totalPrice}
                </td>
                <td className='text-center'>
                  {order.isPaid ? (
                    order.paidAt.substring(0,10)
                  ) : (
                    <i className="fas fa-times" style={{ color: 'red' }}></i>
                  )}
                </td>
                <td className='text-center'>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0,10)
                  ) : (
                    <i className="fas fa-times" style={{ color: 'red' }}></i>
                  )}
                </td>
                <td className='text-center'>
                <LinkContainer to={`/order/${order._id}/edit`}>
                   <Button variant='light' className='btn-sm'>
                    Details
                   </Button>
                </LinkContainer>
          
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  )
}

export default OrderListScreen
>>>>>>> 2e5265cb2c43261425b5782569d83d168965e9d9
