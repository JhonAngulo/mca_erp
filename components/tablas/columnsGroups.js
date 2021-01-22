export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Nombre',
    Footer: 'Nombre',
    accessor: 'first_name',
  },
  {
    Header: 'Apellido',
    Footer: 'Apellido',
    accessor: 'last_name',
  },
  {
    Header: 'Correo',
    Footer: 'Correo',
    accessor: 'email',
  },
  {
    Header: 'Pais',
    Footer: 'Pais',
    accessor: 'country',
  },
  {
    Header: 'Telefono',
    Footer: 'Telefono',
    accessor: 'phone',
  },
]

export const GROUPED_COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Nombre completo',
    Footer: 'Nombre completo',
    columns: [
      {
        Header: 'Nombre',
        Footer: 'Nombre',
        accessor: 'first_name',
      },
      {
        Header: 'Apellido',
        Footer: 'Apellido',
        accessor: 'last_name',
      },
    ],
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      {
        Header: 'Correo',
        Footer: 'Correo',
        accessor: 'email',
      },
      {
        Header: 'Pais',
        Footer: 'Pais',
        accessor: 'country',
      },
      {
        Header: 'Telefono',
        Footer: 'Telefono',
        accessor: 'phone',
      },
    ],
  },
]
