import { useState, useEffect } from "react"
import { Modal, Form, Input, message, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { getSkillDetail, postSkill, updateSkill } from "client/SkillClient";

const ModalCreateEditSkill = ({
  onClickCancel,
  visible,
  getSkillData,
  editId
}) => {
  const [name, setName] = useState("")
  const [fileUploaded, setFileUploaded] = useState({})
  const [defaultFileList, setDefaultFileList] = useState([])
  const [showModal, setShowModal] = useState(false)

  const handleChangeUpload = e => {
    if (e.file.response) {
      setFileUploaded({
        url: e.file.response.url,
        name: e.file.name
      })
    }
  }

  const handleSubmitModal = async () => {
    const payload = {
      name: name,
      picture: fileUploaded.url,
      pictureName: fileUploaded.name
    }

    const { data } = editId ? await updateSkill(editId, payload) : await postSkill(payload)
    if (data) {
      message.success(`Berhasil ${editId ? "mengubah" : "menambah"} data`)
      onClickCancel()
      getSkillData()
    }
  } 

  const getDetailSkillData = async () => {
    const { data } = await getSkillDetail(editId)
    if (data) {
      setName(data.name)
      if (data.pictureName && data.picture) {
        setDefaultFileList([...defaultFileList, {
          name: data.pictureName || "",
          url: data.picture || "",
          status: "done"
        }])
      }
    }
  }

  useEffect( async () => {
    if (editId) {
      await getDetailSkillData()
    }
    setShowModal(true)
  }, [])

  return (
    <Modal
      title="Add Skill"
      centered
      visible={showModal && visible}
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
            defaultFileList={defaultFileList}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalCreateEditSkill