import * as actionType from '../constants/actionTypes'

const authReducer = (state = { message: null, isModalOpen: false }, action) => {
  switch (action.type) {
    case actionType.SIGN_UP:
      return {
        ...state,
        message: 'Registration successful',
        isModalOpen: true,
      }
    case actionType.SIGN_IN:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
      return {
        ...state,
        message: null,
        isModalOpen: false,
      }
    case actionType.LOGOUT:
      localStorage.clear()

      return {
        ...state,
        message: null,
        isModalOpen: false,
      }
    case actionType.MSG_ERROR:
      const msgerr = JSON.parse(action.err)
      return { ...state, message: msgerr.detail, isModalOpen: true }
    case actionType.MSG_CLOSE:
      return { ...state, isModalOpen: false }

    default:
      return state
  }
}

export default authReducer
