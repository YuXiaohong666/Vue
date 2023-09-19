<template>
  <div class="container">
    <CateGory title="游戏">
      <template scope="xiaohong">
        <ul>
          <li v-for="(item,index) in xiaohong.games" :key="index">{{ item }}</li>
        </ul>
      </template>

    </CateGory>
    <CateGory title="游戏">
      <template scope="xiaohong">
        <ol>
          <li v-for="(item,index) in xiaohong.games" :key="index">{{ item }}</li>
        </ol>
      </template>
    </CateGory>
    <CateGory title="游戏">
      <template scope="xiaohong">
        <h4 v-for="(item,index) in xiaohong.games" :key="index">{{ item }}</h4>
      </template>
    </CateGory>

  </div>
</template>

<script>

import CateGory from "@/components/Count.vue";

export default {
  name: "App",
  components: {CateGory}

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