import React from "react";
import { useParams } from "react-router";
import data from "../../hike-data.js";
import "./HikeDetail.css";

function HikeDetail(props) {
    const params = useParams();
    const { id } = params;
    const { title, difficulty, routeType, shortDescription, tags, elevationGain, length, estimatedTime, park, image } = data[id];

    return (
        <>
        <div className="hike-detail-container" style={{'backgroundImage': `url(${process.env.PUBLIC_URL}/images/${image})`}}>
            <div className="hike-detail-overlay">
            <div className="hike-detail-header">
            <h1>{title}</h1>
            <h2>{park}</h2>
            </div>
            </div>
        
        <div className="hike-detail">
        <div className="stats">
            { difficulty === "Hard"? <p className="difficulty"><i className="fa-solid fa-circle-exclamation">&nbsp;</i>{difficulty}</p> : <p className="difficulty"><i className="fa-solid fa-circle-check">&nbsp;</i>{difficulty}</p> }
            <p className="type"><i className="fa-solid fa-location-dot">&nbsp;</i>{routeType}</p>
            <p className="elevation"><i className="fa-solid fa-arrow-trend-up">&nbsp;</i>{elevationGain}m</p>
            <p className="length"><i className="fa-regular fa-map">&nbsp;</i>{length}km</p>
            <p className="time"><i className="fa-regular fa-clock">&nbsp;</i> {estimatedTime}</p>
        </div>
        <div className="tags">
            {tags.map((tag, index) => {
                return <p class="tag-entry" key={index}>{tag}</p>
            } )}
        </div>
        <div className="description">
            <p>{shortDescription}</p>
        </div>
        </div>
        </div>
        </>
    );
}

export default HikeDetail;
