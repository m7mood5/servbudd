import React, { useState } from 'react';
import { Select } from 'antd';

const SERVICES = ['Renovation', 'Roofing', 'Sanitary', 'Sewerang']

export default function SearchP() {
    const [selectedItems, setSelectedItems] = useState([]);

    const filteredServices = SERVICES.filter((o) => !selectedItems.includes(o));

    return (
        <Select
            placeholder="What's Can You Do?"
            clearIcon={true}
            value={selectedItems}
            onChange={setSelectedItems}
            style={{ width: '100%', boxShadow: 0, }}
            options={filteredServices.map((item) => ({
                value: item,
                label: item,
            }))}
        />
    );
};