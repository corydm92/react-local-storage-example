import React from 'react';

const GridCell = (props) => {
    return (
        <td id={props.id}>{props.children}</td>
    );
};

export default GridCell;