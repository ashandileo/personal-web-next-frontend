import { useState } from "react"
import { Modal, Form, Input, Select, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const ModalCreateEditSkill = ({
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
        <Form.Item label="Title">
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item label="Picture">
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            defaultFileList={[]}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalCreateEditSkill