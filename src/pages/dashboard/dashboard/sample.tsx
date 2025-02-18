import Icon, { EditOutlined, EyeOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";


export const CAPACITY_SAMPLES = Array(100).fill({
    arrivalDate: "2025-02-15",
    arrivalBorder: "",
    import: true,
    containerNumber: "",
    capacity: "",
    brokerName: "",
    load: true,
    sell: true,
    price: "",
    brokerCode: "",
    blockNumber: "",
    unloadedSite: true,
    arrivedSite: true,
    unloaded: true,
    released: false,
    loaded: false,
  });
  
export const CAPACITY_COLUMNS = [
    {
        title: "Дөхөлт огноо",
        LineChartDown01: 1,
        className :'border-line',
        children: [
            { 
                title: "Дөхөлт огноо", 
                dataIndex: "arrivalDate",
                flex: 1,
                sorter: (a: DataType, b: DataType) => new Date(a.arrivalDate).getTime() - new Date(b.arrivalDate).getTime(),
            },
            { 
                title: "Орох хил", 
                dataIndex: "arrivalBorder",
                flex: 1,
                sorter: (a: DataType, b: DataType) => a.arrivalBorder.localeCompare(b.arrivalBorder),
            },
            { 
                title: "Ирэх/Явах", 
                dataIndex: "import",
                flex: 1,
                sorter: (a: DataType, b: DataType) => Number(a.import) - Number(b.import),
            },
            { 
                title: "Чингэлэг дугаар", 
                dataIndex: "containerNumber",
                flex: 1,
                sorter: (a: DataType, b: DataType) => a.containerNumber.localeCompare(b.containerNumber),
            },
            { 
                title: "Даац", 
                dataIndex: "capacity",
                flex: 1,
                sorter: (a: DataType, b: DataType) => a.capacity.localeCompare(b.capacity),
            },
            { 
                title: "Зуучийн нэр", 
                dataIndex: "brokerName",
                flex: 1,
                sorter: (a: DataType, b: DataType) => a.brokerName.localeCompare(b.brokerName),
            },
            { 
                title: "Хоосон/Аяаатай", 
                dataIndex: "load",
                flex: 1,
                sorter: (a: DataType, b: DataType) => Number(a.load) - Number(b.load),
            },
            { 
                title: "Зарах эсэх", 
                dataIndex: "sell",
                flex: 1,
                sorter: (a: DataType, b: DataType) => Number(a.sell) - Number(b.sell),
            },
            { 
                title: "Зарах үнэ", 
                dataIndex: "price",
                flex: 1,
                sorter: (a: DataType, b: DataType) => a.price.localeCompare(b.price),
            },
        ],
    },
    {
        title: "Талбайн бүртгэл",
        children:[
            { 
                title: "Зууч код", 
                dataIndex: "brokerCode",
                flex: 1,
                sorter: (a: DataType, b: DataType) => a.brokerCode.localeCompare(b.brokerCode),
            },
            { 
                title: "Байр №", 
                dataIndex: "blockNumber",
                flex: 1,
                sorter: (a: DataType, b: DataType) => a.blockNumber.localeCompare(b.blockNumber),
            },
            { 
                title: "Талбайд задарсан", 
                dataIndex: "unloadedSite",
                flex: 1,
                sorter: (a: DataType, b: DataType) => Number(a.unloadedSite) - Number(b.unloadedSite),
            },
            { 
                title: "Талбайд ирсэн", 
                dataIndex: "arrivedSite",
                flex: 1,
                sorter: (a: DataType, b: DataType) => Number(a.arrivedSite) - Number(b.arrivedSite),
            },
            { 
                title: "Задарсан", 
                dataIndex: "unloaded",
                flex: 1,
                sorter: (a: DataType, b: DataType) => Number(a.unloaded) - Number(b.unloaded),
            },
            { 
                title: "Суларсан", 
                dataIndex: "released",
                flex: 1,
                sorter: (a: DataType, b: DataType) => Number(a.released) - Number(b.released),
            },
            { 
                title: "Ачилт хийсэн", 
                dataIndex: "loaded",
                flex: 1,
                sorter: (a: DataType, b: DataType) => Number(a.loaded) - Number(b.loaded),
            },
            { 
                title: "Зууч эсэх", 
                dataIndex: "broker",
                flex: 1,
                sorter: (a: DataType, b: DataType) => Number(a.broker) - Number(b.broker),
            },
        ],
        
    },
    {
        title: 'Үйлдэл',
        key: 'operation',
        fixed: 'right',
        width: 50,
        align: 'center', // <-- Add this line for Ant Design tables
        render: () => (
            <Space>
                <Button icon={<EyeOutlined />} className="border-none"/>
            </Space>
        ),
    },    
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
