import React from "react";
import events from "../../models/eventList";
import BarMenu from "../barMenu/BarMenu.jsx";
import SearchBar from "../../components/search/SearchBar.jsx";
import "../../pages/timelineEvents/timelineEvents.css";
function EventsTemplate({ currentTimeline }) {
  console.log("Current Timeline:", currentTimeline);
  console.log("Events:", events);

  return (
    <div className="eventPage">
      <SearchBar />
      <div className="events-details-content">
        {events.map((e) =>
          e.timeline === currentTimeline ? (
            <div className="containerEvent" key={e.key}>
              <div className="timelineName">{e.timelineName}</div>
              <div className="eventTitle">{e.title}</div>
              <div className="events-details-preview">
                <img src={e.preview} alt="" />
              </div>
              <div className="containerContent">
                <div className="eventContent">{e.content}</div>
              </div>
            </div>
          ) : null
        )}
      </div>
      <BarMenu />
    </div>
  );
}

export default EventsTemplate;
