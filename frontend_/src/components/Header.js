<<<<<<< HEAD
import React from 'react'

import {LinkContainer} from 'react-router-bootstrap'
import{Nav,Navbar,Container, NavDropdown} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {logout }from '../actions/userActions.js'
import SearchBox from './SearchBox.js'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const dispatch=useDispatch()
  const userLogin=useSelector(state=>state.userLogin)
  const {userInfo}=userLogin
  const navigate=useNavigate()
  const logoutHandler=()=>{
    dispatch(logout())
  }
  return (
    <header>
  <Navbar bg='dark' variant='dark' collapseOnSelect expand="lg">
        <Container>
          {/* LinkContainer is used as same as Link for <a></a>  */}
          {/* here Navbar.brand me href ko remove kr ke LinkContainer ka use because it doesn't reload  */}
          {/* <Navbar.Brand href="/">CheapShop</Navbar.Brand> */}

          <LinkContainer to='/'>
            <Navbar.Brand >CheapShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <div style={{width:'40%'}} className='ms-5'>

        <SearchBox navigate={navigate}/>
            </div>
          <Nav className="ml-auto " style={{position:'absolute',right:'0'}} >
          <LinkContainer to='/cart'>

            
              <Nav.Link ><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
          </LinkContainer>
        {
          userInfo?(
            <NavDropdown title={userInfo.name} id='username'>
             <LinkContainer to='/profile'>
              <NavDropdown.Item >
              <i className="fa fa-user" aria-hidden="true"></i>{'  '}

               Profile
              </NavDropdown.Item>
             </LinkContainer>
              <NavDropdown.Item onClick={logoutHandler}>
              <i className="fa fa-sign-out" aria-hidden="true"></i>
              {' '}

              Logout

              </NavDropdown.Item>
            </NavDropdown>
            ):(
          <LinkContainer to='/login'>
            <Nav.Link ><i className='fas fa-user'></i>
            Sign In</Nav.Link>
          </LinkContainer>
            )
        }
        {
          userInfo&&userInfo.isAdmin&&(
            <NavDropdown title='Admin' id='adminmenu'>
            <LinkContainer to='/admin/userlist'>
             <NavDropdown.Item >
              Users
             </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/admin/productlist'>
             <NavDropdown.Item >
              Products
             </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/admin/orderlist'>
             <NavDropdown.Item >
              Orders
             </NavDropdown.Item>
            </LinkContainer>
            
           </NavDropdown>
          )
        }
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>    </header>
  )
}

export default Header
=======
import React from 'react'

import {LinkContainer} from 'react-router-bootstrap'
import{Nav,Navbar,Container, NavDropdown} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {logout }from '../actions/userActions.js'
import SearchBox from './SearchBox.js'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const dispatch=useDispatch()
  const userLogin=useSelector(state=>state.userLogin)
  const {userInfo}=userLogin
  const navigate=useNavigate()
  const logoutHandler=()=>{
    dispatch(logout())
  }
  return (
    <header>
  <Navbar bg='dark' variant='dark' collapseOnSelect expand="lg">
        <Container>
          {/* LinkContainer is used as same as Link for <a></a>  */}
          {/* here Navbar.brand me href ko remove kr ke LinkContainer ka use because it doesn't reload  */}
          {/* <Navbar.Brand href="/">CheapShop</Navbar.Brand> */}

          <LinkContainer to='/'>
            <Navbar.Brand >CheapShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <div style={{width:'40%'}} className='ms-5'>

        <SearchBox navigate={navigate}/>
            </div>
          <Nav className="ml-auto " style={{position:'absolute',right:'0'}} >
          <LinkContainer to='/cart'>

            
              <Nav.Link ><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
          </LinkContainer>
        {
          userInfo?(
            <NavDropdown title={userInfo.name} id='username'>
             <LinkContainer to='/profile'>
              <NavDropdown.Item >
              <i className="fa fa-user" aria-hidden="true"></i>{'  '}

               Profile
              </NavDropdown.Item>
             </LinkContainer>
              <NavDropdown.Item onClick={logoutHandler}>
              <i className="fa fa-sign-out" aria-hidden="true"></i>
              {' '}

              Logout

              </NavDropdown.Item>
            </NavDropdown>
            ):(
          <LinkContainer to='/login'>
            <Nav.Link ><i className='fas fa-user'></i>
            Sign In</Nav.Link>
          </LinkContainer>
            )
        }
        {
          userInfo&&userInfo.isAdmin&&(
            <NavDropdown title='Admin' id='adminmenu'>
            <LinkContainer to='/admin/userlist'>
             <NavDropdown.Item >
              Users
             </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/admin/productlist'>
             <NavDropdown.Item >
              Products
             </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/admin/orderlist'>
             <NavDropdown.Item >
              Orders
             </NavDropdown.Item>
            </LinkContainer>
            
           </NavDropdown>
          )
        }
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>    </header>
  )
}

export default Header
>>>>>>> 2e5265cb2c43261425b5782569d83d168965e9d9
