import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import Algorithm from './Algorithm'
import Chat from './Chat'
import Home from './Home'

const { Content } = Layout;

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
        <Route path="/algorithm" component={Algorithm} />
        <Route path="/chat" component={Chat} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Content>
  )
}

export default withRouter(AppContent);
