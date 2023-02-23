import React from "react";
import { Link } from "react-router-dom";
import "./Hike.css";

const Hike = (props) => {
    const { title, description, routeType, difficulty, length, elevationGain, image, id } = props;
    return (
        <div className="hike">
            <Link to={`/hikes/${id}`}>
                <img src={`${process.env.PUBLIC_URL}/images/${image}`} 
                alt={title} />
            </Link>
            <h2>
                <Link className="hike-title" to={`/hikes/${id}`}>
                {`${title}`}
                </Link>
            </h2>
            <p>{`${routeType} - ${difficulty} - ${length}km - ${elevationGain}m`}</p>
            <p>{`${description}`}</p>
        </div>
    );
    }

export default Hike;
