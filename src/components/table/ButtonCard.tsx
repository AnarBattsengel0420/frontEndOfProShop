import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Card } from 'antd';
import CargoCard from './CargoCard';

const ButtonCard: React.FC = () => {
    // State to keep track of the selected radio button value
    const [selectedValue, setSelectedValue] = useState('Option-2');

    // Event handler for radio button change
    const handleRadioChange = ({ target: { value } }: RadioChangeEvent) => {
        setSelectedValue(value);
    };


    return (
        <>
            <Radio.Group className="py-4" onChange={handleRadioChange} value={selectedValue} optionType="button">
                <Radio.Button value="Option-1">Ачаа дөхөлт</Radio.Button>
                <Radio.Button value="Option-2">Үлдэгдэл</Radio.Button>
                <Radio.Button value="Option-3">Талбайд ирснээр</Radio.Button>
            </Radio.Group>
            {selectedValue === 'Option-1' && (
                <CargoCard />
            )}
        </>
    );
};

export default ButtonCard;