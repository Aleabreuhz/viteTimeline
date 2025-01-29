import React from "react";
import "./Timelines.css";
import MenuBarr from "../../components/barMenu/BarMenu";
import SearchBar from "../../components/search/SearchBar";
import CardsDrop from "../../components/cardsDrop/CardsDrop";
import timelines from "../../models/timelinesList";

function Timelines() {
  return (
    <div className="mainPage">
      <SearchBar />
      <div className="contentPage"></div>
      <div className="timelines">
        {timelines.map(t => (
          <CardsDrop img={t.preview} title={t.title} content={t.content} link={t.link}/>
        ))}
      </div>
      <MenuBarr />
    </div>
  );
}
export default Timelines;
