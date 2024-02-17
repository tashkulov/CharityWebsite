import React, {useEffect, useState} from "react";
import axios from "axios";

const SurgicalTreatment=()=>{

    const [userIll, setUserIll] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/name')
            .then(response => {
                const users = response.data.filter(user => user.needed === "surgicalTreatment");
                setUserIll(users);
            })
            .catch(error => {
                console.error('Ошибка при получении пользователей:', error);
            });
    }, []);

    return (
        <div>
            <h1>Пользователи с диагнозом "Хирургическое лечение"</h1>
            <ul>
                {userIll.map(user => (
                    <li key={user.id}>
                        {user.firstName} {user.lastName} (Age: {user.age})
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default SurgicalTreatment