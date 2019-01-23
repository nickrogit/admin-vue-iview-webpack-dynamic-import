import router from '@/router'
import menuData from '@/utils/menuData'
/* import {getMenuList} from '@/services/app' */

const state = {
  menu: JSON.parse(localStorage.getItem('menu')) || [], // 主菜单
  menuActive: localStorage.getItem('menuActive') || '/', // 激活主菜单
  menuOpened: localStorage.getItem('menuOpened') || '' // 展开子菜单
}

const getters = {
  getMenu: state => state.menu,
  getMenuActive: state => state.menuActive,
  getMenuOpened: state => state.menuOpened
}

/*let menuData = [
  {
    name: '主页',
    path: '/'
  }, {
    name: '用户生日管理',
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
]*/

const mutations = {
  // 获取菜单
  MENU: (state, data) => {
    state.menu = data
    localStorage.setItem('menu', JSON.stringify(data))
  },
  // 激活菜单
  MENU_SELECT: (state, data) => {
    const open = `/${data.split('/')[1]}`
    router.push(data) // 路由跳转
    state.menuActive = data // 激活菜单
    state.menuOpened = open // 展开菜单
    localStorage.setItem('menuActive', data)
    localStorage.setItem('menuOpened', open)
  },
  // 跳由跳转后 改变菜单选中状态 （未使用MENU_SELECT时，router/index.js设置）
  MENU_ON: (state, data) => {
    const open = `/${data.split('/')[1]}`
    router.push(data) // 路由跳转
    state.menuActive = data // 激活菜单
    state.menuOpened = open // 展开菜单
    localStorage.setItem('menuActive', data)
    localStorage.setItem('menuOpened', open)
  },
  // 重置菜单
  MENU_RESET: (state) => {
    state.menu = []
    state.menuActive = '/'
    state.menuOpened = ''
    localStorage.clear()
  }
}

const actions = {
  // 获取菜单
  handleMenu: ({commit}) => {
    commit('MENU', menuData.menuData)
    router.push('/') // 路由跳转首页

    /* getMenuList().then(res => {
      console.log(res.data)
      commit('MENU', res.data)
      router.push('/') // 路由跳转首页
    }) */
  }
  // 激活菜单
  // handleMenuSelect: ({
  //   commit
  // }, name) => {
  //   commit('MENU_SELECT', name)
  // }
}

export default {state, getters, mutations, actions}
