import React from 'react'
import Footer from './footer'
import Header from './header'
import Sidebar from './sidebar'

const Layout: React.FC = ({ children }) => {
  return (
    <div className='container-scroller'>
      <Header />
      <div className='container-fluid page-body-wrapper'>
        <Sidebar />
        <div className='main-panel'>
          <div className='content-wrapper'>{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout
