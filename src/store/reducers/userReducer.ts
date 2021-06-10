import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL
} from 'constants/actionsType'
import { ActionType } from 'store/interface'
import { UserState } from 'store/interface/user'

const initialState: UserState = {
  loading: false,
  users: [],
  error: null
}

export default function userReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: true
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        users: action.payload.users
      }
    case GET_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default:
      return state
  }
}