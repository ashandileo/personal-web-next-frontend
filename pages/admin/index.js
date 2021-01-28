import { useState } from "react"
import { Layout, Menu, Breadcrumb } from 'antd';
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

  return (
    <div>
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
            {
              listMenu.map((menu, index) => (
                <Menu.Item key={index} onClick={() => setActiveMenu(menu.name)}>
                  {menu.title}
                </Menu.Item>
              ))
            }
          </Menu>
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