<template>
  <div id="root">
    <div class="todo-container">
      <TesT></TesT>
      <TesT2></TesT2>
      <TesT3></TesT3>
    </div>
  </div>
</template>

<script>
import TesT from "@/components/Test.vue";
import TesT2 from '@/components/Test2.vue'
import TesT3 from '@/components/Test3.vue'

export default {
  name: "App",
  components: {TesT, TesT2, TesT3}
}
</script>

<style>

</style>