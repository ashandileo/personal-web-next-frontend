import { useState } from "react"
import { Layout, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Portfolio from "components/admin/Portfolio"
import Skills from "components/admin/Skills"
import Social from "components/admin/Social"
import Technology from "components/admin/Technology";

const { Header, Content, Footer } = Layout;

const Index = () => {
  const [activeMenu, setActiveMenu] = useState("portfolio")

  const listMenu = [
    {
      title: "Portfolio",
      name: "portfolio"
    },
    {
      title: "Skills",
      name: "skills"
    },
    {
      title: "Social",
      name: "social"
    },
    {
      title: "Technology",
      name: "technology"
    }
  ]

  const menu = (
    <Menu>
      <Menu.Item>
        <span onClick={() => alert("CLICKED")}>
          Logout
        </span>
      </Menu.Item>
    </Menu>
  )

  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="tw-flex tw-justify-between tw-items-center">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
              {
                listMenu.map((menu, index) => (
                  <Menu.Item key={index} onClick={() => setActiveMenu(menu.name)}>
                    {menu.title}
                  </Menu.Item>
                ))
              }
            </Menu>
            <Dropdown overlay={menu}>
              <div className="tw-text-white tw-cursor-pointer">
                Ashandi Leonadi <DownOutlined />
              </div>
            </Dropdown>
          </div>
        </Header>
        <Content style={{ padding: '50px 50px 0' }}>
          <div className="site-layout-content">
            {activeMenu === "portfolio" && <Portfolio />}
            {activeMenu === "skills" && <Skills />}
            {activeMenu === "social" && <Social />}
            {activeMenu === "technology" && <Technology />}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ashandi Leonadi @ 2021
        </Footer>
      </Layout>
    </div>
  )
}

export default Index