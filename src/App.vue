<template>
  <section class="wrapper">
    <header class="container-fluid cen-text">
      <div class="col-4">
        <p>ورود کاربر/ثبت نام</p>
      </div>
      <div class="col-4 col-lg-5 col-md-12">
        <h1>Blog 1</h1>
     </div>
      <div class="col-4 col-lg-7 col-md-12">
        SEARCH PARAMETERS
      </div>
    </header><br>

    <nav class="">
      <pre>Menu   Menu   Menu   Menu   Menu</pre>
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
@media (max-width: $lg) {
  #with-love, .copy-r{
    text-align: center;
    margin-block: 4px;
  }
}
</style>
