import { AuthState } from './auth'
import { UserState } from './user';

export interface RootState {
  auth: AuthState
  user: UserState
}

export interface ActionType {
  type: string
  payload: any
}