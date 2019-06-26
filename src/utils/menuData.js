export default {
  // 菜单
  menuData: [
    {
      name: '主页',
      path: '/'
    }, {
      name: '用户管理',
      path: '/birthManage',
      children: [
        {
          name: '用户列表',
          path: '/birthManage/usersBirthday'
        },
        {
          name: '批量导入',
          path: '/birthManage/UsersBirthdayImport'
        }
      ]
    }
  ]
}
