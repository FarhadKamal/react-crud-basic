import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import decode from 'jwt-decode'
import Message from './Message'
import { MSG_CLOSE, LOGOUT } from '../../constants/actionTypes'
import { Button } from 'react-bootstrap'

const Navbar = () => {
  const [user, setUser] = useState(null)
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()
  const { message, isModalOpen } = useSelector((state) => state.auth)

  const closeModal = () => {
    dispatch({ type: MSG_CLOSE })
  }

  const logout = () => {
    dispatch({ type: LOGOUT })

    history.push('/auth')

    setUser(null)
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')))
    const token = user?.token

    if (token) {
      const decodedToken = decode(token)

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        localStorage.clear()
        history.push('/auth')

        setUser(null)
      }
    } // eslint-disable-next-line
  }, [location])

  return (
    <>
      <Link to='/'>
        <Button variant='primary'>Home</Button>
      </Link>
      &nbsp;
      <Link to='/secret'>
        <Button variant='primary'>Secret</Button>
      </Link>
      &nbsp;
      <Link to='/auth'>
        {user?.token ? (
          <Button variant='warning' onClick={logout}>
            Logout
          </Button>
        ) : (
          <Button variant='primary'>System</Button>
        )}
      </Link>
      {isModalOpen && (
        <Message closeModal={closeModal} modalContent={message} />
      )}
    </>
  )
}
export default Navbar
