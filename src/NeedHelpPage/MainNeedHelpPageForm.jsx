import React, {useState} from 'react';
import NeedHelpPage from "./MultipleStepForm/NeedHelpPage.jsx";
import axios from "axios";
import UsefullButtonForLink from "./shared/ui/UsefullButtonForLink.jsx";
import {Link} from "react-router-dom";



const MainNeedHelpPageForm = () => {
    // const neededOptions = [
    //     { value: 'surgicalTreatment', label: 'Хирургическое лечение' },
    //     { value: 'targetedTherapy', label: 'Таргетная терапия' },
    //     { value: 'genomicProfiling', label: 'Геномное профилирование' }
    // ];
    //
    // const diagnosisOptions = [
    //     { value: 'Cardiology', label: 'Кардилогия' },
    //     { value: 'SpinalDeformity', label: 'Деформация позвоночника' },
    //     { value: 'Dota2', label: 'Дота 2' },
    //     { value: 'DeformationsOfSystem', label: 'Деформации костно-мышечной системы' }
    // ];



    return (
        <div>

            <Link to={"/MainWantToHelp"}>to help page</Link>
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
        </div>
    );
};

export default MainNeedHelpPageForm;