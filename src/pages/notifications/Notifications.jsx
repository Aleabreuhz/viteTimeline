import React from "react";
import SearchBar from "../../components/search/SearchBar.jsx";
import "./Notifications.css";
import ButtonSelect from "../../components/buttonSelect/ButtonSelect.jsx";
import NotificationsCard from "./NotificationsCard.jsx"
import MenuBarr from "../../components/barMenu/BarMenu.jsx";
function Notifications() {
  return (
      <div className="mainPage">
        <div className="content_page">
          <SearchBar/>
          <ButtonSelect/>
          <NotificationsCard/>
          <MenuBarr/>
        </div>
      </div>
  );
}

export default Notifications;
