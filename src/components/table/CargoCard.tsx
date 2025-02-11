import React, { useState } from 'react';
import { Modal, Form, Input, Button, Select, Radio, DatePicker } from 'antd';

const { Option } = Select;

const CargoCard: React.FC = () => {
    const [form] = Form.useForm();
    const [visible, setVisible] = useState(true);

    const handleCancel = () => {
        form.resetFields();
        setVisible(false);
    };

    const handleSubmit = (values: any) => {
        console.log('Form Values:', values);
        setVisible(false);
    };

    return (
        <Modal
            title="Ачаа чингэлэг тээврийн бүртгэл"
            visible={visible}
            onCancel={handleCancel}
            footer={null}
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                initialValues={{ direction: 'south' }} // Set initial value for radio button
            >
                <hr  className='w-full my-2'/>
                <div className='flex items-center gap-3'>
                    <Form.Item label="Чингэлэг дугаар" name="containerNumber">
                        <Input placeholder="DFSU-1429598" />
                    </Form.Item>
                    <Form.Item label="Даац" name="loadCapacity">
                        <Select placeholder="2018">
                            <Option value="2018">2018</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Зуучийн нэр" name="brokerName" className="flex-grow">
                        <Select placeholder="TILogistic">
                            <Option value="INDIA-ZU">INDIA-ZU</Option>
                        </Select>
                    </Form.Item>
                </div>
                <div>   
                    <Form.Item label="Тээврийн чиглэл" name="containerNumber">
                        <Input placeholder="DFSU-1429598" />
                    </Form.Item>
                    <Form.Item label="Чиглэл" name="direction">
                        <Radio.Group>
                            <Radio value="south">Урд</Radio>
                            <Radio value="north">Хойд</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Дэхэлтийн мэдээллийн огноо" name="entryDate">
                        <DatePicker />
                    </Form.Item>
                </div> 
                <h1 className='font-bold my-4 h-5'>Ачаа</h1>
                <div>
                    <Form.Item label="Ачааны нэр төрөл" name="cargoName">
                        <Input placeholder="INDIA-ZU" />
                    </Form.Item>
                    <div className='flex gap-6'>
                        <Form.Item label="Хүлээн авагч" name="recipient">
                            <Input placeholder="info@gmail.com" />
                        </Form.Item>
                        <Form.Item label="Утас" name="phone">
                            <Input placeholder="9411 2725" />
                        </Form.Item>
                    </div>
                </div>
                <h1 className='font-bold my-4 h-5'>Авах</h1>
                <div>
                    <div className='flex gap-3'>
                        <Form.Item label="Тээврийн хөлс" name="transportFee">
                            <Input placeholder="2,750" />
                        </Form.Item>
                        <Form.Item label="Валют" name="currency">
                            <Select placeholder="USD">
                                <Option value="USD">USD</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Хариуцагч" name="responsibleParty" className='flex-grow'>
                            <Select placeholder="TILogistic">
                                <Option value="TILogistic">TILogistic</Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div className='flex gap-3 w-full'>
                        <Form.Item label="Төлөх арга" name="paymentMethod" className='flex-1'>
                            <Select placeholder="TILogistic">
                                <Option value="TILogistic">TILogistic</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Э/Хураамж санамж" name="feeNote" className='flex-1'>
                            <Input placeholder="2,750" />
                        </Form.Item>
                    </div>
                </div>
                <h1 className='font-bold my-4 h-5'>Өгөх</h1>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <Form.Item label="Шилжүүлэх тээврийн хөлс" name="transferTransportFee" className='flex-grow flex-1'>
                            <Input placeholder="2,750" className="w-full" />
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item label="Гадаад тээвэр зууч" name="internationalBroker" className='flex-grow flex-1' >
                            <Select placeholder="TILogistic" className="w-full">
                                <Option value="TILogistic">TILogistic</Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div className='col-span-2 flex justify-end'>
                        <Form.Item label="Төлбөр хариуцахийн нэр" name="paymentResponsiblePartyName" className='w-1/2'>
                            <Input placeholder="144141414" />
                        </Form.Item>
                    </div>
                </div>
            </Form>
        </Modal>
    );
};

export default CargoCard;