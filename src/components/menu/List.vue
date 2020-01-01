<template>
  <div>
      <h1>List</h1>
      <el-row>
      <el-button type="warning" @click="add">增加</el-button>
      <el-button type="danger" @click="reduce">减少</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
    name:'List',
  methods: {
    add:function(){
      this.$store.dispatch('addCountSync');
    },
    reduce:function(){
      this.$store.dispatch('reduceCountSync');
    }
  },
}
</script>

<style>

</style>