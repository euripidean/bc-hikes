import React from "react";
import "./Footer.css";

const Footer = () => {
    const date = new Date();
    return (
        <footer className="footer">
        <p>Jane Harrison, {`${date.toLocaleDateString("en-CA", {year: 'numeric'})}`}.
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="github.com/euripidean">Github</a></p>
        <p className="disclaimer">This website is solely for educational purposes for a React project. All data pulled from the excellent AllTrails.com</p>
        </footer>
    );
    }

export default Footer;
