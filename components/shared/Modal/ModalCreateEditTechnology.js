import { useState } from "react"
import { Modal, Form, Input, Select, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const ModalCreateEditSocial = ({
  onClickOk,
  onClickCancel,
  visible
}) => {

  return (
    <Modal
      title="Create Portfolio"
      centered
      visible={visible}
      onOk={onClickOk}
      onCancel={onClickCancel}
      width={1000}
      bodyStyle={{ maxHeight: "500px", overflow: "auto" }}
    >
      <Form layout="vertical">
        <Form.Item label="Name">
          <Input placeholder="Name" />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalCreateEditSocial