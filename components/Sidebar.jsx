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
          <li key={item.option}>
            <Link href={`${item.url}`} >
              <a className='sidebar__menu-link'>
                {item.option}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div >
  )
}

export default Sidebar
