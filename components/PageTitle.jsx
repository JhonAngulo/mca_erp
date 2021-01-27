import React from 'react'
import Divider from '@components/Divider'

function PageTitle({ title }) {
  return (
    <>
      <h2>
        {title}
      </h2>
      <Divider />
    </>
  )
}

export default PageTitle
