import React,{useState, useEffect} from 'react'
import "./PantallaVistaTurnos.css"
import background from "../../img/Fondo.jpg"


function PantallaVistaTurnos() {
//Variable del numero mostrado en pantalla-------------------------------------------------------------------------//
const [orden, setOrden] = useState(0);


document.onkeydown = checkKey;


//Controla el cambio de teclas-------------------------------------------------------------------------//
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
      if(orden > 0){
        setOrden(orden-1)
      }
      
    }
    else if (e.keyCode == '39') {
      setOrden(orden+1)
    }
}
//----------------------------------------------------------------------------------------------------------------//



//Lo que se renderiza----------------------------------------------------------------------------------------------------------//
  return (
    <div id='PantallaVistaTurnosContainer' style={{ backgroundImage: `url(${background})` }}>
        <h1 id='numeroTurnoLabel' key={orden} className={"pop-outin"}>{orden}</h1>
    </div>
  )
}

export default PantallaVistaTurnos
