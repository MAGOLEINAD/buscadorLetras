import React from 'react'
import useLetras from '../hooks/useLetras'
import Alerta from './Alerta'
import Formulario from './Formulario'
import Letra from './Letra'
import Spinner from './Spinner'




const AppLetras = () => {
    const {alerta,letra} = useLetras()
    return (
        <>
            <header>Busqueda de letras de Canciones</header>
            <Formulario />
            <main>
            {alerta? <Alerta/>:
             letra? <Letra/> :
          
            <p className='text-center'>Busca letras de tus artistas favoritos</p>}
            </main>
        </>
    )

}

export default AppLetras