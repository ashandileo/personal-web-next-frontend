import { Button, Image, Table } from 'antd';
import Linkify from 'react-linkify';

const Social = () => {

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
    }
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
        <Button type="primary">Create Social</Button>
      </div>
      <div className="mt-20">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </div>
    </div>
  )
}

export default Social