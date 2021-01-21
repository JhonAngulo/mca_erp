function UserInfo() {
  return (
    <div className='user__info'>
      <a href=''>
        <img
          className='user__avatar'
          width='64px'
          height='64px'
          src='https://react-material-dashboard.devias.io/static/images/avatars/avatar_7.png'
          alt='imagen de usuario'
        />
      </a>
      <h5 className='user__name'>Jhon Angulo</h5>
      <p className='user__position'>Desarrollador</p>
    </div>
  )
}

export default UserInfo
