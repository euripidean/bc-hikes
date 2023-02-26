import React from "react";
import "./Footer.css";

const Footer = () => {
    const date = new Date();
    return (
        <>
        <footer className="footer">
        <p>Jane Harrison, {`${date.toLocaleDateString("en-CA", {year: 'numeric'})}`}.</p>
        <div className="footer-links">
        <a href="/about">About</a>
        <a href="mailto:jane.harrison@dominican.students.edu">Contact</a>
        <a href="github.com/euripidean">Github</a>
        </div>
        <p className="disclaimer">This website is solely for educational purposes for a React Native school project. All data pulled from the excellent <a href="https://www.alltrails.com/" target="_blank" rel="noreferrer">AllTrails.com</a></p>
        </footer>
        </>
    );
    }

export default Footer;
