import React from 'react';
import GridRow from '../GridRow'
import GridCell from '../GridCell'


const GridBody = (props) => {
    let { data = [], visibleColumns } = {...props}
    return (
        <tbody>
            {data.map(item => {
                let keys = Object.keys(item)

                let outArray = [];

                for (let key of keys) {
                    if (visibleColumns[key]) {
                        outArray.push(<GridCell key={`${key}-${item.id}`} id={`${key}-${item.id}`}>{item[key]}</GridCell>)
                    }
                }
                return <GridRow key={`row-${item.id}`} id={`row-${item.id}`}>{outArray}</GridRow>
            })}
        </tbody>
    );
};

export default GridBody;