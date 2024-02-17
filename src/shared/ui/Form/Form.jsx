import { useState } from "react";
import "./style.css";

function Form() {
    const [formData, setFormData] = useState({
        lastName: "",
        firstName: "",
        middleName: "",
        birthDate: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Обработка данных формы
        console.log(formData);
    };

    return (
        <form className="child-application-form" onSubmit={handleSubmit}>
            <h1 className="form-title">Заявка</h1>
            <hr/>
            <div className="form-section">
                <h3>Данные ребенка</h3>
                <div className="form-field">
                    <label htmlFor="lastName">Фамилия</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="firstName">Имя</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="middleName">Отчество</label>
                    <input
                        type="text"
                        id="middleName"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="birthDate">Дата рождения</label>
                    <input
                        type="date"
                        id="birthDate"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
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
