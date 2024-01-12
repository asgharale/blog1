<template>
<div id="home" class="container-fluid m2-vr">
  <div class="col-9 col-md-12 col-lg-11">
    
    <div id="latest_articles" class="container-fluid">
      <article class="article wrapper p1 m2 col-3 col-md-5 col-sm-11" v-for="post in posts" :key="post.id">
        <router-link to="/post">
          <h1>{{ post.title }}</h1>
        </router-link>
      </article>
    </div>

  </div>

  <sidebar/>
</div>
</template>

<script>
import axios from 'axios';
import sidebar from '@/components/sidebar.vue';

export default {
  name: 'HomeView',
  data(){
    return {
      posts: []
    }
  },
  components: {
    sidebar,
  },
  mounted(){
    axios.get("http://127.0.0.1:8000/siteapi/posts/v1/posts")
    .then(response => this.posts = response.data.results)
  }
}
</script>
<style scoped>
#home{
  align-items: flex start;
}
.article{

}
</style>