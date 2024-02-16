import React, { useState, useEffect } from 'react';
import axios from "axios";
import {useMultiStepForm} from "./useMultiStepForm.js";
import ChildForm from "./UserForm.jsx";
import AddressForm from "./AdressForm.jsx";
import TreatmentForm from "./TreatmentForm.jsx";

const INITIAL_DATA = {
    firstName: "",
    lastName: "",
    age: 0,
    state: "",
    city: "",
    street: "",
    zip: "",
    needed: "",
    diagnosis: "",
    needMoney:0
}



function NeedHelpPage() {
    const [data, setData] = useState(INITIAL_DATA);

    function updateFields(fields) {
        setData(prev => {
            return { ...prev, ...fields };
        });
    }

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultiStepForm([
            <ChildForm {...data} updateFields={updateFields} />,
            <AddressForm {...data} updateFields={updateFields} />,
            <TreatmentForm {...data} updateFields={updateFields} />,
        ]);

    function onSubmit(e) {
        e.preventDefault();
        if (!isLastStep) return next();

        axios.post(`http://localhost:5000/name`, data)
            .then(response => {
                console.log("Data submitted successfully:", response.data);
                setData(INITIAL_DATA);
            })
            .catch(error => {
                console.error("Error submitting data:", error);
            });
    }




    return (
        <div
            style={{
                position: "relative",
                background: "white",
                border: "1px solid black",
                padding: "2rem",
                margin: "1rem",
                borderRadius: ".5rem",
                fontFamily: "Arial",
                maxWidth: "max-content",
            }}
        >
            <form onSubmit={onSubmit}>
                <div style={{position: "absolute", top: ".5rem", right: ".5rem"}}>
                    {currentStepIndex + 1} / {steps.length}
                </div>
                {step}
                <div
                    style={{
                        marginTop: "1rem",
                        display: "flex",
                        gap: ".5rem",
                        justifyContent: "flex-end",
                    }}
                >
                    {!isFirstStep && (
                        <button type="button" onClick={back}>
                            Back
                        </button>
                    )}
                    <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
                </div>
            </form>



        </div>


    );
}

export default NeedHelpPage;
