import { format } from 'date-fns'
import ColumnFilter from './ColumnFilter'

export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
    Filter: ColumnFilter,
    disableFilters: true
  },
  {
    Header: 'Nombre',
    Footer: 'Nombre',
    accessor: 'first_name',
    Filter: ColumnFilter
  },
  {
    Header: 'Apellido',
    Footer: 'Apellido',
    accessor: 'last_name',
    Filter: ColumnFilter
  },
  {
    Header: 'Correo',
    Footer: 'Correo',
    accessor: 'email',
    Filter: ColumnFilter
  },
  {
    Header: 'Pais',
    Footer: 'Pais',
    accessor: 'country',
    Filter: ColumnFilter
  },
  {
    Header: 'Telefono',
    Footer: 'Telefono',
    accessor: 'phone',
    Filter: ColumnFilter
  },
  {
    Header: 'Fecha nacimiento',
    Footer: 'Fecha nacimiento',
    accessor: 'date_of_birth',
    Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy')},
    Filter: ColumnFilter
  }
]