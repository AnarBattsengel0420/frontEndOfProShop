import React, { useState } from 'react';
import TableComp from 'components/table/TableComp';
import { CAPACITY_COLUMNS, CAPACITY_SAMPLES } from './sample';
import { Radio, RadioChangeEvent } from 'antd';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  building: string;
  number: number;
  companyAddress: string;
  companyName: string;
  gender: string;
}

const Segment_Option = [
  { label: 'Ачаа дөхөлт', value: 'customer-company' },
  { label: 'Үлдэгдэл', value: 'additional-fee-settings' },
  { label: 'Талбайд ирсэнээр', value: 'customer-accounting' },
];

const segmentData: Record<string, { columns: any[]; data: DataType[] }> = {
  'customer-company': { columns: [], data: [] },
  'additional-fee-settings': { columns: CAPACITY_COLUMNS, data: CAPACITY_SAMPLES },
  'customer-accounting': { columns: [], data: [] },
};

export default function Lavlah() {
  const [activeSegment, setActiveSegment] = useState<string>('additional-fee-settings');

  const handleSegmentChange = (e: RadioChangeEvent) => {
    setActiveSegment(e.target.value);
  };

  const { columns, data } = segmentData[activeSegment];

  return (
    <div className="dashboard-container">
      <div className="my-4">
        <Radio.Group value={activeSegment} onChange={handleSegmentChange} buttonStyle="solid">
          {Segment_Option.map((option) => (
            <Radio.Button value={option.value} key={option.value}>
              {option.label}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>
      <div className="table-container">
        <TableComp columns={columns} dataSource={data} productNum={data.length} options={Segment_Option} />
      </div>
    </div>
  );
}
