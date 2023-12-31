<template>
  <section id="header" class="wrapper">
    <header class="container-fluid cen-text p4-vr">
      <div id="authopt" class="col-4 col-lg-1">
        <router-link to="/authenticate">
          <span>IC</span>
          <span class="lg-hide">ورود / ثبت نام</span>
        </router-link>
      </div>
      <div id="brand" class="col-4 col-md-12">
        <router-link id="brand-title" to="/"><h1 class="p3-vr">وبلاگ1</h1></router-link>
        <p class="sub_title">ساب تایتل وبسایت بلاگ1</p>
     </div>


     <div class="col-4 col-lg-7 col-md-12" id="searchbar">
        <div class="search-container">
          <form>
            <input  type="text" placeholder="Search.." name="search">
            <button  type="submit"><img width="" src="./assets/icons/icsearch.svg"></button>
          </form>
        </div>
      </div>
    </header>

    <p class="cen-text p3 m3">بنر تبلیغاتی شما...</p>

    <nav id="navbar" class="p1-hr p1-vr">
      <ul class="p3-vr">
        <li>اقتصادی</li>
        <li>تکنولوژی</li>
        <li>پزشکی</li>
        <li>بازار خودرو</li>
        <li>تحقیقات</li>
        <li>سیاسی</li>
        <li>اقتصادی</li>
        <li>تکنولوژی</li>
        <li>پزشکی</li>
        <li>بازار خودرو</li>
        <li>تحقیقات</li>
        <li>سیاسی</li>
        <li>اقتصادی</li>
        <li>تکنولوژی</li>
        <li>پزشکی</li>
        <li>بازار خودرو</li>
        <li>تحقیقات</li>
        <li>سیاسی</li>
        <li>اقتصادی</li>
      </ul>
    </nav>
  </section>  
  
  <section id="view" class="container-fluid">
    <router-view/>
  </section>

  <footer id="foot" class="p3">
    <div class="container-fluid cen-text">
      <!-- site data -->
      <div style="background-color: pink;" class="col-3 col-lg-5 col-md-6 m1-vr">
        <router-link to="/about">درباره</router-link>
      </div>
      <!-- site content -->
      <div style="background-color: purple;" class="col-3 col-lg-5 col-md-6 m1-vr">2</div>
      <!-- picture and contact form -->
      <div style="background-color: orange;" class="col-6 col-lg-12 m1-vr">3</div>
    </div>
    <hr>
    <div class="container-fluid p2-vr">
      <p id="with-love" class=" col-6 col-lg-12">ساخته شده با ❤️</p>
      <p class="ltr-text col-6 col-lg-12 copy-r">Copyright © 2022-2023 Blog1. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>

  export default{
    name: 'app',
    components:{
    },
    methods:{
      searchBtn(){
        const SEARCHBAR = document.querySelector(".searchbar")
        SEARCHBAR.classList.toggle("active")},
    },
  }
</script>

<style scoped lang="scss">
@import './assets/variables.scss';


#header{
  vertical-align: middle;
}
#header > header{
  background-color: $lpri-color;
}
#header > #navbar{
  background-color: pink;
}
#header > header > *{
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
#searchbar input[type=text] {
  padding: 6px;
  font-size: 17px;
  border: none;
  width: 250px;
}
#searchbar .search-container button {
  float: left;
  padding: 6px 10px;
  margin-left: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}
#searchbar .search-container button:hover {
  background: #ccc;
}


#navbar > ul{
  list-style-type: none;
  margin: 0;
  white-space: nowrap;
  overflow-x: auto;
}
#navbar > ul > li{
  display: inline;
  float: none;
  padding: $s1;
  margin: 0 $s1;
}


#foot{
  background-color: #2d2d2d;
  color: $lgray-color;
}
#with-love{
  color: $pri-color;
  line-height: 2rem;
  text-shadow: -0.2px 0 $sec-color, 0 0.2px $sec-color, 0.2px 0 $sec-color, 0 -0.2px $sec-color;
}
.copy-r{
  direction: ltr;
  line-height: 2rem;
}
@media only screen and (min-width: $lg) {
  #navbar > ul > li{
    margin: 0 $s2!important;
  }
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
  #with-love, .copy-r{
    text-align: center;
    margin-block: 4px;
  }
}
</style>
