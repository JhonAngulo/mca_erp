import Input from '@components/Input'
import { useRef } from 'react'

function FormClient() {
  const formRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(formRef.current)
    console.log(formRef.current)
    const data = {
      nombres: formData.get('Nombres'),
      apellidos: formData.get('Apellidos'),
      correo: formData.get('Correo'),
      telefono: formData.get('Telefono'),
      tipo_documento: formData.get('Tipo Documento'),
      numero_documento: formData.get('Número Documento'),
      pais: formData.get('Pais'),
      departamento: formData.get('Departamento'),
      ciudad: formData.get('Ciudad'),
      direccion: formData.get('Dirección'),
      tipo_cliente: formData.get('Tipo Cliente'),
    }

    console.log(data)
  }

  return (
    <>
      <form ref={formRef} className='form__client'>
        <div>
          <Input text='Nombres' type='text' />
          <Input text='Apellidos' type='text' />
          <Input text='Correo' type='email' />
          <Input text='Telefono' type='number' />
          <Input text='Tipo Documento' type='text' />
          <Input text='Número Documento' type='number' />
        </div>
        <div>
          <Input text='Pais' type='text' />
          <Input text='Departamento' type='text' />
          <Input text='Ciudad' type='text' />
          <Input text='Dirección' type='text' />
          <Input text='Tipo Cliente' type='text' />
        </div>
      </form>
      <button className='btn__primary' onClick={handleSubmit} >
        Crear
      </button>
    </>
  )
}

export default FormClient
