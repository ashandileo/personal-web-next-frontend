import { useState } from "react"
import { Button, Image, Table, Space } from 'antd';
import Linkify from 'react-linkify';
import ModalCreateEditSocial from "components/shared/Modal/ModalCreateEditSocial";

const Social = () => {

  const [showModal, setShowModal] = useState(false)

  const columns = [
    {
      title: "Social Name",
      dataIndex: "social",
      key: "social",
      render: text => text
    },
    {
      title: "Link",
      dataIndex: "link",
      key: "link",
      render: text => (
        <Linkify  properties={{ target: '_blank' }}>
          {text}
        </Linkify>
      )
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
      social: "Linkedin",
      link: "https://linkedin.com",
      picture: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    },
  ]

  return (
    <div>
      <div className="tw-flex tw-justify-between tw-items-center">
        <h1 className="fs-24 tw-font-normal">Social</h1>
        <Button type="primary" onClick={() => setShowModal(true)}>Add Social</Button>
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
          <ModalCreateEditSocial
            visible={showModal}
            onClickOk={() => alert("OK")}
            onClickCancel={() => setShowModal(false)}
          />
        )
      }
    </div>
  )
}

export default Social