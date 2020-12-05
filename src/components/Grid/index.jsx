import React from 'react';
import { Grid, GridHeader, GridBody } from '../../system-components'

const GridComponent = (props) => {

    let { data, visibleColumns } = {...props}
    
    return (
        <div>
            <Grid>
                <GridHeader visibleColumns={visibleColumns} headers={Object.keys(data[0])}/>
                <GridBody visibleColumns={visibleColumns} data={data}/>
            </Grid>
        </div>
    );
};

export default GridComponent;