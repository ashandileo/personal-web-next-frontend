import { useState, useEffect } from "react"
import { Button, Space, Table, Popconfirm, message } from 'antd';
import ModalCreateEditTechnology from "components/shared/Modal/ModalCreateEditTechnology";
import { getTechnology, deleteTechnology } from "../../client/TechnologyClient"

const Technology = () => {

  const [showModal, setShowModal] = useState(false)
  const [technologies, setTechnologies] = useState([])
  const [editData, setEditData] = useState({})

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

  const handleDeleteTechnology = async id => {
    const { data } = await deleteTechnology(id)
    if (data) {
      message.success("Berhasil menghapus data")
      getTechnologyData()
    }
  }

  const onClickEdit = record => {
    setEditData(record)
    setShowModal(true)
  }

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
          <a onClick={() => onClickEdit(record)}>Edit</a>
          <Popconfirm
            title="Yakin ingin menghapus data?"
            onConfirm={() => handleDeleteTechnology(record.key)}
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
    getTechnologyData()
  }, [])

  return (
    <div>
      <div className="tw-flex tw-justify-between tw-items-center">
        <h1 className="fs-24 tw-font-normal">Technology</h1>
        <Button type="primary" onClick={() => {setShowModal(true); setEditData({})}}>Add Technology</Button>
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
            editData={editData}
          />
        )
      }
    </div>
  )
}

export default Technology