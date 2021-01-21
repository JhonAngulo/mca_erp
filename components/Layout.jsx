import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='main'>
        <Sidebar />
        <div className='container'>{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
