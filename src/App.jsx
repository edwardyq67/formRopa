import { useEffect, useState } from 'react'

import './App.css'
import Lista from './component/Lista'
import Formulario from './component/Formulario'
import axios from 'axios'

function App() {
  
  const [ropas,setRopa]=useState([])
  const [ropaInformacion,setRopaInformacion]=useState(null)
  useEffect(() => {
    axios.get('http://localhost:8080/ropas')
      .then(res => setRopa(res.data))
      .catch(error => {
        console.error("Error al obtener ropas:", error);
      });
  }, []);
  
  const getActualizar = () => {
    axios.get('http://localhost:8080/ropas')
      .then(res => setRopa(res.data))
      .catch(error => {
        console.error("Error al obtener ropas:", error);
      });
  };
  
  const addRopa = (producto) => {
    axios.post('http://localhost:8080/ropas', producto)
      .then(() => getActualizar())
      .catch(error => {
        console.error("Error al agregar ropa:", error);
      });
  };
  
  const eliminar = (id) => {
    axios.delete(`http://localhost:8080/ropas/${id}`)
      .then(() => getActualizar())
      .catch(error => {
        console.error("Error al eliminar ropa:", error);
      });
  };
  
  const FormularioUpdate = (ropa) => {
    setRopaInformacion(ropa);
  };
  
  const editarFormulario = (edicion) => {
    axios.put(`http://localhost:8080/ropas/${edicion.id}`,edicion)
    .then(()=>(getActualizar()),setRopaInformacion(null))
  }
  return (
    <div className="App">
      <Lista addRopa={addRopa} ropaInformacion={ropaInformacion} editarFormulario={editarFormulario}/>
      <Formulario ropas={ropas} eliminar={eliminar} FormularioUpdate={FormularioUpdate}/>
    </div>
  )
}

export default App
