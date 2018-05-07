<template>
    <div id="app">
        <!--<Test></Test>-->
        <IHeader></IHeader>
        <!--<IContainer></IContainer>-->
        <component :is="currentView"></component>
        <IFoot></IFoot>
    </div>
</template>
<script>
    import IHeader from './Header.vue'
    import IContainer from './Container.vue'
    import IFoot from './Foot.vue'
    import IBuilding from './building'
    import IArticle from './Article'
    import IAbout from './about'
    import Test from './Test.vue'
    export default {
        name: 'app',
        data(){
          return {
            currentView: IContainer
          }
        },
        components: {
           IHeader,IContainer,IFoot,IBuilding,IArticle,IAbout,
          Test
        },
        mounted:function () {

        },
        methods: {
          changeCategory: function (tag) {
            this.currentView = (!tag || tag === '') ? 'IBuilding' : tag;
          }
        }
    }

</script>

<style>

</style>
