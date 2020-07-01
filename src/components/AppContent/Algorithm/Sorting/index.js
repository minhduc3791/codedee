import React, { useState, useEffect, useRef } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { withCookies } from 'react-cookie'
import { Button, Row, Col } from 'antd'
import Line from './Line'

const Sorting = () => {
  let index = 1;
  const [data, setData] = useState(new Array(24).fill({
    style: {
      backgroundColor: 'green',
    }
  }));
  const container = useRef();
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (container.current) {
      setHeight(`${(container.current.offsetWidth / 24)}px`);
    }
  }, []);

  return(
    <div style={{height: 'auto', width: '100%', padding: 10, backgroundColor: 'white'}} ref={ container }>
      {data.map((d, index) => <Line data={data} height={height}/>)}
    </div>
  )
}

export default Sorting;
