import Link from 'next/link'

import UserInfo from './UserInfo'

function Sidebar() {
  const menu = [
    {
      icon: '',
      option: 'inicio',
    },
    {
      icon: '',
      option: 'clientes',
    },
    {
      icon: '',
      option: 'tareas',
    },
    {
      icon: '',
      option: 'soporte',
    },
    {
      icon: '',
      option: 'contactos',
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
            <Link href={`/${item.option}`}>
              <a>{item.option}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
