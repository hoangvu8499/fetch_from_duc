import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from 'constants/actionsType'
import { URL_LOGIN } from 'constants/appURL'
import axiosClient from 'tools/axiosClient'
import { Dispatch } from 'redux'

const loginSuccess = (token: string) => ({
  type: LOGIN_SUCCESS,
  payload: {
    token
  }
})

const login = () => ({
  type: LOGIN
})

const loginFail = (error: string) => ({
  type: LOGIN_FAIL,
  payload: {
    error
  }
})

const logout = () => ({
  type: LOGOUT
})


export const loginRequest = ({ username, password }: { username: string, password: string }) => {
  return (dispatch: Dispatch) => {
    dispatch(login())
    axiosClient
      .post(URL_LOGIN, {
        username,
        password
      })
      .then(res => {
        dispatch(loginSuccess(res.data.token))
        localStorage.setItem('access-token', res.data.token)
      })
      .catch(err => {
        dispatch(loginFail(err))
      })
  }
}

export const logoutRequest = () => {
  return (dispatch: Dispatch) => {
    dispatch(logout())
    localStorage.removeItem('access-token')
  }
}