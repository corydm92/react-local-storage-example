import React, {useState, useEffect} from 'react';
import {Container, Checkbox} from '../../system-components'

const CheckboxToolbar = props => {

    let { visibleColumns, updateStorage } = {...props}

    let [checkboxState, setCheckboxState] = useState(visibleColumns)

    useEffect(() => {
        setCheckboxState(visibleColumns)
    }, [visibleColumns])

    let keys = Object.keys(visibleColumns);

    const handleChange = (key) => {
        setCheckboxState({...checkboxState, [key]: !checkboxState[key]})
    }

    let checkboxArray = keys.map(key => {
        return <Checkbox key={key} label={key} value={checkboxState[key]} onChange={() => handleChange(key)}/>
    })

    return (
        <Container>
            {checkboxArray}
            <button onClick={() => updateStorage(checkboxState)}>Submit</button>
        </Container>
    );
};


export default CheckboxToolbar;