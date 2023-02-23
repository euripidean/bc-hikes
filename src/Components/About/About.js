import React from "react";
import "./About.css";

const About = () => {
    return (
        <section className="about">
            <h1>About Hike BC</h1>
            <p>Hike BC is a website that allows you to search for hikes in British Columbia. You can search by region, difficulty, and length. You can also search by tags, such as "waterfall" or "lake".</p>
            <p>Each hike has a description, a map, and a list of tags. You can also see the length of the hike, the difficulty, and the elevation gain.</p>
            <p>Each hike also has a list of photos. You can click on a photo to see a larger version.</p>
            <p>Click on the "Hikes" link in the header to see a list of hikes. Click on a hike to see more details.</p>
        </section>
    );
}

export default About;
