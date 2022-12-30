import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Segundo from './Segundo'

export default function Primero() {
    const [usuario,setusuario]=useState("zero")
    const[fecha,setfecha] = useState("01-07-1998")

    const cambia = e => {
        setusuario(e.target.value);
    }
    const cambiafecha = e => {
        setfecha(Date.now());
    }
    const [contador,Setcontador] = useState(0);
    // solo se va ejecutar uno sola vez
    /*
    useEffect(()=>{
        alert("la fecha ha cambiado a :" +fecha )
    },[])
    */
     // solo si cambio el usuario  
     // en lo cochete, modificado usuario
    useEffect(()=>{
         Setcontador(contador + 1)
        console.log("el contador ha cambiado" + contador)
    
    },[usuario,fecha])
    
  return (
    <div>
        <h1>El efecto -hook useEfect</h1>
        <strong className={contador>=10 ? "label" : "label-green"}>{usuario}</strong>
        

        <hr/>
        <input type= "text"
        onChange={e => cambia(e)}
        placeholder="cambiar el nombre"
        />
        <hr/>
        <strong>{fecha}</strong>
        <button onClick={e => cambiafecha(e)}>Cambiar fecha</button>
        <p>
            {usuario == "zero" && <Segundo></Segundo> }
        </p>
    </div>
  )
}
