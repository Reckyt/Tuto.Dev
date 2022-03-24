import React from 'react';

import './ModalComponent.css';

export default function ModalComponent({ div, css, handleModal }) {
    return (
        <div className="modal">
            <textarea rows="4" readOnly>
                {div}
            </textarea>
            <textarea rows="20" readOnly>
                {css}
            </textarea>
            <p onClick={() => handleModal(false)}>close</p>
        </div>
    );
}
