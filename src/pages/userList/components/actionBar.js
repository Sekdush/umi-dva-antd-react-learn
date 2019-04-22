import React, { Component } from 'react';
import { Divider, Input, Button, Icon, InputNumber, Modal } from 'antd';
import classNames from 'classnames';

class actionBar extends Component {
  render() {
    const { confirm } = Modal;
    let that = this;
    function deleteConfirm() {
      confirm({
        title: 'Do you want to delete these items?',
        content: 'When clicked the OK button, these items will be delete',
        onOk: () => that.props.deleteUser(),
        onCancel() {},
      });
    }
    return (
      <>
        <div className={classNames('flex-between')}>
          <div className={classNames('flex-start', 'override-ant-input')}>
            <Input
              className={classNames('width-25')}
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="input with user name"
              allowClear
              value={this.props.searchInputData.name}
              onChange={e => this.props.onChange('name', e)}
            />
            <InputNumber
              min={0}
              max={130}
              className={classNames('width-25')}
              prefix={<Icon type="smile" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="input with user age"
              allowClear
              value={this.props.searchInputData.age}
              onChange={e => this.props.onChange('age', e)}
            />
            <Input
              className={classNames('width-25')}
              prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="input with user address"
              allowClear
              value={this.props.searchInputData.address}
              onChange={e => this.props.onChange('address', e)}
            />
            <Button type="primary" onClick={this.props.searchUser}>
              查找
            </Button>
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
              onClick={deleteConfirm}
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
