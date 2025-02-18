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
      title: 'Төлөв',
      key: 'abbreviation',  // Unique key
      sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
      width: 184,  // Set width for this column
    },
    {
      title: 'Төрөл',
      key: 'companyName',  // Unique key
      sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
      width: 184,  // Set width for this column
    },
    {
      title: 'Баритм дугаар',
      key: 'account',  // Unique key
      sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
      width: 184,  // Set width for this column
    },
    {
      title: 'Огноо',
      key: 'broker',  // Unique key
      width: 184,  // Set width for this column
    },
    {
      title: 'Нийт төлсөн',
      key: 'contactNumber',  // Unique key
      sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
      width: 184,  // Set width for this column
    },
    {
      title: 'Бэлнээр',
      key: 'broker',  // Unique key
      width: 184,  // Set width for this column
      sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
    },
    {
      title: 'Бэлэн бусаар',
      key: 'broker',  // Unique key
      width: 184,  // Set width for this column
      sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,

    },
    {
      title: 'Нийт төлбөр',
      key: 'broker',  // Unique key
      width: 184,  // Set width for this column
      sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,

    },
    {
      title: 'Краны хөлс',
      key: 'broker',  // Unique key
      width: 184,  // Set width for this column
      sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,

    },
    {
      title: 'Зам талбай ашиглалт',
      key: 'broker',  // Unique key
      width: 184,  // Set width for this column
      sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,

    },
    {
      title: 'Аяаа хадгаламж',
      key: 'broker',  // Unique key
      width: 184,  // Set width for this column
      sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,

    },
    {
      title: 'Чингэлэг вагон цэвэрлэгээ',
      key: 'broker',  // Unique key
      width: 184,  // Set width for this column
      sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,

    },
    {
      title: 'Вагон ашиглалт',
      key: 'broker',  // Unique key
      width: 184,  // Set width for this column
      sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,

    },
    {
      title: 'TL вагон ашиглалт',
      key: 'broker',  // Unique key
      width: 184,  // Set width for this column
      sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,

    },
    {
      title: 'Гаалийн үзлэг',
      key: 'broker',  // Unique key
      width: 184,  // Set width for this column
      sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,

    },
    {
      title: 'Авто ачигч',
      key: 'broker',  // Unique key
      width: 184,  // Set width for this column
      sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,

    },
    {
      title: 'Машин оролт',
      key: 'broker',  // Unique key
      width: 184,  // Set width for this column
      sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,

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
