import * as actionType from '../constants/actionTypes'
import * as api from '../api/index.js'

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData)

    dispatch({ type: actionType.SIGN_UP, data })

    router.push('/')
  } catch (error) {
    let err = error.request.responseText
    dispatch({ type: actionType.MSG_ERROR, err })
  }
}

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData)

    dispatch({ type: actionType.SIGN_IN, data })

    router.push('/')
  } catch (error) {
    console.log(error)
    let err = error.request.responseText
    dispatch({ type: actionType.MSG_ERROR, err })
  }
}
