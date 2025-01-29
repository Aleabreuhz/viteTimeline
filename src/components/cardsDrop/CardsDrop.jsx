import React, { useState, useEffect, useRef } from "react";
import "./CardsDrop.css";
function CardsDrop({ img, content, title, link }) {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  function showCard() {
    setVisible(true);
  }
  useEffect(() => {
    function handleClickOutside(event) {
      // Verifica si el clic ocurrió fuera del elemento referenciado
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    // Limpia el evento cuando el componente se desmonte
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="card-name">
        {" "}
        <span>{title}</span>
      </div>
      <img
        src={img}
        alt="foto"
        className={`card-img ${visible ? "blurred" : ""}`}
        onClick={showCard}
      />
      <div ref={cardRef}
        className={`card-timeLine  ${visible ? "card-timeLine-visible" : ""}`}
      >
        <div className="card-content" >
          {content}
        </div>
        <a href={`/timeline/${link}`}>
          <img className="showMore" src="mas.svg" alt="mas"></img>
        </a>
      </div>
    </>
  );
}
export default CardsDrop;
