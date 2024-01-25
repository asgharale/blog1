<template>
<div id="home" class="container-fluid m2-vr">
  <div class="col-9 col-md-12 col-lg-11">
    <div class="container-fluid listed-items">
        <article class="article wrapper p1 m2 col-3 col-md-5 col-sm-11" v-for="article in latestArticles" :key="article.id">
            <div class="cen-text">
            <router-link :to="'/posts/'+article.link" style="align-items: center; width: inherit;">
                <img class="thumbnail" :src="article.thumbnail">
                <h1>{{ article.title }}</h1>
            </router-link>
            </div>
        </article>
    </div>
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
  },
  mounted(){
    this.$store.dispatch("fetchLatestArticles");
  },
  computed: {
    latestArticles(){
      return this.$store.getters.getLatestArticles
    }
  }
}
</script>
<style scoped>
#home{
  align-items: flex start;
}
</style>