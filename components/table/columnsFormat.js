export const COLUMNS = [
  {
    Header: 'Cliente',
    accessor: data => {
      return `${data.nombre} ${data.apellidos}`
    },
  },
  {
    Header: 'Documento',
    accessor: data => {
      return `${data.tipo_documento} : ${data.numero_documento}`
    },
  },
  {
    Header: 'Correo',
    accessor: 'correo',
  },
  {
    Header: 'Ubicacion',
    accessor: data => {
      return `${data.pais} - ${data.ciudad}`
    }
  }
]