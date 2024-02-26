import React, { useState } from 'react';
import ShowHelpedChildren from "../../../features/ShowHelpedChildren/ShowHelpedChildren.jsx";
import ShowChildrenWhoNeedHelp from "../../../features/ShowChildrenWhoNeedHelp/ShowChildrenWhoNeedHelp.jsx";
import Button from "@mui/material/Button";
import NavBarForAllSite from "../../../entities/NavBar/NavBarForAllSite.jsx";
import {WantToHelpBlock} from "../../../features/WantToHelpBlock/index.js";

const MainChildrenPage = () => {
    const [showHelpedChildren, setShowHelpedChildren] = useState(false);
    const [showChildrenWhoNeedHelp, setShowChildrenWhoNeedHelp] = useState(false);

    const handleShowHelpedChildrenClick = () => {
        setShowHelpedChildren(true);
        setShowChildrenWhoNeedHelp(false);
    };

    const handleShowChildrenWhoNeedHelpClick = () => {
        setShowChildrenWhoNeedHelp(true);
        setShowHelpedChildren(false);
    };

    return (
        <div>
            <NavBarForAllSite/>
            <h2>Дети, которым уже помогли</h2>
            <Button variant={"contained"} onClick={handleShowHelpedChildrenClick} >Показать детей</Button>

            {showHelpedChildren && <ShowHelpedChildren />}

            <h2>Дети, которым нужна помощь</h2>
            <Button variant={"contained"} onClick={handleShowChildrenWhoNeedHelpClick} >Показать детей</Button>

            {showChildrenWhoNeedHelp && <ShowChildrenWhoNeedHelp />}
            <br/>
            <br/>
            <WantToHelpBlock/>

        </div>
    );
};

export default MainChildrenPage;
