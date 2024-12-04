import React from 'react';
import Select from 'react-select';

const customStyles = {
    control: (base) => ({
        ...base,
        height: 50,
        minHeight: 35,
    }),
};

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

const CustomSelect = ({ options, onChange, value }) => {
    return (
        <Select
            styles={customStyles}
            options={options}
            onChange={onChange}
            value={value}
        />
    );
};

export default CustomSelect;
