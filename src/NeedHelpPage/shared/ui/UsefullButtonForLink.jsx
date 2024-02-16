import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

const UsefullButtonForLink = ({ to, text }) => {
    return (
        <div className="button-container">

            <Link to={to} className="useful-button">
                {text}
            </Link>
        </div>
    );
};

export default UsefullButtonForLink;
