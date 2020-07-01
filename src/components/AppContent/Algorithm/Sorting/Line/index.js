import React from 'react';
import { Row, Col } from 'antd'

const Line = (props) => {
  const {data, height} = props;
  return(
      <Row style={{height: height, width: '100%'}}>
        {data.map((d, index) => <Col key={index} style={d.style} span={1}></Col>)}
      </Row>
  )
}

export default Line;
