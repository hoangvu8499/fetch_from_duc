import React from 'react'
import { Redirect } from 'react-router-dom'
import Layout from 'layout/layout'
import { BodyProps } from './index.d'

export const PrivateRouter: React.FC<BodyProps> = props => {
  const {
    isAuth,
    children
  } = props

  if (!isAuth) return (<Redirect to='/login' />)
  return (
    <Layout>{children}</Layout>
  )
}