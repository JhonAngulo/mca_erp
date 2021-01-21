import Link from 'next/link'

function Header() {
  return (
    <header className='header'>
      <Link href='/'>
      <a className='header__logo'>MCA - ERP</a>
      </Link>
       
      

      <nav className='header__nav'>
        <ul className='header__nav-list'>
          <li className='header__nav-item'>Configuración</li>
          <li className='header__nav-item'>Salir</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
