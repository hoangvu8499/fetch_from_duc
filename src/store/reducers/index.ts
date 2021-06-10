import { combineReducers } from 'redux'
import { RootState } from 'store/interface'
import authReducer from './authReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers<RootState>({
  auth: authReducer,
  user: userReducer,
})
export default rootReducer