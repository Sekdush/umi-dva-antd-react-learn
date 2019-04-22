import Api from '../services';
import { message as antdMessage } from 'antd';

let { queryUserInfo, addUser, updateUser, deleteUser } = Api;
export default {
  namespace: 'userList',
  state: {
    tableData: {},
  },
  effects: {
    *getUserList({ data }, { call, put, select }) {
      //   const num = yield select((state) => state.testPage.num) //取命名空间为testPage的model的state里的num
      const resp = yield call(queryUserInfo, data); // 请求后台，获取返回的数据
      let { payload, code, message } = resp;
      console.info(message);
      if (code === 200) {
        antdMessage.success(message);
      }
      yield put({
        type: 'setTableData', // 这里触发本model的方法，可以不跟命名空间。这里触发说明reducers中的showShopping方法
        payload, // shoppingStore:shoppingStore ,es6简写，把数据传给type指定的方法
      });
    },
    *addUser({ data, setModalVisible, queryData }, { call, put, select }) {
      const resp = yield call(addUser, data); // 请求后台，获取返回的数据
      let { code, message } = resp;
      if (code === 200) {
        antdMessage.success(message);
        setModalVisible(false);
        yield put({
          type: 'getUserList',
          data: queryData,
        });
      }
    },
    *updateUser({ data, setModalVisible, queryData }, { call, put, select }) {
      const resp = yield call(updateUser, data); // 请求后台，获取返回的数据
      let { code, message } = resp;
      if (code === 200) {
        setModalVisible(false);
        antdMessage.success(message);
        yield put({
          type: 'getUserList',
          data: queryData,
        });
      }
    },
    *deleteUser({ data, queryData, reSetSelected }, { call, put, select }) {
      const resp = yield call(deleteUser, data); // 请求后台，获取返回的数据
      let { code, message } = resp;
      if (code === 200) {
        antdMessage.success(message);
        reSetSelected();
        yield put({
          type: 'getUserList',
          data: queryData,
        });
      }
    },
  },
  reducers: {
    setTableData(state, { payload }) {
      // 接收action,并解构出来
      return { ...state, tableData: payload };
    },
  },
  subscriptions: {
    setupUserList({ dispatch, history, query, store }) {
      return history.listen(({ pathname, search }) => {
        if (pathname === '/userList') {
          // 监听进入testPage页时，做些操作
          dispatch({ type: 'getUserList' });
        }
      });
    },
  },
};
