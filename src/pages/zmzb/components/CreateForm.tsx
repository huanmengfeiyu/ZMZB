import React from 'react';
import { Modal } from 'antd';

interface CreateFromProps {
  modalVisible: boolean;
  onCancel: () => void;
}

const CreateForm: React.FC<CreateFromProps> = (props) => {
  const { modalVisible, onCancel } = props;

  return (
    <Modal
      destroyOnClose
      title="直免直报申请"
      visible={modalVisible}
      onCancel={() => onCancel()}
      footer={null}
      style={{ width: 1000, height: 800 }}
    >
      {props.children}
    </Modal>
  );
};

export default CreateForm;
