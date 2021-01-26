import React, { useEffect, useState } from 'react'
import { useAsyncDebounce } from 'react-table'

function GlobalFilter({ filter, setFilter }) {
  const [value, setValue] = useState(filter)
  const [search, setSearch] = useState(false)

  // const HandleChange = useAsyncDebounce(value => {
  //   setFilter(value || undefined)
  // }, 400)

  useEffect(() => {
    let timeOutId
    if (search) {
      timeOutId = setTimeout(() => {
        setFilter(value || undefined)
      }, 400)
    }
    return () => clearTimeout(timeOutId)
  }, [value, search])

  const HandleChange = (e) => {
    setSearch(true)
    setValue(e)
  }

  return (
    <span>
      Buscar:{' '}
      <input value={value || ''} onChange={(e) => {
        setValue(e.target.value)
        HandleChange(e.target.value)
      }} />
    </span>
  )
}

export default GlobalFilter
