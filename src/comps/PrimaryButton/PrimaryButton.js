import React from 'react';
import './PrimaryButton.css'

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className="m-btn">
                <span className="m-btnspan">{children}</span>
            </button>
        </div>
    );
};

export default PrimaryButton;