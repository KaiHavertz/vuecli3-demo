<template>
  <div id="app">
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1"
                         :options="option1" />
      <van-dropdown-item v-model="value2"
                         :options="option2" />
    </van-dropdown-menu>
  </div>
</template>

<script>
import img from './assets/img/1.png'
import student from './api/wardemo/student'
export default {
  name: 'App',
  data () {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '最新歌单', value: 0 },
        { text: '最热歌单', value: 1 },
        { text: '我的歌单', value: 2 }
      ],
      option2: [
        { text: '游戏', value: 'a' },
        { text: '继续游戏', value: 'b' },
        { text: '游戏排名', value: 'c' },
      ]
    }
  },
}
</script>
