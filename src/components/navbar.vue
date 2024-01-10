<template>
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
        <li>اقتصادی</li>        <li>تکنولوژی</li>
        <li>پزشکی</li>
        <li>بازار خودرو</li>
        <li>تحقیقات</li>
        <li>سیاسی</li>
        <li>اقتصادی</li>
    </ul>
</nav>
</template>

<script>
export default{
    name: "NavBar"
}
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';

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
  cursor: pointer;
  margin: 0 $s1;
}

@media only screen and (min-width: $lg) {
  #navbar > ul > li{
    margin: 0 $s2!important;
  }
}
</style>