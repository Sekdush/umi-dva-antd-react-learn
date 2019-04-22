import Mock from 'mockjs';
const { Random } = Mock;
let userList = [];
for (let i = 1; i <= 100; i++) {
  userList.push({
    key: i,
    name: Random.cname(),
    age: Random.natural(0, 100),
    address: Random.county(true),
  });
}
export default {
  //   // 支持值为 Object 和 Array
  //   'GET /api/userList': {
  //     data: {
  //       list: [],
  //       total: 100,
  //     },
  //   },
  'GET /api/userList': (req, res) => {
    let resUserList = [];
    if (req.query.name || req.query.age || req.query.address) {
      let { name, age, address } = req.query;
      userList.forEach(function(item, index) {
        if (
          item.name.indexOf(name) >= 0 &&
          (age === '' ? true : item.age === age) &&
          item.address.indexOf(address) >= 0
        ) {
          resUserList.push(item);
        }
      });
    } else {
      resUserList = userList;
    }
    res.send(
      Mock.mock({
        payload: { list: resUserList, total: resUserList.length },
        message: '查询成功',
        code: 200,
      }),
    );
  },
  'post /api/user/add': (req, res) => {
    req.body.key = userList[userList.length - 1].key + 1;
    userList.push(req.body);
    res.send(
      Mock.mock({
        message: '添加成功',
        code: 200,
      }),
    );
  },

  'post /api/user/update': (req, res) => {
    let user = req.body;
    for (let i = 0, len = userList.length; i < len; i++) {
      if (userList[i].key === user.key) {
        userList[i] = user;
        break;
      }
    }
    res.send(
      Mock.mock({
        message: '修改成功',
        code: 200,
      }),
    );
  },

  'post /api/user/delete': (req, res) => {
    let deleteUserKeyList = req.body;
    for (let i = userList.length - 1; i >= 0; i--) {
      for (let j = 0, len = deleteUserKeyList.length; j < len; j++) {
        if (userList[i].key === deleteUserKeyList[j]) {
          userList.splice(i, 1);
          break;
        }
      }
    }
    res.send(
      Mock.mock({
        message: '删除成功',
        code: 200,
      }),
    );
  },
};
