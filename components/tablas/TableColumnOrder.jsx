import React, { useMemo } from 'react'

import { useTable, useColumnOrder } from 'react-table'
import { COLUMNS } from './columns'
import MOCK_DATA from './MOCK_DATA.json'

function Table() {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setColumnOrder
  } = useTable({
    columns,
    data,
  },
    useColumnOrder
  )

  const changeOrder = () => {
    setColumnOrder(['id', 'last_name', 'first_name', 'email', 'country', 'phone'])
  }

  return (
    <div>
      <button onClick={changeOrder} >Cambiar order</button>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table