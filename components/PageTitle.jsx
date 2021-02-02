import React from 'react'
import Divider from '@components/Divider'

function PageTitle({ title, children }) {
  return (
    <>
      <h2 className='title__container'>
        {title}
        {children}
      </h2>
      <Divider />
    </>
  )
}

export default PageTitle
