import React from 'react';

import Execution from '../../components/javascript/operators/Execution';
import Scope from '../../components/javascript/operators/Scope';
import Synchrone from '../../components/javascript/operators/Synchrone';
import Associativity from '../../components/javascript/operators/Associativity';
import Coercion from '../../components/javascript/operators/Coercion';
import DefaultValue from '../../components/javascript/operators/DefaultValue';

import { javascriptData } from '../../assets/data/javascriptData';

import './Javascript.css';

export default function Javascript() {
    return (
        <div className="container javascript">
            <h1>Javascript</h1>
            <Execution javascriptData={javascriptData} />
            <Scope javascriptData={javascriptData} />
            <Synchrone javascriptData={javascriptData} />
            <Associativity javascriptData={javascriptData} />
            <Coercion javascriptData={javascriptData} />
            <DefaultValue javascriptData={javascriptData} />
        </div>
    );
}
