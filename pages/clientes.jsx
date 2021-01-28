import Head from 'next/head'
import Table from '@components/table/TableFiltering'
import PageTitle from '@components/PageTitle'

function clientes() {
  return (
    <div>
      <Head>
        <title>MCA ERP | Clientes</title>
      </Head>
      <PageTitle title='Lista de Clientes' />
      <br></br>

      <Table />
    </div>
  )
}

export default clientes
