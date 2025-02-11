import React from 'react';
import { Table, DatePicker } from 'antd';
import type { TableColumnsType } from 'antd';
import { createStyles } from 'antd-style';
import locale from 'antd/es/date-picker/locale/en_US';
import { Button, Input } from 'antd';
import { SearchOutlined, RedoOutlined } from '@ant-design/icons';

const handleSearch = (value: string) => {
    console.log('Search:', value);
};

const handleRefresh = () => {
    console.log('Refresh');
};

const { RangePicker } = DatePicker;

const useStyle = createStyles(({ css, token }) => {
    const { antCls } = token;
    return {
        customTable: css`
            ${antCls}-table {
                ${antCls}-table-container {
                    ${antCls}-table-body,
                    ${antCls}-table-content {
                        scrollbar-width: thin;
                        scrollbar-color: #eaeaea transparent;
                        scrollbar-gutter: stable;
                    }
                }
                ${antCls}-table-row {
                    &.ant-table-row-level-0 {
                        border-bottom: none;
                    }
                }
            }
        `,
    };
});

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

const columns: TableColumnsType<DataType> = [
    {
        title: '',
        children: [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                width: 100,
                fixed: 'left',
                filters: [
                    {
                        text: 'Joe',
                        value: 'Joe',
                    },
                    {
                        text: 'John',
                        value: 'John',
                    },
                ],
                onFilter: (value, record) => record.name.indexOf(value as string) === 0,
            },
        ],
    },
    {
        title: 'Other',
        children: [
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age1',
                width: 150,
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: 'Age2',
                dataIndex: 'age',
                key: 'age2',
                width: 150,
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age3',
                width: 150,
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age4',
                width: 150,
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age5',
                width: 150,
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age6',
                width: 150,
                sorter: (a, b) => a.age - b.age,
            },
        ],
    },
    {
        title: 'Company',
        children: [
            {
                title: 'Company Address',
                dataIndex: 'companyAddress',
                key: 'companyAddress',
                width: 200,
            },
            {
                title: 'Company Name',
                dataIndex: 'companyName',
                key: 'companyName',
            },
        ],
    },
    {
        title: '',
        children: [
            {
                title: 'Gender',
                dataIndex: 'gender',
                key: 'gender',
                width: 80,
                fixed: 'right',
            },
        ],
    },
];

const dataSource = Array.from({ length: 100 }).map<DataType>((_, i) => ({
    key: i,
    name: 'John Brown',
    age: i + 1,
    building: 'C',
    number: 2035,
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    gender: 'M',
}));

const productNum = 1900;

const TableComp: React.FC = () => {
    const { styles } = useStyle();
    return (
        <div className="bg-white rounded-lg py-4 px-4">
            <div className="flex justify-between mx-2 items-center my-4 h-10">
                <div className='flex items-center'>
                    <h2 className="font-bold">Нийт ({productNum})</h2>
                    <RangePicker 
                        className="ml-4" 
                        locale={{
                            ...locale,
                            lang: {
                                ...locale.lang,
                                rangePlaceholder: ['Эхлэх Өдөр', 'Дуусах Өдөр'],
                            },
                        }} 
                    />
                </div>
                <div className="flex items-center w-auto">
                    <Button 
                        icon={
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.75 7C22.75 7.41421 22.4142 7.75 22 7.75L2 7.75C1.58579 7.75 1.25 7.41421 1.25 7C1.25 6.58579 1.58579 6.25 2 6.25L22 6.25C22.4142 6.25 22.75 6.58579 22.75 7Z" fill="#1C274C"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.75 12C19.75 12.4142 19.4142 12.75 19 12.75L5 12.75C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25L19 11.25C19.4142 11.25 19.75 11.5858 19.75 12Z" fill="#1C274C"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.75 17C16.75 17.4142 16.4142 17.75 16 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H16C16.4142 16.25 16.75 16.5858 16.75 17Z" fill="#1C274C"/>
                            </svg>
                        }
                        className=' mx-2 px-2'
                    />

                    <Input 
                        placeholder="Search" 
                        prefix={<SearchOutlined />} 
                        onChange={(e) => handleSearch(e.target.value)} 
                        className="flex-grow"
                    />
                    <Button 
                        className="ml-2 bg-white" 
                        icon={<RedoOutlined />} 
                        onClick={handleRefresh} 
                    />
                </div>
            </div>
            <Table<DataType>
                className={styles.customTable}
                columns={columns}
                dataSource={dataSource}
                bordered
                size="middle"
                scroll={{ x: 'max-content', y: 47 * 5 }}
            />
        </div>
    );
};

export default TableComp;
