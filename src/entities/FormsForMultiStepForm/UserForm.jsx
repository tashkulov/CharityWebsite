import React, { useState } from 'react';
import FormWrapper from "./FormWrapper.jsx";

export const ChildForm = ({ firstName, lastName, age, updateFields, image }) => {
    const [imageUrl, setImageUrl] = useState(image || ''); // Если изначально есть изображение, установите его ссылку

    const onImageUrlChange = (e) => {
        const url = e.target.value;
        setImageUrl(url);
        updateFields({ image: url }); // Обновляем ссылку на изображение в родительском компоненте
    };

    return (
        <div>
            <FormWrapper title={'Данные ребенка'}>
                <label>Имя</label>
                <input autoFocus required type="text" value={firstName} onChange={e => updateFields({ firstName: e.target.value })} />
                <label>Фамилия</label>
                <input autoFocus required type="text" value={lastName} onChange={e => updateFields({ lastName: e.target.value })} />
                <label>Дата рождения</label>
                <input required min={1} type="number" value={age} onChange={e => updateFields({ age: e.target.value })} />
                <label>Ссылка на изображение</label>
                <input type="text" value={imageUrl} onChange={onImageUrlChange} />

                {imageUrl && (
                    <div>
                        <img src={imageUrl} alt="Child" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                    </div>
                )}
            </FormWrapper>
        </div>
    );
};

export default ChildForm;
