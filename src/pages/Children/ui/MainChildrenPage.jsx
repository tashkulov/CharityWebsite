import React, {useEffect, useState} from 'react';
import ShowHelpedChildren from "../../../features/ShowHelpedChildren/ShowHelpedChildren.jsx";
import Button from "@mui/material/Button";
import NavBarForAllSite from "../../../entities/NavBar/NavBarForAllSite.jsx";
import {WantToHelpBlock} from "../../../features/WantToHelpBlock/index.js";
import {ShowAllHelpedChildren, ShowAllNeedHelpChildren} from "../../../app/store/UserThunks.js";
import {useDispatch} from "react-redux";

const MainChildrenPage = () => {
    const dispatch=useDispatch();
    const [showHelpedChildren, setShowHelpedChildren] = useState(false);
    const [showChildrenWhoNeedHelp, setShowChildrenWhoNeedHelp] = useState(false);
    const [childrenNeeded, setChildrenNeeded] = useState([]);
    const [childrenHelped, setChildrenHelped] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {

                const Needed =await  dispatch(ShowAllNeedHelpChildren())
                setChildrenNeeded(Needed.payload)
                const Helped=await  dispatch(ShowAllHelpedChildren())
                setChildrenHelped(Helped.payload)
                console.log(childrenNeeded,childrenHelped)

                setLoading(false);

            } catch (error) {
                console.error('Ошибка при загрузке данных о детях:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [ dispatch]);
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

            {showHelpedChildren && <ShowHelpedChildren children={childrenHelped} />}

            <h2>Дети, которым нужна помощь</h2>
            <Button variant={"contained"} onClick={handleShowChildrenWhoNeedHelpClick} >Показать детей</Button>

            {showChildrenWhoNeedHelp && <ShowHelpedChildren  children={childrenNeeded}/>}
            <br/>
            <br/>
            <WantToHelpBlock/>

        </div>
    );
};

export default MainChildrenPage;
