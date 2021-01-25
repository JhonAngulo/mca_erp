import Head from 'next/head'
import Table from '../components/tablas/TableFiltering'

function clientes() {
  return (
    <div>
      <Head>
        <title>MCA ERP | Clientes</title>
      </Head>
      Lista de Clientes
      <br></br>

      <Table />
    </div>
  )
}

export default clientes
