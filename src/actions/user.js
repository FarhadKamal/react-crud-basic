import * as actionType from '../constants/actionTypes'
import * as api from '../api/index.js'

export const getalluser = () => async (dispatch) => {
  try {
    const { data } = await api.getalluser()
    dispatch({ type: actionType.GET_USERS, data })
  } catch (error) {
    let err = error.request.responseText
    dispatch({ type: actionType.MSG_ERROR, err })
  }
}

export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id)

    dispatch({ type: actionType.DELETE_USER, payload: id })
  } catch (error) {
    let err = error.request.responseText
    dispatch({ type: actionType.MSG_ERROR, err })
  }
}

export const getuser = (id) => async (dispatch) => {
  try {
    const { data } = await api.getuser(id)
    dispatch({ type: actionType.GET_USER, data })
  } catch (error) {
    let err = error.request.responseText
    dispatch({ type: actionType.MSG_ERROR, err })
  }
}

export const updateUser = (post, id) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, post)

    dispatch({ type: actionType.UPDATE_USER, payload: data })
  } catch (error) {
    console.log(error)
  }
}
