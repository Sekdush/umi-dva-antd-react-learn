import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

const { Footer } = Layout;
class footer extends Component {
  componentWillUnmount() {}
  render() {
    return <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>;
  }
}

export default footer;
