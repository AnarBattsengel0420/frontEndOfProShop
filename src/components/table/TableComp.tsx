import React, { useState } from 'react';
import { Table, DatePicker, Button, Input, Select } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, RedoOutlined } from '@ant-design/icons';
import { createStyles } from 'antd-style';
import locale from 'antd/es/date-picker/locale/en_US';
import sortIcon from '/Users/myagmarsurennyamkhuu/2nd-semstr/ANTD_REACT_BOILERPLATE/src/assets/icons/sort.svg';  // Import your SVG file
import { SVG } from 'untitledui-js-base/dist/template';

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
                        display: inline-flex;
                        align-items: center;
                        width: 100%;
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

interface TableCompProps {
    columns: TableColumnsType<DataType>;
    dataSource: DataType[];
    productNum: number;
    options: { label: string; value: string }[]; // Define options as an array of objects with `label` and `value`
    defaultValue: string; // Accept defaultValue as a prop
    showSearchBar?: boolean; // Add this prop to control search bar visibility
    showSelectBar?: boolean; // Add this prop to control select bar visibility
    showRefreshButton?: boolean; // Add this prop to control the refresh button visibility
    showSortButton?: boolean; // Add this prop to control the sort button visibility
}

const TableComp: React.FC<TableCompProps> = ({
    columns,
    dataSource,
    productNum,
    options,
    defaultValue,
    showSearchBar = true, // Default to true if not provided
    showSelectBar = true, // Default to true if not provided
    showRefreshButton = true, // Default to true if not provided
    showSortButton = true, // Default to true if not provided
}) => {
    const { styles } = useStyle();
    const [searchText, setSearchText] = useState("");

    const handleSearch = (value: string) => {
        setSearchText(value);
    };

    const handleRefresh = () => {
        setSearchText("");
    };

    return (
        <div>
            <div className="bg-white rounded-lg py-4 px-4">
                <div className="flex justify-between mx-2 items-center my-4 h-10">
                    <div className="flex items-center">
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
                    <div className="flex items-center w-50">
                        {/* Conditionally render the sort button */}
                        {showSortButton && (
                            <Button 
                                icon={<img src={sortIcon} alt="sort icon" />} // Using the imported SVG icon
                                className="mx-2 px-2"
                                style={{ width: '50px', height: '30px' }}
                                onClick={handleRefresh} // Use your appropriate sort function here
                            />
                        )}
                        {/* Conditionally render the search bar */}
                        {showSearchBar && (
                            <Input 
                                placeholder="Хайх чингэлэгийн дугаар"  
                                prefix={<SearchOutlined />} 
                                value={searchText}
                                onChange={(e) => handleSearch(e.target.value)} 
                                className="w-30"
                            />
                        )}
                        {/* Conditionally render the select bar */}
                        {showSelectBar && (
                            <Select 
                                className="w-52"
                                showSearch
                                placeholder="Бүгд"
                                optionFilterProp="children"
                                options={options}
                            />
                        )}
                        {/* Conditionally render the refresh button */}
                        {showRefreshButton && (
                            <Button 
                                className="ml-2 bg-white w-10" 
                                icon={<RedoOutlined />} 
                                onClick={handleRefresh} 
                                style={{ width: '40px', height: '30px' }}
                            />
                        )}
                    </div>
                </div>
                <Table<DataType>
                    columns={columns}
                    dataSource={dataSource}
                    size="small"
                    scroll={{ x: 'max-content' }}  // Increase horizontal scroll width
                />
            </div>
        </div>
    );
};

export default TableComp;
