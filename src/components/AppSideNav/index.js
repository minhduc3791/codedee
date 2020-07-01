import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useLocation } from "react-router-dom";
import APP_CONFIG from 'constants/AppConfig'

const { SubMenu } = Menu;
const { Sider } = Layout

const AppSideNav = () => {
  const { pathname } = useLocation();
  const pathParts = pathname.split('/');
  const { SIDE_NAV, SUB_MENU } = APP_CONFIG;
  const [ collapsed, setCollapsed ] = useState(false);
  const [ category, setCategory ] = useState([pathParts[2] ? pathParts[2] : '']);
  const [ sub, setSub ] = useState([pathParts[3] ? pathParts[3] : '']);

  return(
    <Sider width={200} className="site-layout-background" collapsible collapsed={collapsed} onCollapse={() => {setCollapsed(!collapsed)}}>
      <Menu
        theme="light"
        mode="inline"
        defaultOpenKeys={category}
        defaultSelectedKeys={sub}
      >
        {SIDE_NAV[pathParts[1]] && SIDE_NAV[pathParts[1]].map(menu => (
          <SubMenu key={menu} icon={<UserOutlined />} title={menu}>
            {SUB_MENU[menu] && SUB_MENU[menu].map(sMenu => (<Menu.Item key={sMenu}>
              <a href={`/${pathParts[1]}/${menu}/${sMenu}`} >{sMenu}</a>
            </Menu.Item>))}
          </SubMenu>
        ))}
      </Menu>
    </Sider>
  )
}

export default AppSideNav;
