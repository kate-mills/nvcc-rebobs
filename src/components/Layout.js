import * as React from 'react'

import Footer from './Footer'
import Block from './Block'

function Layout({ children }) {
  return (
    <>
      <nav>nav</nav>
      <Block bgColor="white" style={{ paddingTop: '3rem' }}>
        <main style={{ minHeight: '80vh' }}>{children}</main>
      </Block>
      <Footer />
    <div style={{height: '3px', background: 'var(--purple)', borderBottom: '2px solid var(--orange)'}}/>
    </>
  )
}

export default Layout
