import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getalluser, deleteUser } from '../../actions/user'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table'

const Secret = () => {
  const dispatch = useDispatch()

  const { userData } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getalluser())
  }, [dispatch])

  const del = (id) => {
    dispatch(deleteUser(id))
  }

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>
                <Link to={'/update_auth/' + user.id}>
                  <button type='button'>Update</button>
                </Link>
                &nbsp;
                <button type='button' onClick={() => del(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Secret
