import React from 'react';
import NavBarForAllSite from "../../../entities/NavBar/NavBarForAllSite.jsx";
import ButtonsForillness from "../../../entities/ButtonsForillness/ButtonsForillness.jsx";
import {WantToHelpBlock} from "../../../features/WantToHelpBlock/index.js";

const MedicinePage = () => {
    return (
        <div >
            <NavBarForAllSite/>
            <h1>Медицинские программы</h1>
            <ButtonsForillness/>
            <br/>
            <br/>
            <WantToHelpBlock/>
        </div>

    );
};

export default MedicinePage;