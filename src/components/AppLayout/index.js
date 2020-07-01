import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import AppHeader from 'components/AppHeader'
import AppSideNav from 'components/AppSideNav'
import AppBreadCrumb from 'components/AppBreadCrumb'
import AppContent from 'components/AppContent'

const AppLayout = () => {
  const { pathname } = useLocation();
  const pathParts = pathname.split('/');

  return(
    <Router>
      <Layout>
        <AppHeader></AppHeader>
        <Layout>
          {pathParts[1] && <AppSideNav></AppSideNav>}
          <Layout style={{ padding: '0 24px 24px' }}>
            <AppBreadCrumb></AppBreadCrumb>
            <AppContent></AppContent>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  )
}

export default AppLayout;
