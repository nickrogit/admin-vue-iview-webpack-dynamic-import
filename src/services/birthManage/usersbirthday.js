import {ax} from '@/config/axios'

export const getUserList = params => ax.get('/user-birthday-list', {params: params}) // 列表
export const delUser = params => ax.post('/user-birthday-delete', params) // 删除
export const editUser = params => {
  const apiUrl = params.id
    ? '/user-birthday-edit' // 编辑
    : '/user-birthday-create' // 新增
  return ax.post(apiUrl, params)
}

/* export const getUserList = params => ax.get('/user-birthday-list', {params: params}) // 列表
export const delUser = params => ax.post('/user-birthday-delete', params) // 删除
export const editUser = params => {
  const apiUrl = params.id
    ? '/user-birthday-edit' // 编辑
    : '/user-birthday-create' // 新增
  return ax.post(apiUrl, params)
} */
