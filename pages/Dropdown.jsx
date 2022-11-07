import Select from 'react-dropdown-select'

import React, { useState } from 'react';

function Dropdown({ onStatus }) {
    const [options, setOptions] = useState([
        { id: 1, Status: "Planned" },
        { id: 2, Status: "Ongoing" },
        { id: 3, Status: "Done" },

    ])



    const [selectedOptions, setSelectedOptions] = useState([])

    return (
        <>
            <div className='bg-white p-2 rounded-lg border-2 decoration-none' >
                <Select  options={options.map((item, index) => {
                    return { value: item.id, label: item.Status }
                })} values={selectedOptions}
                    onChange={(values) => { setSelectedOptions([...values]); onStatus(values) }} />
            </div>
        </>
    );
}

export default Dropdown;