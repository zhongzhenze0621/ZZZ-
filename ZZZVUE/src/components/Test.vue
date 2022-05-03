<template>
  
  <div>
      <ul>
          <li @click='navhander(index)' v-for="(item,index) in navList" :key='item.id' :class="{active:index==navindex}">
              <a>{{item.name}}</a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
        navList:[],
        navindex:0
  

    }
  },
  methods:{
      //获取分类列表的数据
      getlist(){
          this.$axios.get('https://api.luffycity.com/api/v1/course/category/free/?courseType=free')
          .then((res)=>{
              console.log(res)
              var data=res.data;
              if (res.data.code==0){
                  this.navList=data.data;
                  console.log(this.navList)
              }
          })
          .catch((err)=>{
              console.log('获取结果失败',err)
          })
      },
      navhander(index){
          this.navindex=index
      }
  },
  created(){
      this.getlist()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li.active{
    color:red;
}
</style>
