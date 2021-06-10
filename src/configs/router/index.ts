export const nonAuthenticatedRoutes = [
  {
    isExact: true,
    path: '/login',
    component: 'login'
  },
  {
    isExact: true,
    path: '/register',
    component: 'register'
  }
]

export const authenticatedRoutes = [
  {
    isExact: true,
    path: '/users',
    component: 'users',
  },
]