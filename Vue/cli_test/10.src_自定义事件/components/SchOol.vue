<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<script>
export default {
  name: "SchOol",
  data() {
    return {
      name: 'GEO',
      address: '石家庄'
    }
  },
  props: ['getSchoolName'],
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name)
    }
  }
}
</script>

<style scoped>
.school {
  background-color: aqua;
  padding: 5px;
  margin-top: 30px;
}
</style>