<template>
    <div id="app">
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
    import IAbout from './about'
    export default {
        name: 'app',
        data(){
          return {
            currentView: IContainer,
            showBanner: true
          }
        },
        components: {
           IHeader,IContainer,IFoot,IBuilding,IAbout
        },
        mounted:function () {

        },
        methods: {
          changeCategory: function (tag,index) {
            this.currentView = (!tag || tag === '') ? 'IBuilding' : tag;
            if (index && index === 0){
              this.showBanner = true;
            }else{
              this.showBanner = false;
            }
          }
        }
    }

</script>

<style>

</style>
