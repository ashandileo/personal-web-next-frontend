import { useState } from "react"
import { Layout, Menu, Breadcrumb } from 'antd';
import Portfolio from "components/admin/Portfolio"
import Skills from "components/admin/Skills"
import Social from "components/admin/Social"

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
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            {activeMenu === "portfolio" && <Portfolio />}
            {activeMenu === "skills" && <Skills />}
            {activeMenu === "social" && <Social />}
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