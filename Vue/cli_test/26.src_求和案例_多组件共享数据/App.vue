<template>
  <div>
    <CounT></CounT>
    <PersoN></PersoN>
  </div>
</template>

<script>
import PersoN from "@/components/Person.vue";
import CounT from "@/components/Count.vue";

export default {
  name: "App",
  components: {CounT, PersoN},
  mounted() {
    console.log(this)
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