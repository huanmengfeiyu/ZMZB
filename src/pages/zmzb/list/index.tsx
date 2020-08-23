import React, { useState, useRef } from 'react';
import CreateForm from '../components/CreateForm';
import { Form, Row, Col, Input } from 'antd';

const HospitalFeeModule: React.FC<{}> = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(true);
  return (
    <div>
      <div>
        11
        <div>22</div>
      </div>
      <div>
        <CreateForm onCancel={() => handleModalVisible(false)} modalVisible={createModalVisible}>
          <Form name="basic">
            <Row>
              <Col span={4}>
                <Form.Item
                  label="退费申请编号"
                  name="taa_ApplyID"
                  rules={[{ required: true, message: '必须输入申请编号' }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </CreateForm>
      </div>
    </div>
  );
};

export default HospitalFeeModule;
