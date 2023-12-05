import React from 'react';
import "./style/tripPlannerHeader.css"
import frame from "../../src/assets/Frame.png"

const TripPlannerHeader = () => {
  return (
    <div className="trip-planner-header">
     <img src={frame} />
    </div>
  );
};

export default TripPlannerHeader;
