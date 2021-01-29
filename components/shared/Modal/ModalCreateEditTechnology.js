import { useState, useRef, useEffect } from "react"
import { Modal, Form, Input, message } from 'antd';
import { postTechnology, updateTechnology } from "client/TechnologyClient"

const ModalCreateEditSocial = ({
  onClickCancel,
  visible,
  getTechnologyData,
  editData
}) => {
  const [name, setName] = useState(editData?.name || "")
  const ref = useRef()

  const handleSubmitModal = async () => {
    const { data } = editData?.name && editData?.key ? await updateTechnology(editData?.key, { name }) : await postTechnology({ name })
    if (data) {
      message.success(`Berhasil ${editData?.name ? "mengubah" : "menambah"} data`)
      onClickCancel()
      getTechnologyData()
    }
  }

  useEffect(() => {
    ref.current.focus({ cursor: "end" })
  },[])

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
          <Input placeholder="Name" onChange={e => setName(e.target.value)} value={name} ref={ref} />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalCreateEditSocial