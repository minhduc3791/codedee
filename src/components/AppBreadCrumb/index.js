import React, { useState, useEffect } from 'react'
import { Layout, Breadcrumb } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import {
  useLocation
} from "react-router-dom";

const AppBreadCrumb = ({path, url}) => {
  let location = useLocation();
  const [parts, setParts] = useState(location.pathname.split('/'));
  const [paths, setPaths] = useState(parts.reduce((tempPaths, part, index) => {
    if(index === 0) return tempPaths;
    index > 1 ? tempPaths.push(`${tempPaths[index - 1]}/${part}`) : tempPaths.push('');
    return tempPaths;
  }, ['/']));

  useEffect(() => {
    // console.log('bread crumb part:', parts);
    // console.log('bread crumb paths:', paths);
    // console.log(`bc path: ${path}`);
    // console.log(`bc url: ${url}`);
    // console.log('bc location:', location);
  });
  return(
    <Breadcrumb style={{margin: '16px 0'}}>
      <Breadcrumb.Item href="/">
        <HomeOutlined />
      </Breadcrumb.Item>
      {paths.map((p, index) => parts[index] !== '' &&
        <Breadcrumb.Item key={index} href={`${path}${p}`}>
          <span>{parts[index]}</span>
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  )
}

export default AppBreadCrumb;
