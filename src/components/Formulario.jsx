import {useState} from 'react'
import useLetras from '../hooks/useLetras'



const Formulario = () => {
const {busquedaLetra,setAlerta} = useLetras()

const [busqueda,setBusqueda] = useState({
    artista:'',
    cancion:''
})


const handleInputChange = (e) => {
    setBusqueda({
        ...busqueda,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault()
    if (Object.values(busqueda).includes('')) {
       setAlerta('Todos los campos son obligatorios');
       return
    }
   
    busquedaLetra(busqueda)


}

  return (
      <>
     s
    <form onSubmit={handleSubmit}>
            <legend>Busca por artistas y cancion</legend>
            <div className='form-grid'>
                <div>
                    <label>Artista</label>
                    <input 
                    type='text'
                    name='artista'
                    placeholder='Nombre Artista'
                    value={busqueda.artista}
                    onChange={handleInputChange}
                
                    />
                </div>
                <div>
                    <label>Cancion</label>
                    <input 
                    type='text'
                    name='cancion'
                    placeholder='Nombre Cancion'
                    value={busqueda.cancion}
                    onChange={handleInputChange}
                    />
                </div>
                <input type='submit' 
                    value='buscar' />
            </div>

    </form>
    </>
  )
}

export default Formulario