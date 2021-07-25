import * as actionType from '../constants/actionTypes'

const userReducer = (state = { userData: [] }, action) => {
  switch (action.type) {
    case actionType.GET_USERS:
      return {
        ...state,
        userData: action.data,
      }

    case actionType.GET_USER:
      return {
        ...state,
        user: action.data,
      }

    case actionType.DELETE_USER:
      return {
        ...state,
        userData: state.userData.filter((user) => user.id !== action.payload),
      }

    case actionType.UPDATE_USER:
      return {
        ...state,
        userData: state.userData.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      }
    default:
      return state
  }
}

export default userReducer
