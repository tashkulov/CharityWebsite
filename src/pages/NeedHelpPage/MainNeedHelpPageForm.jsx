import React, {useState} from 'react';
import NeedHelpPage from "../../features/MultipleStepForm/NeedHelpPage.jsx";
import UsefullButtonForLink from "../../shared/ui/Button/UsefullButtonForLink.jsx";
import {Link} from "react-router-dom";
import NavBarForAllSite from "../../entities/NavBar/NavBarForAllSite.jsx";
import {WantToHelpBlock} from "../../features/WantToHelpBlock/index.js";



const MainNeedHelpPageForm = () => {




    return (
        <div>
            <NavBarForAllSite/>


            <h1>This is Header</h1>
            <h2>Заявка на получение помощи</h2>
            <h5>Пожалуйста, ознакомьтесь с полным списком документов, необходимых для обращения за помощью, и аккуратно
                подготовьте весь <br/>пакет. Отслеживайте почтовое отправление, высылая документы заказным письмом с
                простым уведомлением.</h5>
            <NeedHelpPage/>
            <a href="files/Заявление.doc" download>Скачать файл</a>
            <a href="files/Инструкция%20для%20заполнения%20заявления.doc" download>Скачать файл</a>

        {/*        {choto.map(e=>e){*/}


        {/*        <button><Link to=`/sickness/${e.id}` onclick={*/}
        {/*            функция которая перекидывает название диагноза в комнонент*/}
        {/*        }>{e.diagnosis}</Link><button>*/}

        {/* название пропс*/}
        {/*наз*/}
        {/*    }}*/}
<br/>
<br/>
            <WantToHelpBlock/>

        </div>
    );
};

export default MainNeedHelpPageForm;