<template>
  <div class="layout">
    <SidebarComponent></SidebarComponent>
    <div class="w-100">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import SidebarComponent from '@/components/layouts/sidebar-layout.vue'

export default{
  components:{
    SidebarComponent
  },
  data(){
    return{

    }
  },
}

</script>

<style scoped>
.layout{
  display: flex;
}
</style>