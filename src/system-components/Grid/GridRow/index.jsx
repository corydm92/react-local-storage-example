import React from 'react';

const GridRow = (props) => {
    return (
        <tr id={props.id}>{props.children}</tr>
    );
};

export default GridRow;