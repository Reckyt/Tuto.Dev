import React, { useState } from 'react';
import Spinner from '../../components/spinner/Spinner';
import RenderSpinner from '../../components/spinner/RenderSpinner';

import { codeDatas } from '../../assets/data/cssData';

import './HomeSpinner.css';
import '../../css/CSSLoader/Loader1.css';
import '../../css/CSSLoader/Loader2.css';
import '../../css/CSSLoader/Loader3.css';
import '../../css/CSSLoader/Loader4.css';
import '../../css/CSSLoader/Loader5.css';

export default function HomeSpinner() {
    const [delay, setDelay] = useState(false);

    setTimeout(() => {
        setDelay(true);
    }, 500);

    if (!delay) {
        return <Spinner />;
    }

    return (
        <div className="container-loader">
            {codeDatas.map((codeData) => {
                return <RenderSpinner codeData={codeData} />;
            })}
        </div>
    );
}
