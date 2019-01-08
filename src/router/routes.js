// 路由配置
export default[
  { path: '/login', name: 'login', component: () => import('@/views/Login') },
  {
    path: '/',
    redirect: '/',
    name: 'Layout',
    component: () => import('@/views/common/layouts/Layout'),
    children: [
      {path: '/', name: 'Dashboard', component: () => import('@/views/Dashboard')},
      {path: '/hello/hello-world', name: 'HelloWorld', component: () => import('@/components/HelloWorld')},
      {path: '/birthManage/users', name: 'Users', component: () => import('@/views/birthManage/Users')},
      {path: '/birthManage/usersBirthday', name: 'UsersBirthday', component: () => import('@/views/birthManage/UsersBirthday')},
      {path: '/birthManage/usersBirthdayImport', name: 'UsersBirthdayImport', component: () => import('@/views/birthManage/UsersBirthdayImport')}
    ]
  },
  { path: '*', name: '404', component: () => import('@/views/common/pages/NotFound') }
]
