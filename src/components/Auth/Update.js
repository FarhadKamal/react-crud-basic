import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import { getuser, updateUser } from '../../actions/user'

const initialState = {
  name: '',
  email: '',
  password: '',
  username: '',
}

const UpdateAuth = () => {
  const [form, setForm] = useState(initialState)

  const { user } = useSelector((state) => state.user)

  const { id } = useParams()

  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(getuser(id))
  }, [id, dispatch])

  useEffect(() => {
    if (user) setForm(user)
  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(
      updateUser(
        {
          name: form.name,
          email: form.email,
          username: form.username,
          password: form.password,
        },
        form.id
      )
    )

    history.push('/secret')
  }

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        <input
          type='text'
          name='name'
          placeholder='Name'
          onChange={handleChange}
          value={form.name}
        />
        <br />
        <input
          type='email'
          name='email'
          placeholder='Email Address'
          onChange={handleChange}
          value={form.email}
        />
        <br />
        <input
          type='username'
          name='username'
          placeholder='User Name'
          onChange={handleChange}
          value={form.username}
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
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default UpdateAuth
