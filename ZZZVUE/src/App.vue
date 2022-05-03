<template>
    
  <div id="app">
   
 
<el-container>
  <el-header>
   
    ZZZ测试平台


  </el-header>
  <el-container>
    <el-aside width="200px">
          <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :router="true">
       <el-menu-item index="1" route='/project'>
        <i class="el-icon-menu"></i>
        <span slot="title">项目管理</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>业务造数</span>
        </template>
      
     
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
    
      </el-submenu>
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <span slot="title">Mock工具</span>
      </el-menu-item>
      <el-menu-item index="4" route="/Test">
        <i class="el-icon-setting"></i>
        <span slot="title">测试</span>
      </el-menu-item>
    </el-menu>


      
    </el-aside>







    <el-main>
      
      <router-view/>
    </el-main>
  </el-container>
</el-container>



 
 

   
 




   
  </div>
</template>

<script>
export default {
  name: 'App',
    data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
  }
</script>

<style>
  .el-header{
    background-color:  #409EFF;
    color: #333;
    text-align: left;
    line-height: 60px;
    font-weight:bold;
    
  }
    .el-main {
    background-color: #f2f7fc;
    color: #333;
    line-height: 100px;
  } 
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
