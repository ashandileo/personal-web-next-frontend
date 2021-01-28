import { useState, useEffect } from "react"
import { Button, Space, Table } from 'antd';
import ModalCreateEditTechnology from "components/shared/Modal/ModalCreateEditTechnology";
import { getTechnology } from "../../client/TechnologyClient"

const Technology = () => {

  const [showModal, setShowModal] = useState(false)
  const [technologies, setTechnologies] = useState([])

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: text => text
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

  const getTechnologyData = async () => {
    const { data } = await getTechnology()

    if (data) {
      let modifiedData = []

      data.map(d => {
        modifiedData.push({
          key: d.id,
          name: d.name
        })
      })

      setTechnologies(modifiedData)
    }
  }

  useEffect(() => {
    getTechnologyData()
  }, [])

  return (
    <div>
      <div className="tw-flex tw-justify-between tw-items-center">
        <h1 className="fs-24 tw-font-normal">Technology</h1>
        <Button type="primary" onClick={() => setShowModal(true)}>Add Technology</Button>
      </div>
      <div className="mt-20">
        <Table
          columns={columns}
          dataSource={technologies}
          pagination={false}
        />
      </div>
      {
        showModal && (
          <ModalCreateEditTechnology
            visible={showModal}
            onClickCancel={() => setShowModal(false)}
            getTechnologyData={getTechnologyData}
          />
        )
      }
    </div>
  )
}

export default Technology