import Header from './Header'
import Footer from  './Footer'
import UserInfo from './UserInfo'

function Layout({ children }) {
  return (
    <>
    <Header />
    <UserInfo />
    {
      children
    }
    <Footer />
    </>
  )
}

export default Layout
