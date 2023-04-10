import React, { useState } from 'react';
import { Select } from 'antd';

const OPTIONS = ['TanTa', 'ElMahalla', 'Cairo', 'Alex'];

function Search() {
    const [selectedItems, setSelectedItems] = useState([]) ;

    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

    return (
        <Select
            placeholder="choose city"
            clearIcon={true}
            value={selectedItems}
            onChange={setSelectedItems}
            style={{ width: '78%',boxShadow:0, }}
            options={filteredOptions.map((item) => ({
                value: item,
                label: item,
            }))}
        />
    );
};

export default Search;