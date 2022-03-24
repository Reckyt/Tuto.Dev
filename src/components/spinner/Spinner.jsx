import React from 'react';

import './Spinner.css';

const Spinner = ({ children }) => (
    <div className="spinner">
        <div />
        {children && <p>{children}</p>}
    </div>
);

export default Spinner;
