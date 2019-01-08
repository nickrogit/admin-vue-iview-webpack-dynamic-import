// 系统参数配置
// const version = 'v1'
let host
switch (process.env.NODE_ENV) {
  case 'production':
    host = 'https://api.xx.com'
    break
  case 'release':
    host = 'https://api.r.xx.com'
    break
  case 'testing':
    host = 'http://172.29.8.45:8060'
    break
  default:
    host = 'http://192.168.37.74:8080/'
}

export default {
  // headers: {
  //   Accept: `application/vnd.xx.${version}+json`
  // },
  baseURL: host, // 接口地址
  timeout: 60000, // 请求超时
  version: '1.0.0' // 应用版本
}
