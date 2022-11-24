import React from 'react';
import './PrimaryButton.css'

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button class="m-btn">
                <span class="m-btnspan">{children}</span>
            </button>
        </div>
    );
};

export default PrimaryButton;