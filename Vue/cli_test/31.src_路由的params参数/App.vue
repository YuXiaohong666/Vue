<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <BanneR></BanneR>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--          原始html文件中会用a标签实现页面的跳转-->
          <!--          <a class="list-group-item active" href="./about.html">About</a>-->
          <!--          <a class="list-group-item" href="./home.html">Home</a>-->

          <!--          router-link实现路由的切换，且在经过解析之后到页面上之后会变成a标签-->
          <!--          active-class：激活时的样式-->
          <router-link :to="{name:'guanyu'}" active-class="active" class="list-group-item">About</router-link>
          <router-link active-class="active" class="list-group-item" to="/home">Home</router-link>


        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--            指定组件的呈现位置-->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import BanneR from "@/components/Banner.vue";

export default {
  name: "App",
  components: {BanneR},
}
</script>

<style>

</style>