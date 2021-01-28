import { useState } from "react"
import { Button, Image, Table } from 'antd';
import Linkify from 'react-linkify';
import ModalCreateEditTechnology from "components/shared/Modal/ModalCreateEditTechnology";

const Technology = () => {

  const [showModal, setShowModal] = useState(false)

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: text => text
    },
  ]

  const data = [
    {
      key: 1,
      name: "React JS"
    },
  ]

  return (
    <div>
      <div className="tw-flex tw-justify-between tw-items-center">
        <h1 className="fs-24 tw-font-normal">Technology</h1>
        <Button type="primary" onClick={() => setShowModal(true)}>Add Technology</Button>
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
          <ModalCreateEditTechnology
            visible={showModal}
            onClickOk={() => alert("OK")}
            onClickCancel={() => setShowModal(false)}
          />
        )
      }
    </div>
  )
}

export default Technology