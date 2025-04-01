import React, { useState } from "react";
import { Table, DatePicker, Button, Input, Select } from "antd";
import type { TableColumnsType } from "antd";
import { SearchOutlined, RedoOutlined } from "@ant-design/icons";
import { createStyles } from "antd-style";
import locale from "antd/es/date-picker/locale/en_US";

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
            align-children: center;
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
  options: { label: string; value: string }[];
  defaultValue: string;
  showSearchBar?: boolean;
  showSelectBar?: boolean;
  showRefreshButton?: boolean;
  showSortButton?: boolean;
}

const TableComp: React.FC<TableCompProps> = ({
  columns,
  dataSource,
  productNum,
  options,
  defaultValue,
  showSearchBar = true,
  showSelectBar = true,
  showRefreshButton = true,
  showSortButton = true,
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
        <div className="flex justify-between mx-2 children-center my-4 h-10">
          <div className="flex children-center">
            <h2 className="font-bold">Нийт ({productNum})</h2>
            <RangePicker
              className="ml-4"
              locale={{
                ...locale,
                lang: {
                  ...locale.lang,
                  rangePlaceholder: ["Эхлэх Өдөр", "Дуусах Өдөр"],
                },
              }}
            />
          </div>
          <div className="flex children-center w-50">
            {/* */}
            {showSortButton && (
              <Button
                className="mx-2 px-2"
                style={{ width: "50px", height: "30px" }}
                onClick={handleRefresh}
              >
                sort
              </Button>
            )}
            {showSearchBar && (
              <Input
                placeholder="Хайх чингэлэгийн дугаар"
                prefix={<SearchOutlined />}
                value={searchText}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-30"
              />
            )}
            {showSelectBar && (
              <Select
                className="w-52"
                showSearch
                placeholder="Бүгд"
                optionFilterProp="children"
                options={options}
              />
            )}
            {showRefreshButton && (
              <Button
                className="ml-2 bg-white w-10"
                icon={<RedoOutlined />}
                onClick={handleRefresh}
                style={{ width: "40px", height: "30px" }}
              />
            )}
          </div>
        </div>
        <Table<DataType>
          columns={columns}
          dataSource={dataSource}
          size="small"
          scroll={{ x: "max-content" }}
        />
      </div>
    </div>
  );
};

export default TableComp;
