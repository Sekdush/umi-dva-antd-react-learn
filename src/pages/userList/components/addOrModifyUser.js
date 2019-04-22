import React, { Component } from 'react';
import { Modal, Input, Icon, InputNumber, Form } from 'antd';
import classNames from 'classnames';
class addOrModifyUserModal extends Component {
  // componentWillReceiveProps(props){
  //   this.setState({
  //     modalVisible:props.modalVisible
  //   })
  // }

  render() {
    return (
      <>
        <Modal
          title={this.props.isModify ? '修改' : '添加'}
          centered
          okText={this.props.isModify ? '修改' : '添加'}
          cancelText={'取消'}
          visible={this.props.modalVisible}
          onOk={this.props.isModify ? () => this.props.onModify() : () => this.props.onAdd()}
          onCancel={() => this.props.setModalVisible(false)}
        >
          <Form.Item>
            <Input
              className={classNames()}
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="input with user name"
              allowClear
              onChange={e => this.props.onChange('name', e)}
              value={this.props.formData.name}
            />
          </Form.Item>
          <Form.Item>
            <InputNumber
              min={0}
              max={130}
              className={classNames('width-100')}
              placeholder="input with user age"
              allowClear
              onChange={e => this.props.onChange('age', e)}
              value={this.props.formData.age}
            />
          </Form.Item>
          <Form.Item>
            <Input
              className={classNames()}
              prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="input with user address"
              allowClear
              onChange={e => this.props.onChange('address', e)}
              value={this.props.formData.address}
            />
          </Form.Item>
        </Modal>
      </>
    );
  }
}

export default addOrModifyUserModal;
