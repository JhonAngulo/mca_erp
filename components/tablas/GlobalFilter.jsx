import "regenerator-runtime/runtime"

import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

function GlobalFilter({ filter, setFilter }) {
  const [value, setValue] = useState(filter)

  const HandleChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 400)

  return (
    <label>
      Buscar:{' '}
      <input value={value || ''} onChange={(e) => {
        setValue(e.target.value)
        HandleChange(e.target.value)
      }} />
    </label>
  )
}

export default GlobalFilter
