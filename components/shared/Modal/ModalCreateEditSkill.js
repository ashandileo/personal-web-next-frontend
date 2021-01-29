import { useState } from "react"
import { Modal, Form, Input, message, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { postSkill } from "client/SkillClient";

const ModalCreateEditSkill = ({
  onClickCancel,
  visible
}) => {

  const [name, setName] = useState("")
  const [fileUploaded, setFileUploaded] = useState("")

  const handleChangeUpload = e => {
    if (e.file.response) {
      setFileUploaded(e.file.response.url)
    }
  }

  const handleSubmitModal = async () => {
    const payload = {
      name: name,
      picture: fileUploaded
    }

    const { data } = await postSkill(payload)
    if (data) {
      message.success(`Berhasil menambahkan data`)
      onClickCancel()
    }
  } 

  return (
    <Modal
      title="Add Skill"
      centered
      visible={visible}
      onOk={handleSubmitModal}
      onCancel={onClickCancel}
      width={1000}
      bodyStyle={{ maxHeight: "500px", overflow: "auto" }}
    >
      <Form layout="vertical" onFinish={handleSubmitModal}>
        <Form.Item label="Name">
          <Input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Picture">
          <Upload
            action="http://localhost:3333/upload"
            name="image"
            listType="picture"
            onChange={e => handleChangeUpload(e)}
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalCreateEditSkill