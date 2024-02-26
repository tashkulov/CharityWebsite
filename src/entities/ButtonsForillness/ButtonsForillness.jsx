import React from 'react';
import UsefullButtonForLink from "../../shared/ui/Button/UsefullButtonForLink.jsx";

const ButtonsForillness = () => {
    return (
        <div style={{
            display: "flex",
            margin: "0 auto",
            justifyContent: "center",
            gap: "10px",
        }}>
            <UsefullButtonForLink to={'/Cardiology'} text={"Кардиология"}></UsefullButtonForLink>
            <UsefullButtonForLink to={'/DeformationsOfSystem'} text={"Деформации Системы"}></UsefullButtonForLink>
            <UsefullButtonForLink to={'/Dota2'} text={"Dota2"}></UsefullButtonForLink>
            <UsefullButtonForLink to={'/GenomicProfiling'} text={"Геномное профилирование"}></UsefullButtonForLink>
            <UsefullButtonForLink to={'/SpinalDeformity'} text={"Деформация позвоночника"}></UsefullButtonForLink>
            <UsefullButtonForLink to={'/SurgicalTreatment'} text={"Хирургическое лечение    "}></UsefullButtonForLink>
            <UsefullButtonForLink to={'/TargetedTherapy'} text={"Таргетная терапия    "}></UsefullButtonForLink>
        </div>
    );
};

export default ButtonsForillness;