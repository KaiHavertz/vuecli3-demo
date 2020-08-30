<template>
  <div id="app">
    <van-button type="default"
                @click="showPopup">默认按钮</van-button>
    <van-button type="primary"
                @click="showPopup">主要按钮</van-button>
    <van-button type="info"
                @click="showPopup">信息按钮</van-button>
    <van-button type="warning"
                @click="showPopup">警告按钮</van-button>
    <van-button type="danger"
                @click="showPopup">危险按钮</van-button>
    <van-popup v-model="show">弹出层内容</van-popup>
  </div>
</template>

<script>


export default {
  name: 'App',
  data () {
    return {
      show: false
    }
  },
  methods: {
    showPopup () {
      this.show = true;
    }
  }

}
</script>

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
