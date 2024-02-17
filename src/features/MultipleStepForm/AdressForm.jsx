import React from 'react';
import FormWrapper from "./FormWrapper.jsx";

export const   AddressForm = ({street,city,state,zip,updateFields}) => {
    return (
        <div>
            <FormWrapper title={"Место жительства"}>
                <label>Страна</label>
                <input autoFocus required type={"text"} value={state}
                       onChange={e => updateFields({state: e.target.value})}/>
                <label>Город</label>
                <input autoFocus required type={"text"} value={city}
                       onChange={e => updateFields({city: e.target.value})}/>
                <label>Адресс</label>
                <input required type={"text"} value={street}
                       onChange={e => updateFields({street: e.target.value})}/>
                <label>Zip</label>
                <input min={1} type={"text"} value={zip}
                       onChange={e => updateFields({zip: e.target.value})}/>
            </FormWrapper>
        </div>
    );
};

export default AddressForm;