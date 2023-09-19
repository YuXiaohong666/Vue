<template>
  <div class="container">
    <CateGory title="美食">
      <img slot="center" alt="" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg">
      <a slot="footer" href="yuxiaohong.cn">更多美食</a>
    </CateGory>
    <CateGory :listData="games" title="游戏">
      <ul slot="center">
        <li v-for="(item,index) in games" :key="index">{{ item }}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="yuxiaohong.cn">单机游戏</a>
        <a href="yuxiaohong.cn">网络游戏</a>
      </div>
    </CateGory>
    <CateGory title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <!--      只有在template标签中才可以使用v-slot:footer这样的写法-->
      <template v-slot:footer>
        <div class="foot">
          <a href="yuxiaohong.cn">经典</a>
          <a href="yuxiaohong.cn">热门</a>
          <a href="yuxiaohong.cn">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>

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
.container, .foot {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}
</style>