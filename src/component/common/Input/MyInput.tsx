import React from 'react';
import './MyInput.css';

interface MyInputProps{
    label?: string;
    type?: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyInput: React.FC<MyInputProps> = ({ label, type = 'text', value, onChange, placeholder }) => {
    return (
        <div className="my-input-container">
            {label && <label className="my-input-label">{label}</label>}
            <input
                className="my-input-field"
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default MyInput;