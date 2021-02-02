import "regenerator-runtime/runtime"

import { useAsyncDebounce } from 'react-table'
import Input from '@components/Input'

function GlobalFilter({ filter, setFilter }) {

  const HandleChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 400)

  const inputChange = (e) => {
    HandleChange(e.target.value)
  }

  return (
    <Input text ='buscar cliente' type ='text' event={inputChange} value={filter}/>
  )
}

export default GlobalFilter
