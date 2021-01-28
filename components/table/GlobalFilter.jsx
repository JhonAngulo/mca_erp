import "regenerator-runtime/runtime"

import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import SearchBar from '@components/SearchBar'

function GlobalFilter({ filter, setFilter }) {

  const HandleChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 400)

  const inputChange = (e) => {
    HandleChange(e.target.value)
  }

  return (
    <SearchBar text ='buscar cliente' type ='text' event={inputChange} value={filter}/>
    // <label>
    //   Buscar:{' '}
    //   <input value={value || ''} onChange={(e) => {
    //     setValue(e.target.value)
    //     HandleChange(e.target.value)
    //   }} />
    // </label>
  )
}

export default GlobalFilter
