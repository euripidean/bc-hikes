import React from "react";
import Hike from "../Hike/Hike";
import data from "../../hike-data.js";
import { useState } from "react";
import "./HikeList.css";

function HikeList() {

    const [ query, setQuery ] = useState("");
    const [ difficulty, setDifficulty ] = useState("all");

    const handleDifficultyChange = (e) => {
        setDifficulty(e.target.value);
    }

    const hikes = data.filter(({ title, park }) => {
        const checkTitle = title.toString().toLowerCase().includes(query.toLowerCase());
        const checkPark = park.toString().toLowerCase().includes(query.toLowerCase());
        return checkTitle || checkPark;
    }).map((hike) => {
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
        <>
        
        <form className="search-options">
				<input
					value={query}
                    className="search-bar"
					placeholder="search"
					onChange={(e) => setQuery(e.target.value)}/>
				<button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
			</form>
        <div className="hike-list">
            { hikes.length === 0 && <p>No hikes found. Please search again.</p>}
            { hikes }
            
        </div>
        </>
    );
}

export default HikeList;
