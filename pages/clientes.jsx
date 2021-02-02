import Head from 'next/head'
import Table from '@components/table/TableFiltering'
import PageTitle from '@components/PageTitle'

import Modal from '@components/modals/Modal'
import FormClient from '@components/forms/FormClient'
import { useState } from 'react'

function clientes() {
  const [open, setOpen] = useState(true)

  const handleToggleModal = () => {
    setOpen(!open)
  }

  return (
    <div>
      <Head>
        <title>MCA ERP | Clientes</title>
      </Head>
      <PageTitle title='Lista de Clientes'>
        <button className='btn__primary' onClick={handleToggleModal}>
          Agregar +{' '}
        </button>
      </PageTitle>
      <Modal state={open} event={handleToggleModal} title='Nuevo cliente'>
        <FormClient />
      </Modal>

      <Table />
    </div>
  )
}

export default clientes
