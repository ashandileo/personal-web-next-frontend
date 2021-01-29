import { useState, useEffect } from "react"
import { Modal, Form, Input, Select, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { getTechnology } from "../../../client/TechnologyClient"

const ModalCreateEditPortfolio = ({
  onClickOk,
  onClickCancel,
  visible
}) => {

  const [technologies, setTechnologies] = useState([])
  const [techIds, setTechIds] = useState([])

  const options = []

  technologies.length > 0 && technologies.map(technology => {
    options.push({
      label: technology.name,
      value: technology.id
    })
  })

  const setTechIdsToState = value => {
    setTechIds(value)
  }
  
  const selectProps = {
    mode: "multiple",
    style: { width: "100%" },
    value : techIds,
    options: options,
    onChange: newValue => setTechIdsToState(newValue),
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

  const getTechnologyData = async () => {
    const { data } = await getTechnology()
    if (data) {
      setTechnologies(data)
    }
  }

  useEffect(() => {
    getTechnologyData()
  }, [])

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
            defaultFileList={[]}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalCreateEditPortfolio