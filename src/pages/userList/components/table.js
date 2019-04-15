import React, { Component } from 'react';
import { Table, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import ActionBar from './actionBar'



class table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current:0,
            searchText: '',
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
            pagination:{
                position:'bottom',
                total:100,
                showTotal:(total, range) => `${range[0]}-${range[1]} of ${total} items`,
                pageSize:10,
                defaultCurrent:1,
                onChange:this.onPageChange
            },
            data : [{
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
            }, {
                key: '2',
                name: 'Joe Black',
                age: 42,
                address: 'London No. 1 Lake Park',
            }, {
                key: '3',
                name: 'Jim Green',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
            }, {
                key: '4',
                name: 'Jim Red',
                age: 32,
                address: 'London No. 2 Lake Park',
            }]
        }
    }
    render() {
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
        },{
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record) => (
              this.state.data.length >= 1
                ? (
                  <Button  onClick={() => this.addOrModifyUser(record.key)}>
                    修改{text}
                  </Button>
                ) : null
            ),
          }];
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
        <>
            <ActionBar hasSelected={hasSelected}></ActionBar>
            <Table pagination ={this.state.pagination} loading={this.state.loading} rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
        </>
        );
    }
    addOrModifyUser=(key)=>{
        console.info(key)
    }
    onPageChange = (page) => {
        this.setState({
            current: page,
        });
    }
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }
}

export default table;