import React, { Component } from 'react';
import { Divider, Input, Button, Icon, InputNumber } from 'antd';
import classNames from 'classNames';

class actionBar extends Component {
  render() {
    return (
      <>
        <div className={classNames('flex-between')}>
          <div className={classNames('flex-start', 'override-ant-input')}>
            <Input
              className={classNames('width-25')}
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="input with user name"
              allowClear
              onChange={e => this.props.onChange('name', e)}
            />
            <InputNumber
              min={0}
              max={130}
              className={classNames('width-25')}
              prefix={<Icon type="smile" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="input with user age"
              allowClear
              onChange={e => this.props.onChange('age', e)}
            />
            <Input
              className={classNames('width-25')}
              prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="input with user address"
              allowClear
              onChange={e => this.props.onChange('address', e)}
            />
            <Button type="primary">查找</Button>
          </div>
          <div className={classNames('flex-end')}>
            <Button
              type="primary"
              className={classNames('margin-right-sm')}
              onClick={this.props.addUser}
            >
              添加
            </Button>
            <Button
              type="danger"
              disabled={!this.props.hasSelected}
              className={classNames('margin-right-sm')}
            >
              删除
            </Button>
          </div>
        </div>
        <Divider orientation="left">用户列表</Divider>
      </>
    );
  }
}

export default actionBar;
