import React, { useState } from 'react';
import { Select } from 'antd';

const OPTIONS = ['TanTa', 'ElMahalla', 'Cairo', 'Alex'];

export default function Search() {
    const [selectedItems, setSelectedItems] = useState([]);

    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

    return (
        <Select
            placeholder="What is Your Area ?"
            clearIcon={true}
            value={selectedItems}
            onChange={setSelectedItems}
            style={{ width: '100%', boxShadow: 0, }}
            options={filteredOptions.map((item) => ({
                value: item,
                label: item,
            }))}
        />
    );
};



