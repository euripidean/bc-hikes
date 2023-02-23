import React from "react";
import Hike from "../Hike/Hike";
import data from "../../hike-data.js";
import "./HikeList.css";

function HikeList() {
    const hikes = data.map((hike) => {
        const { title, shortDescription, routeType, difficulty, length, elevationGain, image, id } = hike;
  return (
    <div className="HikeList">
    <Hike
        id={id}
        key={`${id}-${title}`}
        title={title}
        description={shortDescription}
        routeType={routeType}
        difficulty={difficulty}
        length={length}
        elevationGain={elevationGain}
        image={image} />
    </div>
    );
    });
    return (
        <div className="hike-list">
            { hikes }
        </div>
    );
}

export default HikeList;
