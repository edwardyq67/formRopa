import React, { useEffect, useState } from 'react';
import '../CSSComponet/Formulario.css'
import axios from 'axios';
const Formulario = ({ropas,eliminar,FormularioUpdate}) => {
  
    return (
        <div className='contenedorRopa'>
        <div className="contenedor">
            {
                ropas.map?.(ropa=>(
                    <div className="ropa" key={ropa.id}>
                        <img src={ropa.imgRopa} alt="" />
                        <h3><b>NAME: </b>{ropa.name}</h3>
                        <h3><b>MARCA: </b>{ropa.marca}</h3>
                        <h3><b>COLOR: </b>{ropa.color}</h3>
                        <h3><b>PRECIO: </b>{ropa.precio}</h3>
                        <h3><b>VERSATIL: </b>{ropa.versatil?.versatilidad}</h3>
                        <h3><b>GENERO: </b>{ropa.genero?.gener}</h3>
                        <button onClick={()=>eliminar(ropa.id)}>eliminar</button>
                        <button onClick={()=>FormularioUpdate(ropa)}>cambiar</button>
                    </div>
                ))
            }
        </div>
    </div>
    );
};

export default Formulario;