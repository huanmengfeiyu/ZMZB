import React from 'react';
import { Row, Col, Form, Input, Select, DatePicker } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const { Option } = Select;

const ApplyInfoForm: React.FC<{}> = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <Row>
          <Col span={6}>
            <Form.Item
              label="退费申请编号"
              name="taa_ApplyID"
              rules={[{ required: true, message: '必须输入申请编号' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="登记单位"
              name="taa_register_company"
              rules={[{ required: true, message: '必须输入登记单位' }]}
            >
              <Select  style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="填报类型"
              name="taa_reporting_type"
              rules={[{ required: true, message: '必须输入填报类型' }]}
            >
              <Select  style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="填报归属地"
              name="taa_reporting_place"
              rules={[{ required: true, message: '必须输入填报归属地' }]}
            >
              <Select  style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Form.Item
              label="填报时间"
              name="taa_ApplyDate"
              rules={[{ required: true, message: '必须输入填报时间' }]}
            >
              <DatePicker />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="填报人"
              name="taa_Charger"
              rules={[{ required: true, message: '必须输入填报人' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="住院号"
              name="taa_HISID"
              rules={[{ required: true, message: '必须输入住院号' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="病案号"
              name="taa_PatientID"
              rules={[{ required: true, message: '必须输入病案号' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ApplyInfoForm;
