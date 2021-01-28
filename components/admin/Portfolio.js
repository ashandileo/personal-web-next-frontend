import { Button, Image, Table, Tag } from 'antd';

const Portfolio = () => {

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: text => text
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
      render: text => <div dangerouslySetInnerHTML={{__html: text}}></div>
    },
    {
      title: "Technologies",
      dataIndex: "technologies",
      key: "technologies",
      render: technologies => (
        technologies.map(technology => (
          <Tag color="geekblue" key={technology}>
            {technology}
          </Tag>
        ))
      )
    },
    {
      title: "Documentation",
      dataIndex: "documentation",
      key: "documentation",
      render: images => (
        <Image.PreviewGroup>
          {
            images.map((image, index) => (
              <div className={`${index === 0 ? "" : "tw-hidden"}`}>
                <Image
                  width={100}
                  src={image}
                />
              </div>
            ))
          }
        </Image.PreviewGroup>
      )
    }
  ]

  const data = [
    {
      key: 1,
      title: "Github Finder",
      content: "<p> An application to search github users and repositories</p>",
      technologies: ['React JS', 'Adonis JS'],
      documentation: ["https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png", "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"]
    },
  ]

  return (
    <div>
      <div className="tw-flex tw-justify-between tw-items-center">
        <h1 className="fs-24 tw-font-normal">Portfolio</h1>
        <Button type="primary">Create Portfolio</Button>
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

export default Portfolio