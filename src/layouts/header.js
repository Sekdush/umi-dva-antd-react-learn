import React, { Component } from 'react';
import { Layout, Row, Col, Menu } from 'antd';
import classNames from 'classNames';
import styles from './index.less';

const { Header } = Layout;

class header extends Component {
  componentWillUnmount() {}
  render() {
    return (
      <Header>
        <Row>
          <Col span={4}>
            <div className={classNames(styles.logo)} />
          </Col>
          <Col span={15}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
    );
  }
}

export default header;
