<template>
<aside id="sidebar" class="col-2 col-xl-3 col-lg-11 col-md-12">
    <div class="side-topic wrapper">
        <p class="side-title p1-hr">
            <b>آخرین مطالب</b>
        </p>
        <div class="p1">
            <a href="#">مقاله ۱</a><br>
            <a href="#">مقاله ۲</a><br>
            <a href="#">مقاله ۳</a><br>
            <a href="#">مقاله ۴</a><br>
            <a href="#">مقاله ۵</a>
        </div>
    </div>
</aside>
</template>

<script>
export default{
    name: 'side-bar',
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
    #sidebar > *, .side_topic{
        margin-right: $s3!important;
    }
}
</style>