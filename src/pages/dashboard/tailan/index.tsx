import TableComp from 'components/table/TableComp'
import { CAPACITY_COLUMNS, CAPACITY_SAMPLES } from './sample'
import { Button } from 'antd';


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

export default function Tailan() {
  return (
    <>
      <Button className="h-10 my-4" style={{ color: '#1890FF', backgroundColor: '#E6F7FF' }}>
        <p>Э/Х орлогын тайлан</p>
      </Button>
      <TableComp
          columns={CAPACITY_COLUMNS}
          dataSource={CAPACITY_SAMPLES}
          productNum={CAPACITY_SAMPLES.length} options={[]} defaultValue={''} 
          showSearchBar={false}
          showRefreshButton={false}
          showSortButton={false}
      />
    </>
  )
}
