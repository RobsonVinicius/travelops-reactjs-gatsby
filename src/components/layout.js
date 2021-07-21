import React from 'react'
import Footer from './Footer'
import Navbar from './Nav'
import { GlobalStyle } from './styles/GlobalStyles'


const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>       
      <Footer />
    </>
  )
}

export default Layout
