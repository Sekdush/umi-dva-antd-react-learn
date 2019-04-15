import React, { Component } from 'react';
import { Modal, Input,Icon,InputNumber  } from 'antd';
import classNames from 'classNames';
class addOrModifyUserModal extends Component {
    componentWillMount(){

    }
    componentDidUpdate(){
        
    }
    
    render() {
        console.info(this.props)
        return (
            <>
                <Modal
                    title="Vertically centered modal dialog"
                    centered
                    okText={'确认'}
                    cancelText={'取消'}
                    visible={this.state.modalVisible}
                    onOk={() => this.setModalVisible(false)}
                    onCancel={() => this.setModalVisible(false)}
                >
                    <Input
                        className={classNames('input-width-sm')}
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="input with user name"
                        allowClear
                        onChange={(e) => this.onChange('name', e)}
                        value={this.state.formData.name}
                    />
                    <InputNumber
                        min={0} max={130}
                        className={classNames('input-width-sm')}
                        prefix={<Icon type="smile" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="input with user age"
                        allowClear
                        onChange={(e) => this.onChange('age', e)}
                        value={this.state.formData.age}
                    />
                    <Input
                        className={classNames('input-width-sm')}
                        prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="input with user address"
                        allowClear onChange={(e) => this.onChange('address', e)}
                        value={this.state.formData.address}
                    />
                </Modal>
            </>
        );
    }
    setModalVisible(modalVisible) {
        this.setState({ modalVisible });
    }
    onChange = (type, e) => {
        let value;
        if (type === 'name') {
            value = e.target.value;
            this.setState({
                'formData.name':value
            })
        } else if (type === 'age') {
            value = e;
        } else {
            value = e.target.value;
        }
        console.info(this.state.formData)
    };
}

export default addOrModifyUserModal;


