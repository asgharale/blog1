<template>
  <HeaderComponent/>
  
  <section id="view" class="container-fluid">
    <router-view/>
  </section>

  <FooterComponent/>
</template>

<script>
  import HeaderComponent from '@/components/header.vue';
  import FooterComponent from '@/components/footer.vue';

  export default{
    name: 'app',
    components:{
      HeaderComponent,
      FooterComponent
    }
  }
</script>

<style scoped lang="scss">

</style>
