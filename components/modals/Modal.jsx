import { useEffect } from 'react'
import Portal from './Portal'

const Modal = ({ state, event, title, children }) => {
  useEffect(() => {}, [state])

  return (
    <>
      {state && (
        <Portal selector='#modal'>
          <div className='backdrop'>
            <div className='modal'>
              <div className='modal__title'>
                <p>{title}</p>
                <button className='btn__primary' onClick={event}>
                  Cerrar
                </button>
              </div>
              <div className='modal__container'>{children}</div>
            </div>
          </div>
        </Portal>
      )}
    </>
  )
}

export default Modal
