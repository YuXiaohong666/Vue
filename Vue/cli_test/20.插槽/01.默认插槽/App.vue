<template>
  <div class="container">
    <CateGory title="美食">
      <img alt="" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg">
    </CateGory>
    <CateGory :listData="games" title="游戏">
      <ul>
        <li v-for="(item,index) in games" :key="index">{{ item }}</li>
      </ul>
    </CateGory>
    <CateGory title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </CateGory>
  </div>

</template>

<script>

import CateGory from "@/components/Count.vue";

export default {
  name: "App",
  components: {CateGory},
  data() {
    return {
      foods: ['火锅', '烧烤', '自助', '烤肉'],
      games: ['APEX', 'LOL', 'PUBG', 'R6S'],
      films: ['狂飙', '拆弹专家', '爆破', '敢死队']
    }
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>