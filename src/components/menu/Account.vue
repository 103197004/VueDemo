<template>
  <div>
    <h1>Account</h1>
    <el-button type='success' @click="addUser">增加</el-button>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Account",
  mounted() {
    this.$axios.get("/api/user/list").then(resp => {
      console.log(resp);
    });
  },
  methods: {
    addUser:function(){
      this.$axios.get('/api/user/add').then(resp=>{
        console.log(resp)
      })
    }
  },
};
</script>

<style>
</style>