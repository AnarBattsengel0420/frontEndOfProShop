import React, { useState } from 'react';
import TableComp from 'components/table/TableComp';
import { CAPACITY_COLUMNS, CAPACITY_SAMPLES, CONTRACTED_COMPANY, CONTRACTED_COMPANIES, CUSTOMER_ACCOUNTING_COL, CUSTOMER_ACCOUNTING_DATA, TURN_OFF_TICKET_COLUMNS, TURN_OFF_TICKET_DATA } from './sample';
import { Radio } from 'antd';

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
  { label: "харилцагч компани", value: "customer-company" },
  { label: "Нэмэлт хураамж тохиргоо", value: "additional-fee-settings" },
  { label: "Харилцагчдын дансны тооцоо", value: "customer-accounting" },
  { label: "Э/Х асалбар хүчингүй болгох", value: "invalid-sector" },
]; // Define options for Segmented

const segmentData = {
  "customer-company": {
    columns: CONTRACTED_COMPANIES,
    data: CONTRACTED_COMPANY,
  },
  "additional-fee-settings": {
    columns: CAPACITY_COLUMNS, // Define columns for this segment
    data: CAPACITY_SAMPLES, // Define data for this segment
  },
  "customer-accounting": {
    columns: CUSTOMER_ACCOUNTING_COL, // Define columns for this segment
    data: CUSTOMER_ACCOUNTING_DATA, // Define data for this segment
  },
  "invalid-sector": {
    columns: TURN_OFF_TICKET_COLUMNS, // Define columns for this segment
    data: TURN_OFF_TICKET_DATA, // Define data for this segment
  },
};

export default function Lavlah() {
  const [activeSegment, setActiveSegment] = useState<string>("customer-company"); // Manage selected value

  const handleSegmentChange = (e: any) => {
    setActiveSegment(e.target.value); // Update activeSegment on change
  };

  const { columns, data } = segmentData[activeSegment]; // Retrieve columns and data based on active segment

  return (
    <div>
      {/* Segment Selector */}
      <div className="my-4">
        <Radio.Group
          value={activeSegment}
          onChange={handleSegmentChange}
          buttonStyle="solid"
        >
          {Segment_Option.map((option) => (
            <Radio.Button value={option.value} key={option.value}>
              {option.label}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>

      <TableComp
        columns={columns}
        dataSource={data}
        productNum={data.length}
        options={Segment_Option}
        defaultValue={Segment_Option[0].value}
        showSelectBar={false}
      />
    </div>
  );
}
