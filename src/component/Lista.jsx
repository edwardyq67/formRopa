import React, { useEffect, useState } from 'react';
import '../CSSComponet/Lista.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';
const Lista = ({addRopa,ropaInformacion,editarFormulario}) => {
    const { register, handleSubmit,setValue } = useForm();
    const [versatil, setVersatil] = useState({});
  const [genero, setGenero] = useState({});
    useEffect(() => {
        axios
          .get("http://localhost:8080/ropa/versatil")
          .then((res) => setVersatil(res.data))
          .catch((error) => {
            console.error("Error al obtener ropas versatiles:", error);
          });
      
        axios
          .get("http://localhost:8080/ropa/genero")
          .then((res) => setGenero(res.data))
          .catch((error) => {
            console.error("Error al obtener ropas por genero:", error);
          });
      }, []);
      useEffect(()=>{
        if (ropaInformacion!==null) {
            setValue("name", ropaInformacion.name);
            setValue("marca", ropaInformacion.marca);
            setValue("color", ropaInformacion.color);
            setValue("precio", ropaInformacion.precio);
            setValue("versatilId", ropaInformacion.versatilId);
            setValue("generoId", ropaInformacion.generoId);
            
          }
      },[ropaInformacion])
    const submit=(data)=>{
        if(ropaInformacion){
            editarFormulario({
              id:ropaInformacion.id,
              name: data.name,
              marca: data.marca,
              color: data.color,
              precio: data.precio,
              versatilId: data.versatilId,
              generoId: data.generoId})
              setValue("name", "");
            setValue("marca", "");
            setValue("color", "");
            setValue("precio", "");
            setValue("versatilId", "");
            setValue("generoId", "");
        }else{
            addRopa(data)
            setValue("name", "");
            setValue("marca", "");
            setValue("color", "");
            setValue("precio", "");
            setValue("versatilId", "");
            setValue("generoId", "");
        }
        
    }
    const limpiar=()=>{
      if(ropaInformacion){
        setValue("name", "");
            setValue("marca", "");
            setValue("color", "");
            setValue("precio", "");
            setValue("versatilId", "");
            setValue("generoId", "");
            ropaInformacion(null)
      }else{
        setValue("name", "");
            setValue("marca", "");
            setValue("color", "");
            setValue("precio", "");
            setValue("versatilId", "");
            setValue("generoId", "");
      }
    }
    return (
        <div>
            <form className="Fromulario" onSubmit={handleSubmit(submit)}>
        <div className="importImg">
          <input type="file" name="image" />
        </div>
        <div className="Informacion">
          <div className="nombre">
            <input
              type="text"
              id="nombre"
              placeholder="NOMBRE"
              autoComplete="off"
              {...register("name")}
            />
          </div>
          <div className="marca">
            <input
              type="text"
              id="maraca"
              placeholder="MARCA"
              autoComplete="off"
              {...register("marca")}
            />
          </div>
          <div className="color">
            <input
              type="text"
              id="color"
              placeholder="COLOR"
              autoComplete="off"
              {...register("color")}
            />
          </div>
          <div className="precio">
            <input
              type="number"
              id="precio"
              placeholder="PRECIO"
              autoComplete="off"
              {...register("precio")}
            />
          </div>
        </div>
        <div className="precionar">
          <div className="versatil">
            <select name="" id="" {...register("versatilId")}>
              <option value="">VERSATIL</option>
              {versatil.map?.((versti) => (
                <option key={versti.id} value={versti.id}>
                  {versti.versatilidad}
                </option>
              ))}
            </select>
          </div>
          <div className="genero">
            <select name="" id="" {...register("generoId")}>
              <option value="">GENERO</option>
              {genero.map?.((genero) => (
                <option key={genero.id} value={genero.id}>
                  {genero.gener}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="buton">ENVIAR</button>
        <button onClick={limpiar} className="buton">limpiar</button>
           </form>
        </div>
    );
};

export default Lista;