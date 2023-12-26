<<<<<<< HEAD
import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import { listUsers,deleteUser } from '../actions/userActions.js'
import { useNavigate } from 'react-router-dom'
const UserListScreen = () => {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDelete = useSelector((state) => state.userDelete)
  const { success:successDelete,error:errorDelete} = userDelete

  useEffect(() => {
    if(userInfo&&userInfo.isAdmin)
    dispatch(listUsers())
    else{
      navigate('/login')
    }
  }, [dispatch,navigate,successDelete,userInfo])

  const deleteHandler=(id)=>{
    if(window.confirm('Are you sure to delete?')){
    dispatch(deleteUser(id))
    }
  }
  return (
    <Container>
      <h1 className="text-center">Users</h1>
      {successDelete&&<Message variant='success'>User Successfully deleted.</Message>}
      {errorDelete&&<Message variant='danger'>User Not found</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danget">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th className='text-center'>Id</th>
              <th className='text-center'>Name</th>
              <th className='text-center'>Email</th>
              <th className='text-center'>Admin</th>
              <th className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className='text-center'>{user._id}</td>
                <td className='text-center'>{user.name}</td>
                <td className='text-center'>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td className='text-center'>
                  {user.isAdmin ? (
                    <i className="fas fa-check" style={{ color: 'green' }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: 'red' }}></i>
                  )}
                </td>
                <td className='text-center'>
                <LinkContainer to={`/admin/user/${user._id}/edit`}>
                   <Button variant='light' className='btn-sm'>
                    <i className='fas fa-edit'></i>
                   </Button>
                </LinkContainer>
                <Button variant='danger' className='btn-sm'
                onClick={()=>deleteHandler(user._id)}>
                  <i className='fas fa-trash'></i>
                </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  )
}

export default UserListScreen
=======
import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import { listUsers,deleteUser } from '../actions/userActions.js'
import { useNavigate } from 'react-router-dom'
const UserListScreen = () => {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDelete = useSelector((state) => state.userDelete)
  const { success:successDelete,error:errorDelete} = userDelete

  useEffect(() => {
    if(userInfo&&userInfo.isAdmin)
    dispatch(listUsers())
    else{
      navigate('/login')
    }
  }, [dispatch,navigate,successDelete,userInfo])

  const deleteHandler=(id)=>{
    if(window.confirm('Are you sure to delete?')){
    dispatch(deleteUser(id))
    }
  }
  return (
    <Container>
      <h1 className="text-center">Users</h1>
      {successDelete&&<Message variant='success'>User Successfully deleted.</Message>}
      {errorDelete&&<Message variant='danger'>User Not found</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danget">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th className='text-center'>Id</th>
              <th className='text-center'>Name</th>
              <th className='text-center'>Email</th>
              <th className='text-center'>Admin</th>
              <th className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className='text-center'>{user._id}</td>
                <td className='text-center'>{user.name}</td>
                <td className='text-center'>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td className='text-center'>
                  {user.isAdmin ? (
                    <i className="fas fa-check" style={{ color: 'green' }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: 'red' }}></i>
                  )}
                </td>
                <td className='text-center'>
                <LinkContainer to={`/admin/user/${user._id}/edit`}>
                   <Button variant='light' className='btn-sm'>
                    <i className='fas fa-edit'></i>
                   </Button>
                </LinkContainer>
                <Button variant='danger' className='btn-sm'
                onClick={()=>deleteHandler(user._id)}>
                  <i className='fas fa-trash'></i>
                </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  )
}

export default UserListScreen
>>>>>>> 2e5265cb2c43261425b5782569d83d168965e9d9
