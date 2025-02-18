import { EditOutlined, EyeOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Button, Space, Switch } from 'antd';

export const CAPACITY_SAMPLES = Array(100).fill({
    arrivalDate: "2025-02-15",
    arrivalBorder: "MN",
    import: true,
    containerNumber: "21",
    capacity: "1000",
    brokerName: "tamira",
    load: true,
    sell: true,
    price: "10000$",
    brokerCode: "0528",
    blockNumber: "10",
    unloadedSite: true,
    arrivedSite: true,
    unloaded: true,
    released: false,
    loaded: false,
  });
  
  export const CAPACITY_COLUMNS = [
    {
        title: 'Товчлол',
        key: 'abbreviation',  // Unique key
        sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
    },
    {
        title: 'Компаний нэр',
        key: 'companyName',  // Unique key
        sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
    },
    {
        title: 'Данс',
        key: 'account',  // Unique key
        sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
    },
    {
        title: 'Зууч эсэх',
        key: 'broker',  // Unique key
        render: () => (
            <Space>
                <Switch defaultChecked />
            </Space>
        ),    
    },
    {
        title: 'Харилцах дугаар',
        key: 'contactNumber',  // Unique key
        sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
    },
    {
        title: 'Үйлдэл',
        key: 'operation',
        fixed: 'right',
        width: 150,
        align: 'center', // <-- Add this line for Ant Design tables
        render: () => (
            <Space>
                <Button icon={<EyeOutlined />} />
                <Button icon={<EditOutlined />} />
                <Button icon={<MinusCircleOutlined className="text-red-500" />} />
            </Space>
        ),
    }, 
];

export const CONTRACTED_COMPANY = Array(100).fill({
    arrivalDate: "2025-02-15",
    arrivalBorder: "MN",
    import: true,
    containerNumber: "21",
    capacity: "1000",
    brokerName: "tamira",
    load: true,
    sell: true,
    price: "10000$",
    brokerCode: "0528",
    blockNumber: "10",
    unloadedSite: true,
    arrivedSite: true,
    unloaded: true,
    released: false,
    loaded: false,
});
  
export const CONTRACTED_COMPANIES = [
    {
        title: 'Товчлол',
        key: 'abbreviation',  // Unique key
        sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
    },
    {
        title: 'Компаний нэр',
        key: 'companyName',  // Unique key
        sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
    },
    {
        title: 'Зууч эсэх',
        key: 'broker',  // Unique key
        render: () => (
            <Space>
                <Switch defaultChecked />
            </Space>
        ),    
    },
    {
        title: 'Данс',
        key: 'account',  // Unique key
        sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
    },
    {
        title: 'Харилцах дугаар',
        key: 'contactNumber',  // Unique key
        sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
    },
    {
        title: 'Үйлдэл',
        key: 'operation',
        fixed: 'right',
        width: 150,
        align: 'center', // <-- Add this line for Ant Design tables
        render: () => (
            <Space>
                <Button icon={<EyeOutlined />} />
                <Button icon={<EditOutlined />} />
                <Button icon={<MinusCircleOutlined className="text-red-500" />} />
            </Space>
        ),
    }, 
];

export const CUSTOMER_ACCOUNTING_COL = [
    {
        title: 'Огноо',
        key: 'abbreviation',  // Unique key
        width: 250,
        sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
    },
    {
        title: 'Данс',
        key: 'companyName',  // Unique key
        width: 250,
        sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
    },
    {
        title: 'Бэлэн',
        width: 250,
        key: 'broker',  // Unique key
    },
    {
        title: 'Бэлэн бус',
        key: 'account',  // Unique key
        width: 250,
        sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
    },
    {
        title: 'Баримт',
        key: 'contactNumber',  // Unique key
        width: 250,
        sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
    },
    {
        title: 'Төлөгч',
        key: 'operation',
        width: 250,
        sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
    },
    {
        title: 'Гүйлгээ хийсэн ажилтан',
        key: 'operation',
        width: 250,
        sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
    },
    {
        title: 'Үйлдэл',
        key: 'operation',
        fixed: 'right',
        width: 150,
        align: 'center', // <-- Add this line for Ant Design tables
        render: () => (
            <Space>
                <Button icon={<EyeOutlined />} />
                <Button icon={<EditOutlined />} />
                <Button icon={<MinusCircleOutlined className="text-red-500" />} />
            </Space>
        ),
    }, 
];

export const CUSTOMER_ACCOUNTING_DATA = [
    {
        arrivalDate: "2025-02-15",
        arrivalBorder: "MN",
        import: true,
        containerNumber: "21",
        capacity: "1000",
        brokerName: "tamira",
        load: true,
        sell: true,
        price: "10000$",
        brokerCode: "0528",
        blockNumber: "10",
        unloadedSite: true,
        arrivedSite: true,
        unloaded: true,
        released: false,
        loaded: false,
    },
    {
        arrivalDate: "2025-02-16",
        arrivalBorder: "RU",
        import: true,
        containerNumber: "22",
        capacity: "1500",
        brokerName: "borjigin",
        load: false,
        sell: false,
        price: "12000$",
        brokerCode: "0530",
        blockNumber: "12",
        unloadedSite: false,
        arrivedSite: true,
        unloaded: false,
        released: true,
        loaded: true,
    },
    {
        arrivalDate: "2025-02-17",
        arrivalBorder: "CN",
        import: false,
        containerNumber: "23",
        capacity: "2000",
        brokerName: "batu",
        load: true,
        sell: true,
        price: "15000$",
        brokerCode: "0532",
        blockNumber: "15",
        unloadedSite: true,
        arrivedSite: true,
        unloaded: false,
        released: true,
        loaded: false,
    },
    {
        arrivalDate: "2025-02-18",
        arrivalBorder: "MN",
        import: true,
        containerNumber: "24",
        capacity: "500",
        brokerName: "ganga",
        load: false,
        sell: true,
        price: "8000$",
        brokerCode: "0534",
        blockNumber: "18",
        unloadedSite: false,
        arrivedSite: true,
        unloaded: true,
        released: false,
        loaded: true,
    },
    // You can continue adding more rows as needed
];


export const TURN_OFF_TICKET_COLUMNS = [
    {
        title: 'Он сар өдөр',
        dataIndex: 'date', // Map to the correct field in dataSource
        key: 'date', // Unique key
        width: 258,
        sorter: (a: { date: string }, b: { date: string }) => a.date.localeCompare(b.date), // Sort by date
    },
    {
        title: 'ЭХ тасалбарын №',
        dataIndex: 'ticketNumber', // Map to the correct field in dataSource
        key: 'ticketNumber', // Unique key
        width: 258,
        sorter: (a: { ticketNumber: string }, b: { ticketNumber: string }) => a.ticketNumber.localeCompare(b.ticketNumber), // Sort by ticket number
    },
    {
        title: 'Код',
        dataIndex: 'code', // Map to the correct field in dataSource
        key: 'code', // Unique key
        width: 258,
        sorter: (a: { code: string }, b: { code: string }) => a.code.localeCompare(b.code), // Sort by code
    },
    {
        title: 'Хураамжийн нэр',
        dataIndex: 'feeName', // Map to the correct field in dataSource
        key: 'feeName', // Unique key
        width: 258,
        sorter: (a: { feeName: string }, b: { feeName: string }) => a.feeName.localeCompare(b.feeName), // Sort by fee name
    },
    {
        title: 'Ангилал',
        dataIndex: 'category', // Map to the correct field in dataSource
        key: 'category', // Unique key
        width: 258,
        sorter: (a: { category: string }, b: { category: string }) => a.category.localeCompare(b.category), // Sort by category
    },
    {
        title: 'Хүсэлт явуулсан кассир',
        dataIndex: 'cashier', // Map to the correct field in dataSource
        key: 'cashier', // Unique key
        width: 258,
        sorter: (a: { cashier: string }, b: { cashier: string }) => a.cashier.localeCompare(b.cashier), // Sort by cashier
    },
    {
        title: 'Төлөв',
        dataIndex: 'status', // Map to the correct field in dataSource
        key: 'status', // Unique key
        width: 258,
        sorter: (a: { status: string }, b: { status: string }) => a.status.localeCompare(b.status), // Sort by status
    },
    {
        title: 'Үйлдэл',
        key: 'action',
        fixed: 'right',
        width: 150,
        align: 'center',
        render: () => (
            <Space>
                <Button icon={<MinusCircleOutlined className="text-red-500" />} />
            </Space>
        ),
    },
];

export const TURN_OFF_TICKET_DATA = [
    {
        key: '1',
        date: '2023-10-01',
        ticketNumber: 'T12345',
        code: 'C001',
        isBroker: 'Тийм',
        feeName: 'Хураамж 1',
        category: 'Ангилал A',
        cashier: 'Кассир 1',
        status: 'Идэвхтэй',
    },
    {
        key: '2',
        date: '2023-10-02',
        ticketNumber: 'T12346',
        code: 'C002',
        isBroker: 'Үгүй',
        feeName: 'Хураамж 2',
        category: 'Ангилал B',
        cashier: 'Кассир 2',
        status: 'Идэвхгүй',
    },
    // Add more data as needed
];


interface DataType {
    arrivalDate: string;
    arrivalBorder: string;
    import: boolean;
    containerNumber: string;
    capacity: string;
    brokerName: string;
    load: boolean;
    sell: boolean;
    price: string;
    brokerCode: string;
    blockNumber: string;
    unloadedSite: boolean;
    arrivedSite: boolean;
    unloaded: boolean;
    released: boolean;
    loaded: boolean;
    switch: boolean;
}
