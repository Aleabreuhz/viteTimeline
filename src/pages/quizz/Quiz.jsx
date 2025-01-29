import React from "react";
import "./Quiz.css";
import { Alert } from 'antd';
import MenuBarr from "../../components/barMenu/BarMenu";
function Quiz() {
  return (
    <div className="mainPage">
      <div className="contentPage">
      <Alert className="yourTurnBrand" message="Success Text" type="success" />
      <br />
      <MenuBarr/>
      </div>
    </div>
  );
}

export default Quiz;
