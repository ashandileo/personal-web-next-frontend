import { useState } from "react"
import { Modal, Form, Input, Select, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const ModalCreateEditPortfolio = ({
  onClickOk,
  onClickCancel,
  visible
}) => {

  const options = [
    {
      label: "React JS",
      value: 1
    },
    {
      label: "Adonis JS",
      value: 2
    }
  ]
  
  const selectProps = {
    mode: "multiple",
    style: { width: "100%" },
    value : "",
    options,
    onChange: newValue => console.log(newValue),
    placeholder: "Select Item",
    maxTagCount: "responsive"
  }

  const fileList = [
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'yyy.png',
      status: 'error',
    },
  ];

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
        <Form.Item label="Content">
          <Input placeholder="Content" />
        </Form.Item>
        <Form.Item label="Technologies">
          <Select {...selectProps} />
        </Form.Item>
        <Form.Item label="Documentation">
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            defaultFileList={[...fileList]}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalCreateEditPortfolio