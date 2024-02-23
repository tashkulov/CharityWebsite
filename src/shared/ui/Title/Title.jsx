import React from 'react';
import { FaHandHoldingMedical } from "react-icons/fa6";
import "./assets/styles/style.css"
import {Link} from "react-router-dom";
const Title = () => {
    return (
        <div className="title-container">

                <FaHandHoldingMedical size={"50px"} className="icon" />
                <h3 className="title-text"><strong>ЛИНИЯ <br/>ЖИЗНИ</strong></h3>

        </div>
    );
};

export default Title;
