import React from "react";
import { Link } from "react-router-dom";
import "./Hike.css";

const Hike = (props) => {
    const { title, routeType, difficulty, length, elevationGain, image, id } = props;
   
    return (
        <div className="hike">
            <Link to={`/hikes/${id}`}>
                <div className="hike-image" style={{'backgroundImage': `url(${process.env.PUBLIC_URL}/images/${image})`}}>
                    </div>
            </Link>
            <h2>
                <Link className="hike-title" to={`/hikes/${id}`}>
                {`${title}`}
                </Link>
            </h2>
            <Link className="summary-link" to={`/hikes/${id}`}>
            <div className="hike-summary">
                <p className="type">{routeType}</p>
                <p className="difficulty">{difficulty}</p>
                <p className="length">{length}km</p>
                <p className="elevation">{elevationGain}m</p>
            </div>
            </Link>
        </div>
    );
    }

export default Hike;
