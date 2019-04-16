import React, { Component } from 'react';
import Table from './components/table';
import AddOrModifyUserModal from './components/addOrModifyUser';
import ActionBar from './components/actionBar';
import { cloneDeep } from 'lodash';
import { connect } from 'dva'; // connect用于组件连接models层数据

class userListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actionProps: {
        searchInputData: {
          name: '',
          age: null,
          address: '',
        },
        searchQueryData: {
          name: '',
          age: null,
          address: '',
        },
      },
      modalProps: {
        modalVisible: false,
        formData: {
          name: '',
          age: null,
          address: '',
        },
      },
      tableProps: {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,

      },
    };
  }

  render() {
    const { tableData } = this.props;
    const hasSelected = this.state.tableProps.selectedRowKeys.length > 0;
    return (
      <>
        <ActionBar
          {...this.state.actionProps}
          {...this.actionBarFunction}
          hasSelected={hasSelected}
        />
        <Table {...this.state.tableProps} {...this.tableFunction} tableData={tableData} />
        <AddOrModifyUserModal {...this.state.modalProps} {...this.modalFUnction} />
      </>
    );
  }
  actionBarFunction = {
    addUser: () => {
      let modalProps = this.state.modalProps;
      modalProps.modalVisible = true;
      modalProps.formData = {
        name: '',
        age: null,
        address: '',
      };
      this.setState({
        modalProps: modalProps,
      });
    },
    onChange: (type, e) => {
      let value;
      let actionProps = cloneDeep(this.state.actionProps);
      if (type === 'name') {
        value = e.target.value;
        actionProps.searchInputData.name = value;
      } else if (type === 'age') {
        value = e;
        actionProps.searchInputData.age = value;
      } else {
        value = e.target.value;
        actionProps.searchInputData.address = value;
      }
      this.setState({
        actionProps,
      });
    },
  };
  modalFUnction = {
    setModalVisible: modalVisible => {
      let modalProps = this.state.modalProps;
      modalProps.modalVisible = modalVisible;
      this.setState({ modalProps });
    },
    onChange: (type, e) => {
      let value;
      let modalProps = cloneDeep(this.state.modalProps);
      if (type === 'name') {
        value = e.target.value;
        modalProps.formData.name = value;
      } else if (type === 'age') {
        value = e;
        modalProps.formData.age = value;
      } else {
        value = e.target.value;
        modalProps.formData.address = value;
      }
      this.setState({
        modalProps: modalProps,
      });
    },
  };
  tableFunction = {
    modifyUser: row => {
      let modalProps = this.state.modalProps;
      modalProps.modalVisible = true;
      modalProps.formData = row;
      this.setState({
        modalProps: modalProps,
      });
    },
    onPageChange: page => {
      // this.setState({
      //   current: page,
      // });
    },
    onSelectChange: selectedRowKeys => {
      let tableProps = this.state.tableProps;
      tableProps.selectedRowKeys = selectedRowKeys;
      this.setState({ tableProps });
    },
  };
}
function mapStateToProps(state) {
  // 这个state是所有model层的state，这里只用到其中一个，所以state.testPage把命名空间为testPage这个model层的state数据取出来
  // es6语法解构赋值
  const { tableData } = state.userList;
  // 这里return出去的数据，会变成此组件的props，在组件可以通过props.num取到。props变化了，会重新触发render方法，界面也就更新了。
  return {
    tableData,
  };
}
// connect方法用来连接models层的state数据，参数常用的有2个，是第一个mapStateToProps，第二个mapDispatchToProps
// mapStateToProps按字面意思：把models层state数据变为组件的props
// mapDispatchToProps：用了此方法，dispatch只会在此方法里。不写该参数，dispatch会作为组件的props。(我平常用几乎不写该方法)
// export default connect(mapStateToProps, mapDispatchToProps)(userListPage);
export default connect(mapStateToProps)(userListPage);
