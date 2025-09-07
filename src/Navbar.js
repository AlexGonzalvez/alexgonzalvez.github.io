// Navbar.js
import React from "react";
import Fecha from "./Fecha"
import Resources from "./images/resources.png"

function Navbar() {
  return (
    <nav style={{ backgroundColor: "rgba(0, 0, 0, 1)", position: "fixed", top: 0, width: "100%", height:"3.7%"}}>
      <ul style={{ display: "flex", listStyle: "none", gap: "10px", alignContent:"start"}}>
        <div className="boton_actividades">
        <li>Actividades</li>
        </div>
        <div className="boton_fecha">
        <li><Fecha /></li>
        </div>
        <div className="boton_recursos">
        <img
            src={Resources}
            alt="Recursos"
            style={{ width: "85px", height: "25px" }}
        />
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
