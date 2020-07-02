import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import loadable from '@loadable/component'
import LoadingComponent from 'components/Loading'

const { Content } = Layout;

const AsyncAlgorithm = loadable(() => import('./Algorithm'), {
  fallback: LoadingComponent
})

const AsyncChat = loadable(() => import('./Chat'), {
  fallback: LoadingComponent
})

const AsyncHome = loadable(() => import('./Home'), {
  fallback: LoadingComponent
})

const AppContent = () => {
  return(
    <Content
      className="site-layout-content"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
        background: '#fff',
      }}
    >
      <Switch>
        <Route path="/algorithm" component={AsyncAlgorithm} />
        <Route path="/chat" component={AsyncChat} />
        <Route exact path="/" component={AsyncHome} />
      </Switch>
    </Content>
  )
}

export default withRouter(AppContent);
