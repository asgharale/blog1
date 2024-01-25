<template>
  <footer id="foot" class="p3">
    <div class="container-fluid cen-text">
      <!-- site data -->
      <div class="col-3 col-lg-5 col-md-6 m1-vr" id="footer1">
        <router-link class="dark-bgt-h" to="/about">درباره</router-link>
        <router-link class="dark-bgt-h" to="/">صفحه اصلی</router-link>
      </div>
      <!-- site content -->
      <div class="col-3 col-lg-5 col-md-6 m1-vr">EMAIL</div>
      <!-- picture and contact form -->
      <div  class="col-6 col-lg-12 m1-vr">LOGOS</div>
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
    name: "FooterComponent",
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

#foot{
  background-color: #2d2d2d;
  color: $lgray-color;
}
#foot > div.container-fluid{
  align-items: stretch;
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
#footer1 > a{
  display: block;
  padding: $s1 0;
  transition: 70ms;
}
#footer1 > a:hover{
  color: $lpri-color;
}
@media only screen and (max-width: $lg) {
    #with-love, .copy-r{
    text-align: center;
    margin-block: 4px;
  }
}
</style>