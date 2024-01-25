<template>
<aside id="sidebar" class="col-2 col-lg-11 col-xl-3 col-md-12">
    <div class="side-topic wrapper">
        <p class="side-title p1-hr">
            <b>آخرین مطالب</b>
        </p>
        <div class="p1">
            <router-link :to="'/posts/'+article.link" v-for="article in latestArticles" :key="article.id">
                {{ article.title }}
                <br>
            </router-link>
        </div>
    </div>
    <div class="side-topic wrapper">
        <p class="side-title p1-hr">
            <b>دسته ها</b>
        </p>
        <div class="p1">
            <router-link :to="'/categories/'+cats.link" v-for="cat in cats" :key="cat.id">
                {{ cat.name }}
                <br>
            </router-link>
        </div>
    </div>
</aside>
</template>

<script>
export default{
    name: 'side-bar',
    mounted(){
        this.$store.dispatch("fetchLatestArticles");
        this.$store.dispatch("fetchCats");
    },
    computed:{
        latestArticles(){
            return this.$store.getters.getLatestArticles
        },
        cats(){
            return this.$store.getters.getCats
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';

#sidebar{
    align-self: flex-start;
}
.side-topic{
    box-sizing: border-box;
    border: solid 1px $lgray-color;
    border-radius: 1px;
    margin-bottom: 0.5rem;
}
.side-title{
    background-color: $lpri-color;
    color: $pri-color;
    border-bottom: solid 3px;
    line-height: 35px;
    font-size: 17px;
}
@media only screen and (max-width: $lg){
    #sidebar{
        margin-block: 1rem;;
    }
}
@media only screen and (max-width: $xl) and (min-width: $lg){
    #sidebar > *, .side-topic{
        margin-right: $s3!important;
    }
}
</style>