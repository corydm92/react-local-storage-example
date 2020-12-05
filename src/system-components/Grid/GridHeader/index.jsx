import React from 'react';
import GridRow from '../GridRow';

const GridHeader = (props) => {

    let {headers = [], visibleColumns} = {...props} 

    let outArray = []

    for (let value of headers) {
        if (visibleColumns && visibleColumns[value]) {
            outArray.push(
                <th key={`header-${value}`} id={`header-${value}`}>
                    {value}
                </th>
            );
        }
    }
    
    return <thead id='table-header'><GridRow id={`row-1`}>{outArray}</GridRow></thead>
};

export default GridHeader;