<template>
  <div>
    <SchOol></SchOol>
    <stuDent></stuDent>
  </div>
</template>

<script>
import StuDent from "@/components/StuDent.vue";
import SchOol from "@/components/SchOol.vue";

export default {
  name: "App",
  data() {
    return {
      msg: '欢迎学习Vue'
    }
  },

  methods: {
    showDOM() {
      console.log(this.$refs.title)
    }
  },
  components: {
    StuDent,
    SchOol
  }
}
</script>

<style scoped>

</style>