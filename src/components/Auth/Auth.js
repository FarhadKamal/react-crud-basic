import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { signin, signup } from '../../actions/auth'
import { Button } from 'react-bootstrap'

const initialState = {
  name: '',
  email: '',
  password: '',
  username: '',
}

const Auth = () => {
  const [form, setForm] = useState(initialState)

  const [isSignup, setIsSignup] = useState(false)

  const dispatch = useDispatch()
  const history = useHistory()

  const switchMode = () => {
    setForm(initialState)
    setIsSignup((prevIsSignup) => !prevIsSignup)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isSignup) dispatch(signup(form, history))
    else dispatch(signin(form, history))
  }

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        {isSignup && (
          <>
            <input
              type='text'
              name='name'
              placeholder='Name'
              onChange={handleChange}
            />
            <br />
            <input
              type='email'
              name='email'
              placeholder='Email Address'
              onChange={handleChange}
            />
            <br />
          </>
        )}
        <input
          type='username'
          name='username'
          placeholder='User Name'
          onChange={handleChange}
          required
        />
        <br />
        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button variant='outline-primary' onClick={switchMode}>
          {isSignup ? 'Sign in' : 'Sign up'}
        </Button>{' '}
        <Button variant='outline-success' type='submit'>
          {isSignup ? 'Register' : 'Login'}
        </Button>
      </form>
    </div>
  )
}

export default Auth
