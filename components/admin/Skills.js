import { useState, useEffect } from "react"
import { Button, Image, Table, Space, Popconfirm, message } from 'antd';
import ModalCreateEditSkill from "components/shared/Modal/ModalCreateEditSkill"
import { deleteSkill, getSkill } from "client/SkillClient";

const Skills = () => {

  const [skills, setSkills] = useState([])
  const [showModal, setShowModal] = useState(false)

  const getSkillData = async () => {
    const { data } = await getSkill()
    if (data) {
      let modifiedData = []

      data.map(d => {
        modifiedData.push({
          key: d.id,
          skill: d.name,
          picture: d.picture
        })
      })

      setSkills(modifiedData)
    }
  }

  const handleDeleteSkill = async id => {
    const { data } = await deleteSkill(id)
    if (data) {
      message.success("Berhasil menghapus data")
      getSkillData()
    }
  }

  const onClickEdit = () => {

  }

  const columns = [
    {
      title: "Skill Name",
      dataIndex: "skill",
      key: "skill",
      render: text => text
    },
    {
      title: "Picture",
      dataIndex: "picture",
      key: "picture",
      render: image => (
        <Image
          width={100}
          src={image}
        />
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a onClick={() => onClickEdit(record)}>Edit</a>
          <Popconfirm
            title="Yakin ingin menghapus data?"
            onConfirm={() => handleDeleteSkill(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <a href="#">Delete</a>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  useEffect(() => {
    getSkillData()
  }, [])

  return (
    <div>
      <div className="tw-flex tw-justify-between tw-items-center">
        <h1 className="fs-24 tw-font-normal">Skills</h1>
        <Button type="primary" onClick={() => setShowModal(true)}>Add Skills</Button>
      </div>
      <div className="mt-20">
        <Table
          columns={columns}
          dataSource={skills}
          pagination={false}
        />
      </div>
      {
        showModal && (
          <ModalCreateEditSkill
            visible={showModal}
            onClickOk={() => alert("OK")}
            onClickCancel={() => setShowModal(false)}
            getSkillData={getSkillData}
          />
        )
      }
    </div>
  )
}

export default Skills