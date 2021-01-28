import { useState } from "react"
import { Button, Image, Table, Space } from 'antd';
import ModalCreateEditSkill from "components/shared/Modal/ModalCreateEditSkill"

const Skills = () => {

  const [showModal, setShowModal] = useState(false)

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
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ]

  const data = [
    {
      key: 1,
      skill: "React JS",
      picture: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    },
  ]

  return (
    <div>
      <div className="tw-flex tw-justify-between tw-items-center">
        <h1 className="fs-24 tw-font-normal">Skills</h1>
        <Button type="primary" onClick={() => setShowModal(true)}>Add Skills</Button>
      </div>
      <div className="mt-20">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </div>
      {
        showModal && (
          <ModalCreateEditSkill
            visible={showModal}
            onClickOk={() => alert("OK")}
            onClickCancel={() => setShowModal(false)}
          />
        )
      }
    </div>
  )
}

export default Skills