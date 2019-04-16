import React, { Component } from 'react';
import { Table, Button } from 'antd';

class table extends Component {
  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) =>
          this.props.tableData.list.length >= 1 ? (
            <Button onClick={() => this.props.modifyUser(record)}>修改{text}</Button>
          ) : null,
      },
    ];
    const { selectedRowKeys } = this.props;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.props.onSelectChange,
    };
    const pagination = {
      position: 'bottom',
      total: this.props.tableData.total,
      showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
      pageSize: 10,
      defaultCurrent: 1,
      onChange: this.props.onPageChange,
    };
    return (
      <>
        <Table
          pagination={pagination}
          loading={this.props.loading}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.props.tableData.list}
        />
      </>
    );
  }
}

export default table;
