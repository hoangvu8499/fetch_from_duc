import {
  GET_USERS_SUCCESS,
  GET_USERS,
  GET_USERS_FAIL
} from 'constants/actionsType'
import { URL_GET_USERS } from 'constants/appURL'
import axiosClient from 'tools/axiosClient'
import { Dispatch } from 'redux'

const getUsersSuccess = (users: any[]) => ({
  type: GET_USERS_SUCCESS,
  payload: {
    users
  }
})

const getUsers = () => ({
  type: GET_USERS
})

const getUsersFail = (error: string) => ({
  type: GET_USERS_FAIL,
  payload: {
    error
  }
})

export const getUsersRequest = () => {
  return (dispatch: Dispatch) => {
    dispatch(getUsers())
    axiosClient
      .get(URL_GET_USERS)
      .then(res => {
        dispatch(getUsersSuccess(res.data))
      })
      .catch(err => {
        dispatch(getUsersFail(err))
      })
  }
}
