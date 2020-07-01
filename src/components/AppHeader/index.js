import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, useRouteMatch, withRouter, useLocation } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import APP_CONFIG from 'constants/AppConfig'
import { capitalize } from 'constants/AppHelper'

const { Header } = Layout

const AppHeader = () => {
  const { HEADER_MENU } = APP_CONFIG;
  const { pathname } = useLocation();
  const pathParts = pathname.split('/');
  const [ selectedKey, setSelectedKey ] = useState([pathParts[1] ? pathParts[1] : 'home']);

  return(
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={selectedKey}>
        {HEADER_MENU.map(menu =>
          <Menu.Item key={menu} onClick={() => {setSelectedKey([menu])}}>
            <a href={`/${(menu === 'home' ? '' : menu)}`}>{capitalize(menu)}</a>
          </Menu.Item>
        )}
      </Menu>
    </Header>
  )
}

export default AppHeader;
