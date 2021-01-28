import { Button, Image, Table, Tag } from 'antd';

const Skills = () => {

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
    }
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
        <Button type="primary">Create Skills</Button>
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

export default Skills