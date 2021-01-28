import { useState } from "react"
import { Modal, Form, Input, message } from 'antd';
import { postTechnology } from "client/TechnologyClient"

const ModalCreateEditSocial = ({
  onClickCancel,
  visible,
  getTechnologyData
}) => {
  const [name, setName] = useState('')

  const handleSubmitModal = async () => {
    const { data } = await postTechnology({ name })
    if (data) {
      message.success("Berhasil menambahkan data")
      onClickCancel()
      getTechnologyData()
    }
  }

  return (
    <Modal
      title="Add Technology"x
      centered
      visible={visible}
      onOk={handleSubmitModal}
      onCancel={onClickCancel}
      width={1000}
      bodyStyle={{ maxHeight: "500px", overflow: "auto" }}
    >
      <Form layout="vertical" onFinish={handleSubmitModal }>
        <Form.Item label="Name">
          <Input placeholder="Name" onChange={e => setName(e.target.value)} />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalCreateEditSocial