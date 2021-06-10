import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { authenticatedRoutes, nonAuthenticatedRoutes } from 'configs'
import { PublicRouter, PrivateRouter, Loading } from 'components'
import { RootState } from 'store/interface'
import { connect } from 'react-redux'

interface BodyProps {
  isAuthenticated: Boolean
}

const Components: Record<string, React.ComponentType<unknown>> = {}
for (const c of authenticatedRoutes) {
  Components[c.component] = lazy(() => import(`./` + c.component))
}

for (const c of nonAuthenticatedRoutes) {
  Components[c.component] = lazy(() => import('./' + c.component))
}

const App: React.FC<BodyProps> = ({ isAuthenticated }) => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          {nonAuthenticatedRoutes.map(c => {
            // Route khong can bao ve, nhung khong duoc truy cap khi da authenticated
            const Component = Components[c.component]
            return (
              <Route
                key={c.path}
                exact={c.isExact}
                path={c.path}
                render={() => (
                  <PublicRouter isAuth={isAuthenticated}>
                    <Component />
                  </PublicRouter>
                )}
              />
            )
          })}
          {authenticatedRoutes.map(c => {
            const Component = Components[c.component]
            return (
              <Route
                key={c.path}
                exact={c.isExact}
                path={c.path}
                render={(props) => (
                  // Bao ve Route can authentication bang Redirect
                  <PrivateRouter {...props} isAuth={isAuthenticated}>
                    <Component />
                  </PrivateRouter>
                )}
              />
            )
          })}
          {isAuthenticated ? (
            <Redirect to='/users' />
          ) : (
            <Redirect to='/login' />
          )}
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}

const mapStateToProps = (store: RootState) => ({
  isAuthenticated: store.auth.isAuthenticated,
})

export default connect(mapStateToProps, {})(App)
// export default App
