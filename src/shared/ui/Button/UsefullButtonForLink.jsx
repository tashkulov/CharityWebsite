import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
const UsefullButtonForLink = ({ to, text }) => {
    return (
        <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button variant="contained"><Link  style={{textDecoration:"none",color:"white"}} to={to} className="useful-button">
                {text}
            </Link></Button>

        </ButtonGroup>
    );
};

export default UsefullButtonForLink;
