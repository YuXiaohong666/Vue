<template>
  <CounT></CounT>
</template>

<script>

import CounT from "@/components/Count.vue";

export default {
  name: "App",
  components: {CounT}

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