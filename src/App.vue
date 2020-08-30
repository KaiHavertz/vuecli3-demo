<template>
  <div id="app">
    <li v-for="(item,index) in products"
        :key="index">
      库存: {{item.stock}}
    </li>
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

import student from './wardemo/student'
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
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
      axios.get('http://localhost:8080/wardemo/student/queryAllStudent', {
        headers: { 'Access-Control-Allow-Origin': '*' }
      })
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
