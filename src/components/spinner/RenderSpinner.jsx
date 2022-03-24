import React, { useState } from 'react';

import ButtonCloseModal from './ButtonCloseModal';
import ModalComponent from './ModalComponent';

export default function RenderSpinner({ codeData }) {
    const [modal, setModal] = useState(false);

    const handleModal = (value) => {
        setModal(value);
    };

    return (
        <div className="loader">
            {codeData.except1 ? (
                <div>
                    <div className={codeData.className}>
                        <div />
                    </div>
                    <ButtonCloseModal modal={modal} handleModal={handleModal} />
                    {modal && (
                        <ModalComponent
                            div={codeData.div}
                            css={codeData.css}
                            handleModal={handleModal}
                        />
                    )}
                </div>
            ) : (
                <div>
                    <div className={codeData.className}></div>
                    <ButtonCloseModal modal={modal} handleModal={handleModal} />
                    {modal && (
                        <ModalComponent
                            div={codeData.div}
                            css={codeData.css}
                            handleModal={handleModal}
                        />
                    )}
                </div>
            )}
        </div>
    );
}
