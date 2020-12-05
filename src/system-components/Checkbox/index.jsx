import React from 'react';

const Checkbox = (props) => {

    let { label, value, onChange } = props;
    return (
        <>
            <input type='checkbox' value={value} checked={value} onChange={onChange}/>
            <label>{label}</label>
        </>
    );
};

export default Checkbox;