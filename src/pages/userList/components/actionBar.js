import React, { Component } from 'react';
import { Divider, Input,Button,Icon,InputNumber  } from 'antd';
import classNames from 'classNames';
import addOrModifyUserModal from './addOrModifyUser';

class actionBar extends Component {
    state={
        modalVisible:false
    }
    
    render() {
        return (
            <>
                <div className={classNames('flex-between')}>
                    <div className={classNames('flex-start','override-ant-input')}>
                        <Input className={classNames('input-width-sm')} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>} placeholder="input with user name" allowClear onChange={(e)=>this.onChange('name',e)} />
                        <InputNumber min={0} max={130} className={classNames('input-width-sm')} prefix={<Icon type="smile" style={{ color: 'rgba(0,0,0,.25)' }}/>} placeholder="input with user age" allowClear onChange={(e)=>this.onChange('age',e)} />
                        <Input className={classNames('input-width-sm')} prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }}/>} placeholder="input with user address" allowClear onChange={(e)=>this.onChange('address',e)} />
                        <Button type="primary" >查找</Button>
                    </div>
                    <div className={classNames('flex-end')}>
                        <Button type="primary" className={classNames('margin-right-sm')} onClick={this.addOrModifyUser}>添加</Button>
                        <Button type="danger" disabled={!this.props.hasSelected} className={classNames('margin-right-sm')}>删除</Button>
                    </div>
                </div>
                <addOrModifyUserModal modalVisible={this.state.modalVisible}></addOrModifyUserModal>
                <Divider orientation="left">用户列表</Divider>
            </>
            
        );
        
    }
    onChange = (type,e) => {
        console.info(type)
        let value;
        if(type==='name'){
            value=e.target.value;
        }else if(type==='age'){
            value=e;
        }else{
            value=e.target.value;
        }
        console.info(value)
      };
    addOrModifyUser=()=>{
        this.setState({
            modalVisible:true
        })
    }
    
    
}

export default actionBar;