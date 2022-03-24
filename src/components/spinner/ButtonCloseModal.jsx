import React from 'react';

import './ButtonCloseModal.css';

export default function ButtonCloseModal({ modal, handleModal }) {
    return (
        <div className="button-close">
            {modal ? (
                <p onClick={() => handleModal(false)}>close source</p>
            ) : (
                <p onClick={() => handleModal(true)}>view source</p>
            )}
        </div>
    );
}
