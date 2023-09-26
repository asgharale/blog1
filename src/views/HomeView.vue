<template>
<div id="home" class="container-fluid m2-vr">
  <div class="col-9 col-md-12 col-lg-11 wrapper">
    <h1>Home </h1>
  </div>

  <sidebar/>
</div>
</template>

<script>
import sidebar from '@/components/sidebar.vue';

export default {
  name: 'HomeView',
  components: {
    sidebar,
  }
}
</script>
<style scoped>
#home{
  align-items: flex start;
}
</style>