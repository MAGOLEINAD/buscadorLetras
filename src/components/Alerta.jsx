import React from 'react'
import useLetras from '../hooks/useLetras'



const Alerta = () => {
    const {alerta} = useLetras()
  return (
    <div className=' alerta'>{alerta}</div>
  )
}

export default Alerta