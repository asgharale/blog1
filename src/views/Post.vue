<template>
<div class="container-fluid">
    <div class="col-9 col-md-12 col-lg-11">
        <h1>
            {{ article.title }}
        </h1>
    </div>
    <sidebar/>
</div>
</template>
<script>
import sidebar from '@/components/sidebar.vue';

export default{
    name: 'post-view',
    components:{
        sidebar
    },
    mounted(){
        this.$store.dispatch("fetchArticle", this.$route.params.link)
    },
    computed: {
        article(){
            return this.$store.getters.getArticle
        }
    }
}
</script>