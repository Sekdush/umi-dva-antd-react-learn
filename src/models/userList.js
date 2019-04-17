import { stringify } from 'qs';
import APIFunction from '../services/index';
export default {
  namespace: 'userList',
  state: {
    tableData: {},
  },
  effects: {
    *getUserList({ data }, { call, put, select }) {
      //   const num = yield select((state) => state.testPage.num) //取命名空间为testPage的model的state里的num
      const resp = yield call(APIFunction.queryUserInfo, data); // 请求后台，获取返回的数据
      yield put({
        type: 'setTableData', // 这里触发本model的方法，可以不跟命名空间。这里触发说明reducers中的showShopping方法
        resp, // shoppingStore:shoppingStore ,es6简写，把数据传给type指定的方法
      });
    },
    *addUser({ data,setModalVisible,queryData }, { call, put, select }) {
      const resp = yield call(APIFunction.addUser, data); // 请求后台，获取返回的数据
      if(resp.code==200){
        setModalVisible(false)
        yield put({
          type: 'getUserList',
          data:queryData,
        });
      }
    },
    *updateUser({ data,setModalVisible,queryData }, { call, put, select }) {
      const resp = yield call(APIFunction.updateUser, data); // 请求后台，获取返回的数据
      if(resp.code==200){
        setModalVisible(false)
        yield put({
          type: 'getUserList',
          data:queryData,
        });
      }
    },
    *deleteUser({ data,queryData }, { call, put, select }) {
      const resp = yield call(APIFunction.deleteUser, data); // 请求后台，获取返回的数据
      if(resp.code==200){
        yield put({
          type: 'getUserList',
          data:queryData,
        });
      }
    },
  },
  reducers: {
    setTableData(state, { resp }) {
      // 接收action,并解构出来
      return { ...state, tableData: resp.data };
    },
  },
  subscriptions: {
    setup({ dispatch, history, query, store }) {
      return history.listen(({ pathname, search }) => {
        if (pathname === '/userList') {
          // 监听进入testPage页时，做些操作
          dispatch({ type: 'getUserList'});
        }
      });
    },
  },
};
