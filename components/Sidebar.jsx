import Link from 'next/link'

import UserInfo from './UserInfo'

function Sidebar() {
  const menu = [
    {
      icon: '',
      option: 'Inicio',
      url: '/'
    },
    {
      icon: '',
      option: 'Clientes',
      url: '/clientes'
    },
    {
      icon: '',
      option: 'Tareas',
      url: '/tareas'
    },
    {
      icon: '',
      option: 'Soporte',
      url: '/soporte'
    },
    {
      icon: '',
      option: 'Contactos',
      url: '/contactos'
    },
  ]

  return (
    <div className='sidebar'>
      <div className='sidebar__user'>
        <UserInfo />
      </div>

      <ul className='sidebar__menu'>
        {menu.map((item) => (
          <Link href={`${item.url}`} key={item.option}>
            <li className='sidebar__menu-option' >
              <a className='sidebar__menu-link'>
                {item.option}
              </a>
            </li>
          </Link>
        ))}
      </ul>
    </div >
  )
}

export default Sidebar
