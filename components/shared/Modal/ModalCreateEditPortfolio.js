import { useState, useEffect } from "react"
import { Modal, Form, Input, Select, Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { getTechnology } from "../../../client/TechnologyClient"
import { postPortfolio } from "client/PortfolioClient";


const initialFormData = {
  title: "",
  content: "",
  technologiesIds: [],
  images: []
}

const ModalCreateEditPortfolio = ({
  onClickOk,
  onClickCancel,
  visible
}) => {

  const [technologies, setTechnologies] = useState([])
  const [techIds, setTechIds] = useState([])
  const [formData, setFormData] = useState(initialFormData)
  const [isUploading, setIsUploading] = useState(false)

  

  const handleChangeForm = (e, name) => {
    if (Array.isArray(e)) {
      setFormData({
        ...formData,
        [name]: e
      })
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }

  const handleChangeUpload = e => {
    if (e.file.status === "uploading") {
      setIsUploading(true)
    }

    if (e.file.status === "done") {
      setFormData({
        ...formData,
        images: [...formData.images, {
          pictureUrl: e.file.response.url,
          pictureName: e.file.name
        }]
      })
      setIsUploading(false)
    }
  }

  const postPortfolioData = async () => {
    const { data } = await postPortfolio(formData)
    if (data) {
      message.success(`Berhasil ${false ? "mengubah" : "menambah"} data`)
      onClickCancel()
    }
  }

  const getTechnologyData = async () => {
    const { data } = await getTechnology()
    if (data) {
      setTechnologies(data)
    }
  }

  const options = []

  technologies.length > 0 && technologies.map(technology => {
    options.push({
      label: technology.name,
      value: technology.id
    })
  })
  
  const selectProps = {
    mode: "multiple",
    style: { width: "100%" },
    value : formData?.technologiesIds,
    options: options,
    onChange: newValue => handleChangeForm(newValue, "technologiesIds"),
    placeholder: "Select Item",
    maxTagCount: "responsive",
  }

  useEffect(() => {
    getTechnologyData()
  }, [])

  return (
    <Modal
      title="Create Portfolio"
      centered
      visible={visible}
      onOk={postPortfolioData}
      okButtonProps={{ disabled: isUploading }}
      onCancel={onClickCancel}
      width={1000}
      bodyStyle={{ maxHeight: "500px", overflow: "auto" }}
    >
      <Form layout="vertical">
        <Form.Item label="Title">
          <Input placeholder="Title" name="title" onChange={handleChangeForm} />
        </Form.Item>
        <Form.Item label="Content">
          <Input placeholder="Content" name="content" onChange={handleChangeForm} />
        </Form.Item>
        <Form.Item label="Technologies">
          <Select {...selectProps} />
        </Form.Item>
        <Form.Item label="Documentation">
          <Upload
            action="http://localhost:3333/upload"
            name="image"
            listType="picture"
            onChange={e => handleChangeUpload(e)}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalCreateEditPortfolio