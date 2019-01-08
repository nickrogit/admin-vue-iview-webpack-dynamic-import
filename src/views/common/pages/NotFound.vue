<template>
<div id="not-found">
  <h1 class="title">404</h1>
  <h2>抱歉，您所访问的页面不存在！</h2>
  <h3 class="content"> 系统将在
    <span class="count">{{ count }}</span>
    秒后为您跳转
  </h3>
</div>
</template>
<script>
export default {
  name: 'not-found',
  data: () => ({
    count: 3
  }),
  mounted() {
    setInterval(() => {
      this.count -= 1
    }, 1000)
    setTimeout(() => {
      const url = localStorage.getItem('menuActive') || '/'
      this.$router.push(url) // 路由跳转
    }, 3000)
  }
}
</script>
<style lang="scss" scoped>
#not-found {
    text-align: center;
    .title {
        color: coral;
    }
    .content {
        color: green;
    }
    .count {
        color: red;
        font-size: 24px;
    }
}
</style>
