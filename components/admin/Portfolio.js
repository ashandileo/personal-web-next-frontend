import { useState, useEffect } from "react"
import { Button, Image, Table, Tag, Space, Popconfirm, message } from 'antd';
import ModalCreateEditPortfolio from "components/shared/Modal/ModalCreateEditPortfolio"
import { getPortfolio, deletePortfolio } from "client/PortfolioClient"

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false)
  const [portfolios, setPortfolios] = useState([])
  const [editId, setEditId] = useState(null)

  const getPortfolioData = async () => {
    const { data } = await getPortfolio()
    if (data) {
      let modifiedData = []

      data.map(d => {
        let technologies = []
        let documentation = []

        d.technologies.map(technology => {
          technologies.push(technology.name)
        })

        d.portfolioImages.map(image => {
          if (image?.pictureUrl) {
            documentation.push(image?.pictureUrl)
          }
        })

        modifiedData.push({
          key: d.id,
          title: d.title,
          content: d.content,
          technologies: technologies,
          documentation: documentation
        })
      })

      setPortfolios(modifiedData)
    }
  }

  const onClickEdit = (record) => {
    setEditId(record.key)
    setShowModal(true)
  }

  const handleDeletePortfolio = async id => {
    const { data } = await deletePortfolio(id)
    if (data) {
      message.success("Berhasil menghapus data")
      getPortfolioData()
    }
  }

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
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a onClick={() => onClickEdit(record)}>Edit</a>
          <Popconfirm
            title="Yakin ingin menghapus data?"
            onConfirm={() => handleDeletePortfolio(record.key)}
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
    getPortfolioData()
  }, [])

  return (
    <div>
      <div className="tw-flex tw-justify-between tw-items-center">
        <h1 className="fs-24 tw-font-normal">Portfolio</h1>
        <Button type="primary" onClick={() => setShowModal(true)}>Add Portfolio</Button>
      </div>
      <div className="mt-20">
        <Table
          columns={columns}
          dataSource={portfolios}
          pagination={false}
        />
      </div>
      {
        showModal && (
          <ModalCreateEditPortfolio
            visible={showModal}
            onClickCancel={() => setShowModal(false)}
          />
        )
      }
    </div>
  )
}

export default Portfolio