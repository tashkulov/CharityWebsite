import React from 'react';
import FormWrapper from "./FormWrapper.jsx";

const TreatmentForm = ({needed,diagnosis,needMoney,updateFields}) => {
    return (
        <div>
            <FormWrapper title={"Требуемое лечение"}>

                <label>Требуется</label>
                <select autoFocus required value={needed} onChange={e => updateFields({needed: e.target.value})}>
                    <option value="">Выберите</option>
                    <option value="surgicalTreatment">хирургическое лечение</option>
                    <option value="targetedTherapy">таргетная терапия</option>
                    <option value="genomicProfiling">геномное профилирование</option>
                </select>

                <label>Диагноз</label>
                <select autoFocus required value={diagnosis} onChange={e => updateFields({diagnosis: e.target.value})}>
                    <option value="">Выберите</option>
                    <option value="Cardiology">Кардилогия</option>
                    <option value="SpinalDeformity">Деформация позвоночника</option>
                    <option value="Dota2">Дота 2</option>
                    <option value="DeformationsOfSystem">Деформации костно-мышечной системы</option>
                </select>

                <label>Сколько надо</label>
                <input autoFocus required type="number" value={needMoney}
                       onChange={e => updateFields({needMoney: e.target.value})}/>
            </FormWrapper>
        </div>
    );
};

export default TreatmentForm;