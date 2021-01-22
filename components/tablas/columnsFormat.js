import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id'
  },
  {
    Header: 'Nombre',
    Footer: 'Nombre',
    accessor: 'first_name'
  },
  {
    Header: 'Apellido',
    Footer: 'Apellido',
    accessor: 'last_name'
  },
  {
    Header: 'Correo',
    Footer: 'Correo',
    accessor: 'email'
  },
  {
    Header: 'Pais',
    Footer: 'Pais',
    accessor: 'country'
  },
  {
    Header: 'Telefono',
    Footer: 'Telefono',
    accessor: 'phone'
  },
  {
    Header: 'Fecha nacimiento',
    Footer: 'Fecha nacimiento',
    accessor: 'date_of_birth',
    Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy')}
  }
]