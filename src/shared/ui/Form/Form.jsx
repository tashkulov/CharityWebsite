import { useState } from "react";
import "./style.css";

function Form() {


    return (
        <form className="child-application-form" >
            <h1 className="form-title"></h1>
            <hr/>
            <div className="form-section">
                <h3>Данные ребенка</h3>
                <div className="form-field">
                    <label htmlFor="lastName"></label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="firstName"></label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="middleName"></label>
                    <input
                        type="text"
                        id="middleName"
                        name="middleName"
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="birthDate"> </label>
                    <input
                        type="date"
                        id="birthDate"
                        name="birthDate"
                        required
                    />
                </div>
            </div>
            <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                    Далее
                </button>
            </div>
        </form>
    );
}

export default Form;
