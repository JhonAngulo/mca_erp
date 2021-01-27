export const COLUMNS = [
  {
    Header: 'Cliente',
    accessor: data => {
      return `${data.nombre} ${data.apellidos}`
    },
  },
  {
    Header: 'Documento',
    accessor: 'numero_documento',
  },
  {
    Header: 'Tipo Doc.',
    accessor: 'tipo_documento',
  },
  {
    Header: 'Correo',
    accessor: 'correo',
  },
  {
    Header: 'Pais',
    accessor: 'pais',
  },
  {
    Header: 'Ciudad',
    accessor: 'ciudad',
  }
]