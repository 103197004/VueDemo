<template>
  <div>
    <h1>System</h1>
    <el-row>
      <el-button type="warning" @click="add">增加</el-button>
      <el-button type="danger" @click="reduce">减少</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "System",
  methods: {
    add:function(){
      this.$store.commit('addCount');
    },
    reduce:function(){
      this.$store.commit('reduceCount');
    }
  },
};
</script>

<style>
</style>