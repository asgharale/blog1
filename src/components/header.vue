<template>
  <section id="head" class="wrapper">
    <header id="header" class="container-fluid cen-text p4-vr">
      <div id="authopt" class="col-4 col-lg-1">
        <router-link to="/authenticate">
          <span><svg height="16" width="14" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg></span>
          <span class="lg-hide">ورود / ثبت نام</span>
        </router-link>
      </div>
      <div id="brand" class="col-4 col-md-12">
        <router-link id="brand-title" to="/"><h1 class="p3-vr">وبلاگ1</h1></router-link>
        <p class="sub_title">ساب تایتل وبسایت بلاگ1</p>
     </div>


     <div class="col-4 col-lg-7 col-md-12" id="searchbar">
        <div class="search-container">
          <SearchBar/>
        </div>
      </div>
    </header>

    <p class="cen-text p3 m3">بنر تبلیغاتی شما...</p>

    <NavBar/>
  </section> 
</template>

<script>
import SearchBar from '@/components/search.vue';
import NavBar from '@/components/navbar.vue';

export default{
    name: "HeaderComponent",
    components:{
      SearchBar,
      NavBar,
    },
    methods:{
      stickyNav(head){
        if(window.scrollY > head.children[1].offsetTop){
          head.children[0].classList.add("sticky")
        }else{
          head.children[0].classList.remove("sticky")
          console.log("top")
        }
      }
    },
    mounted(){
      var head = document.getElementById("head");
      window.onscroll = () => {
        this.stickyNav(head)
      }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';


#head{
  vertical-align: middle;
}
#head > header{
  background-color: $lpri-color;
  transition: 0.4s;
}
#head > #navbar{
  background-color: pink;
}
#head > header > *{
  vertical-align: middle;
}
header.container-fluid{
  align-items: center;
}

// STICKY NAV
header.sticky{
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0!important;
  margin: 0!important;
}

header.sticky > #brand > .sub_title{
  display: none;
}

#searchbar .search-container{
  padding-block: 4px;
  float: left;
}

@media only screen and (max-width: $lg) {
  header.container-fluid{
    justify-content: space-between;
  }
  #brand{
    order: 0;
  }
  #authopt{
    order: 1;
  }
  #searchbar{
    order: 2;
  }

}
</style>