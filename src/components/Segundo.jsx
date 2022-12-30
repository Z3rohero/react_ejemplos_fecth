import React, { useEffect } from 'react'

export default function Segundo() {
    useEffect(() => {
        alert("el componete Aviso esta  montado")
    },[])
  return (
    <div>
        <hr/>
        <h3>Saludos zero terminar el curso!!!</h3>
        <button onClick = {e => {
            alert("bienvenido !!")
        }}>Mostrar alerta</button>
    </div>
  )
}
