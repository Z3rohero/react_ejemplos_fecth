import React, { useEffect } from "react";
import { useState } from "react";
export const Ajax = () => {

    const [usuarios, Setusuarios] = useState([]);
    const [cargando,setCargando] = useState(true)
    const [errores,setErrores] = useState("")
    //basico para rellenas el usuario

  const GetusuariosEs = () => {
    Setusuarios([
      {
        id: 1,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        id: 2,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      {
        id: 3,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
      },
    ]);
  };

  const GetUsuariosajax = () => {
    fetch("https://reqres.in/api/users?page=2")
    .then(respuesta => respuesta.json()
    .then(resultado_final => {
        Setusuarios(resultado_final.data)
        console.log(usuarios)

    },error =>{
        console.log(error)

    } )
    )  
}


/*
const getusuariosasyn = ()=>{
    
    setTimeout(async ()=>{
    const peticion  = await fetch ("https://reqres.in/api/users?page=2");    
    const {data} = await peticion.json();
    Setusuarios(data)
    setCargando(false);

    }, 3000)
    

}


*/


const getusuariosasyn = async()=>{

    try{
    const peticion  = await fetch ("https://reqres.in/api/users?page=2");
    //esta destructurado la peticion
    const {data} = await peticion.json();
    Setusuarios(data)
    setCargando(false);

    }catch (error){
        console.log( error);
        setErrores(error.message)
    }

}


/* El useEfect para los estatatioc
  useEffect(() => {
    GetusuariosEs();
  }, []);

  */


/* el useEfect para  fecth
  useEffect(() => {
    GetUsuariosajax();
  }, [])
 */

  useEffect(() => {
    getusuariosasyn();
  }, [])

  if( errores != ""){
    return (
        <div className="errores"> 
        {errores}  
         </div>
      )

  }else if(cargando == true ){
    return (
        <div className="'cargando"> 
        cargando datos .....
        </div>
      )

  }else if (cargando == false && errores === "" ) {return (
    <div>
      <h2>Listado de usuarios por ajax</h2>

      <ol>
        {usuarios.map((user) => {
          return (
            <li key={user.id}> <img src={user.avatar} width="40"/>
              &nbsp;
              {user.first_name}
              {user.last_name}
            </li>
          );
        })}
      </ol>
    </div>
  );}
  
  
};
