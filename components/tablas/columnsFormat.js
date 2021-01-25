import { format } from 'date-fns'
import ColumnFilter from './ColumnFilter'

export const COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
    Filter: ColumnFilter,
    disableFilters: true
  },
  {
    Header: 'Nombre',
    accessor: 'nombre',
    Filter: ColumnFilter
  },
  {
    Header: 'Apellido',
    accessor: 'apellidos',
    Filter: ColumnFilter
  },
  {
    Header: 'Documento',
    accessor: 'numero_documento',
    Filter: ColumnFilter
  },
  {
    Header: 'Tipo Documento',
    accessor: 'tipo_documento',
    Filter: ColumnFilter
  },
  {
    Header: 'Correo',
    accessor: 'correo',
    Filter: ColumnFilter
  },
  {
    Header: 'Pais',
    accessor: 'pais',
    Filter: ColumnFilter
  },
  {
    Header: 'Ciudad',
    accessor: 'ciudad',
    Filter: ColumnFilter
  },
  {
    Header: 'Direccion',
    accessor: 'direccion',
    Filter: ColumnFilter
  },
  {
    Header: 'Telefono',
    accessor: 'telefono',
    Filter: ColumnFilter
  }
]