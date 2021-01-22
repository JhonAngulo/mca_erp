import Head from 'next/head'
import ClientsTable from '../components/tablas/ClientsTable'

function clientes() {
  return (
    <div>
      <Head>
        <title>MCA ERP | Clientes</title>
      </Head>
      Clientes

      <ClientsTable />
    </div>
  )
}

export default clientes
