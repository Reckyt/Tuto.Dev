import React from 'react';

import './Input.css';

function Input({
    type,
    name,
    classNameInput,
    value,
    required,
    placeholder,
    nombreCaractereMax,
}) {
    return (
        <input
            type={type}
            id={name}
            className={`${
                value || 0 === value ? 'filled' : ''
            } ${classNameInput}`}
            name={name}
            value={value}
            required={required}
            maxLength={nombreCaractereMax}
            placeholder={placeholder}
        />
    );
}

export default Input;