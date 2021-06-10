import React from 'react'
import { Redirect } from 'react-router-dom'
import { BodyProps } from './index.d'

export const PublicRouter: React.FC<BodyProps> = props => {
  const {
    isAuth,
    children
  } = props

  if (isAuth) return <Redirect to='/users'/>
  return <>{children}</>
}