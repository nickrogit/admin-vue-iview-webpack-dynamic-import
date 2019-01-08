<template>
<div id="dashboard">
  <div class="home">
    欢迎使用<br/>佳兆业文体旅游集团人事后台管理系统
  </div>
</div>
</template>

<script>

/* import { getDashboard } from '@/services/app' */

export default {
  name: 'dashboard',
  data() {
    return {
      loading: false,
      dashData: []
    }
  },
  mounted() {
    /* this.getDashboard() */
  },
  methods: {
    /* getDashboard: function () {
      this.loading = true
      let para = {}
      setTimeout(() => {
        getDashboard(para).then(res => {
          this.dashData = res.data
          this.loading = false
        }).catch(() => {
          this.loading = false
        })
      }, 500)
    } */
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#dashboard {
  .home{
    height: calc(100vh - 60px - 32px - 32px);
    font-size: 32px;
    text-align: center;
    vertical-align: middle;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  overflow:hidden;
  .dbox{
    width: 32%;
    float: left;
    background:#4CB7ED;
    color: #fff;
    text-align: center;
    margin-right: 16px;
    margin-bottom: 16px;
    padding: 16px 0;
  }
  h1{
    font-weight: normal;
    font-style: normal;
    font-size: 16px;
    padding: 10px 0;
  }
  h2{
    font-weight: normal;
    font-style: normal;
    font-size: 28px;
    padding: 10px 0;
  }
}
</style>
