<template>
  <div>
    <button>原生的按钮</button>
    <input type="text">
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <el-date-picker
        v-model="value1"
        placeholder="选择日期"
        type="date">
    </el-date-picker>
    <el-row>
      <el-button circle icon="el-icon-search"></el-button>
      <el-button circle icon="el-icon-edit" type="primary"></el-button>
      <el-button circle icon="el-icon-check" type="success"></el-button>
      <el-button circle icon="el-icon-message" type="info"></el-button>
      <el-button circle icon="el-icon-star-off" type="warning"></el-button>
      <el-button circle icon="el-icon-delete" type="danger"></el-button>
    </el-row>
  </div>
</template>

<script>


export default {
  name: "App"
}
</script>

<style>

</style>