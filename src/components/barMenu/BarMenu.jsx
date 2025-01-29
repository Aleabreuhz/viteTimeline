import React from "react";
// import { Link } from 'react-router-dom';
import "./BarMenu.css";
import { Link } from "react-router-dom";
function MenuBarr() {
  return (
    <div className="toolBox">
      <Link to="/">
        <img
          src="/notificacion.svg"
          alt="notification"
          style={{ cursor: "pointer" }}
        />
      </Link>
      <Link to="/timeline">
        <img src="/cronologia.svg" alt="timeline" />
      </Link>
      <Link to="/quiz">
        <img src="/preguntas-mas-frecuentes.svg" alt="quiz" />
      </Link>
      <Link to="/editCreate">
        <img src="/lapiz.svg" alt="pencil" />
      </Link>
    </div>
  );
}

export default MenuBarr;
