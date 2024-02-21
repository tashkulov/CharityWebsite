import React, {useState} from 'react';
import NeedHelpPage from "../../features/MultipleStepForm/NeedHelpPage.jsx";
import UsefullButtonForLink from "../../shared/ui/Button/UsefullButtonForLink.jsx";
import {Link} from "react-router-dom";



const MainNeedHelpPageForm = () => {




    return (
        <div>

            <Link to={"/MainWantToHelp"}>to help page</Link>
            <br/>
            <Link to={"/MainChildrenPage"}>children</Link>
            <h1>This is Header</h1>
            <h2>Заявка на получение помощи</h2>
            <h5>Пожалуйста, ознакомьтесь с полным списком документов, необходимых для обращения за помощью, и аккуратно
                подготовьте весь <br/>пакет. Отслеживайте почтовое отправление, высылая документы заказным письмом с
                простым уведомлением.</h5>
            <NeedHelpPage/>
            <a href="files/Заявление.doc" download>Скачать файл</a>
            <a href="files/Инструкция%20для%20заполнения%20заявления.doc" download>Скачать файл</a>

                <UsefullButtonForLink to={'/Cardiology'} text={"Кардиология"}></UsefullButtonForLink>
                <UsefullButtonForLink to={'/DeformationsOfSystem'} text={"DeformationsOfSystem"}></UsefullButtonForLink>
                <UsefullButtonForLink to={'/Dota2'} text={"Dota2"}></UsefullButtonForLink>
                <UsefullButtonForLink to={'/GenomicProfiling'} text={"GenomicProfiling"}></UsefullButtonForLink>
                <UsefullButtonForLink to={'/SpinalDeformity'} text={"SpinalDeformity"}></UsefullButtonForLink>
                <UsefullButtonForLink to={'/SurgicalTreatment'} text={"SurgicalTreatment    "}></UsefullButtonForLink>
                <UsefullButtonForLink to={'/MainChildrenPage/:name'} text={"SurgicalTreatment    "}></UsefullButtonForLink>
        {/*        {choto.map(e=>e){*/}


        {/*        <button><Link to=`/sickness/${e.id}` onclick={*/}
        {/*            функция которая перекидывает название диагноза в комнонент*/}
        {/*        }>{e.diagnosis}</Link><button>*/}

        {/* название пропс*/}
        {/*наз*/}
        {/*    }}*/}
        </div>
    );
};

export default MainNeedHelpPageForm;