import React from 'react';
import './MyButton.css';

interface MyButtonProps {
    text: string;
    onClick?: () => void;
    variant?: 'primary' | 'success' | 'danger';
    fullWidth?: boolean;
    type?: 'button' | 'submit';
}

const MyButton: React.FC<MyButtonProps> =({
    text, onClick, variant = 'primary', type = 'button', fullWidth = false
}) => {
    return (
        <button
            type={type}
            className={`my-btn btn-${variant} ${fullWidth ? 'btn-block' : ''}`}
            onClick={onClick}
        >
        {text}
        </button>
    );
};

export default MyButton;