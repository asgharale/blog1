<template>
<nav id="navbar">
  <ul>
      <li v-for="cat in cats" :key="cat.id"><a>{{ cat.name }}</a></li>
  </ul>
</nav>
</template>

<script>
export default{
    name: "NavBar",
    mounted(){
      this.$store.dispatch("fetchCats");
    },
    computed: {
      cats(){
        return this.$store.getters.getCats
      }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';

#navbar{
  background-color: pink;
}
#navbar > ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow-x: auto;
}
#navbar > ul > li{
  float: right;
  transition: 0.1s;
}
#navbar > ul > li:hover{
  background-color: $lpri-color;
}
#navbar > ul a{
  padding: $s2;
  display: block;
}
@media only screen and (min-width: $lg) {

}
</style>