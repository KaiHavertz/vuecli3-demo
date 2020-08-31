<template>
  <div id="app">
    <image v-bind:src="src">
    </image>
    <image src="@/assets/img/logo.png">
    </image>
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
    <van-button type="axios"
                @click="axiosPro">axiosPro</van-button>
    <van-button type="axios"
                @click="useAxios">useAxios</van-button>
    <van-popup v-model="show">{{msg}}</van-popup>
  </div>
</template>

<script>

import student from './api/wardemo/student'
export default {
  name: 'App',
  data () {
    return {
      src: '../src/assets/img/2.PNG',
      show: false,
      msg: '弹出层内容',
      products: [{
        name: "iphone",
        stock: 10
      },
      {
        name: "xiao mi",
        stock: 1
      },
      {
        name: "huawei",
        stock: 5
      },
      ]
    }
  },
  methods: {
    useAxios () {
      alert('hello,不推荐使用未封装的 axios ')
    },
    showPopup () {
      this.show = true
    },
    axiosPro () {
      student.queryAllStudent().then(res => {
        this.msg = res
      })
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
