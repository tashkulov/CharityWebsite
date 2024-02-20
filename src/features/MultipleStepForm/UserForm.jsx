import React from 'react';
import FormWrapper from "./FormWrapper.jsx";

export const ChildForm = ({firstName,lastName,age,updateFields }) => {
    return (
        <div >
            <FormWrapper title={'Данные ребенка'}>
                <label>Имя</label>
                <input autoFocus required type={"text"} value={firstName}
                       onChange={e=>updateFields({firstName:e.target.value})}/>
                <label>Фамилия</label>
                <input autoFocus required type={"text"} value={lastName}
                       onChange={e=>updateFields({
                           lastName:e.target.value})}/>

                <label>Дата роджения</label>
                <input  required min={1} type={"number"} value={age}
                        onChange={e=>updateFields({age:e.target.value})}/>

            </FormWrapper>
        </div>
    );
};

export default ChildForm;