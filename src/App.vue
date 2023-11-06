<template>
  <section class="wrapper">
    <header class="container-fluid cen-text p4-vr">
      <div id="authopt" class="col-4">
        <router-link to="/authenticate">ورود / ثبت نام</router-link>
      </div>
      <div id="brand" class="col-4 col-lg-5 col-md-12">
        <router-link to="/"><h1>وبلاگ1</h1></router-link>
     </div>
      <div id="searchbar" class="col-4 col-lg-7 col-md-12">
        <form>
          <input type="text" placeholder="جستجو..." name="search">
          <button>search</button>
        </form>
      </div>
    </header>

    <nav id="navbar" class="p1-hr p3-vr">
      <ul>
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
    }
  }
</script>

<style scoped lang="scss">
@import './assets/variables.scss';

#navbar > ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
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
@media (min-width: $lg) {
  #navbar > ul > li{
    margin: 0 $s2!important;
  }
}
@media (max-width: $lg) {
  #brand{
    order: 1;
  }
  #authopt{
    order: 2;
  }
  #searchbar{
    order: 3;
  }
  #with-love, .copy-r{
    text-align: center;
    margin-block: 4px;
  }
}
</style>
