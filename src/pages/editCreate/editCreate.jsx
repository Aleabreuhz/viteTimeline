import React from "react";
import BarMenu from "../../components/barMenu/BarMenu";
import ButtonsEditCreate from "../../components/buttonSelect/ButtonsEditCreate";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./editCreate.css";
function EditCreate() {
  const [showOptions, setShowOptions] = useState(false);
  const menuRef = useRef(null);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <div className="titlePage">Edit and Create</div>
      <ButtonsEditCreate />
      <div className="plus-menu-container">
        {/* Opciones que aparecen al lado del botón */}
        {showOptions && (
          <div className="horizontal-options">
            <Link to="/createTimeline">
              <button className="option-button">TimeLine</button>
            </Link>
            <Link to="/createQuiz">
              <button className="option-button">Quiz</button>
            </Link>
          </div>
        )}

        {/* Botón "+" */}
        <button
          className="plus-button"
          onClick={() => setShowOptions(!showOptions)}
        >
          <div className="plus-icon">+</div>
          <span className="plus-label">New</span>
        </button>
      </div>
      <BarMenu />
    </div>
  );
}

export default EditCreate;
