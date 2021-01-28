import React, { useEffect, useState } from 'react'

function Input({ text = 'sample', type = 'text', event, value = '' }) {

  const [state, setState] = useState(value)
  useEffect(() => {
    if (type === 'date') {
      const date = new Date()
      setState(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
    }
  }, [])

  return (
    <div className='input-material'>
      <input id={text} type={type} defaultValue={state} className='input-material__input' name={text} onChange={event} required />
      <label htmlFor={text} className='input-material__label'>
        <span className='input-material__text'>{text}</span>
      </label>
    </div>
  )
}

export default Input
