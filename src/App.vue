<template>
    <div id="app">
        <!--<Test></Test>-->
        <IHeader></IHeader>
        <IContainer></IContainer>
        <IFoot></IFoot>
    </div>
</template>
<script>
    import IHeader from './Header.vue'
    import IContainer from './Container.vue'
    import IFoot from './Foot.vue'
    import Test from './Test.vue'
    export default {
        name: 'app',

        components: {
           IHeader,IContainer,IFoot,
          Test
        },
        mounted:function () {
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?82173aec295b8624fb31f98d97c6eb2a";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
          })();
        }
    }

</script>

<style>

</style>
