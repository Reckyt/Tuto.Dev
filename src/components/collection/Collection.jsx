import React from 'react';

const Collection = ({ title, children }) => (
    <div className="collection-item">
        {title ? <h3 className="collection-title">{title}</h3> : null}
        <div className="collection-item-inner">{children}</div>
    </div>
);

export default Collection;
