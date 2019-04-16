import Mock from 'mockjs';
const { Random } = Mock;
// let userList = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Joe Black',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Jim Green',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//     age: 32,
//     address: 'London No. 2 Lake Park',
//   },
// ];
let userList = [];
for (let i = 1; i <= 100; i++) {
  userList.push({ id: i, name: Random.cname(), address: Random.county(true) });
}
export default {
  //   // 支持值为 Object 和 Array
  //   'GET /api/userList': {
  //     data: {
  //       list: [],
  //       total: 100,
  //     },
  //   },
  'GET /api/userList': Mock.mock({
    data: { 'list|1-10': userList, total: 10 },
  }),
};
