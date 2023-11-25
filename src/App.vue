<template>
  <section id="header" class="wrapper">
    <header class="container-fluid cen-text p4-vr">
      <div id="authopt" class="col-4">
        <router-link to="/authenticate">ورود / ثبت نام</router-link>
      </div>
      <div id="brand" class="col-4 col-lg-5 col-md-12">
        <router-link to="/"><h1>وبلاگ1</h1></router-link>
        <p>ساب تایتل وبسایت بلاگ1</p>
     </div>


     <div class="col-4 col-lg-7 col-md-12">
        <div class="searchbar">
          <div class="searchicon" @click="searchBtn()"></div>
          <div class="input">
            <input type="text" placeholder="جستجو..." name="search" id="searchfield">
          </div>
          <span class="searchcls" onclick="document.getElementById('searchfield').value = ''"></span>
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
      <div style="background-color: pink;" class="col-3">1</div>
      <!-- site content -->
      <div style="background-color: purple;" class="col-3">2</div>
      <!-- picture and contact form -->
      <div style="background-color: orange;" class="col-6">3</div>
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


// some css to make flex boxes be fully with each other
#header{
  background-color: $lpri-color;
  vertical-align: middle;
}
#header > header > *{
  vertical-align: middle;
}

header.container-fluid{
  align-items: center;
}

.searchbar{
  position: relative;
  width: 48px;
  height: 48px;
  background-color: whitesmoke;
  border-radius: 48px;
  transition: 0.5;
  box-shadow: 0 0 0 2px white;
  overflow: hidden;
}
.searchbar .searchicon{
  position: absolute;
  top: 0;
  right: 0;
  width: 48px;
  height: 48px;
  border-radius: 48px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

// searchicon
.searchbar .searchicon::before{
  content: '';
  position: absolute;
  width: 15px;
  height: 15px;
  border: 2.5px solid dimgray;
  border-radius: 50%;
  transform: translate(-4px,-4px);
}
.searchbar .searchicon::after{
  content: '';
  position: absolute;
  width: 2px;
  height: 10px;
  background-color: dimgray;
  transform: translate(6px,6px) rotate(315deg);
  border-radius: 1rem;
}

.searchbar.active{
  width: 360px;
}
.searchbar .input{
  position: relative;
  width: 312px;
  height: 48px;
  right: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.searchbar .input input{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: whitesmoke;
  font-size: 16px;
}
.searchbar .searchcls{
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  cursor: pointer;
  display: none;
  justify-content: center;
  align-items: center;
}
.searchbar.active .searchcls{
  display: flex;
}
.searchbar .searchcls::before{
  position: absolute;
  content: '';
  width: 1px;
  height: 15px;
  background-color: dimgray;
  transform: rotate(45deg);
}
.searchbar .searchcls::after{
  position: absolute;
  content: '';
  width: 1px;
  height: 15px;
  background-color: dimgray;
  transform: rotate(315deg);
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
