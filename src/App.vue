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
    import eventBus from './eventBus'
    export default {
        name: 'app',
        data(){
          return {
            currentView: IContainer,
            showBanner: true
          }
        },
        components: {
           IHeader,IContainer,IFoot,IBuilding,IAbout,eventBus
        },
        mounted:function () {

        },
        methods: {
          changeCategory: function (tag,index) {
            // console.log(tag,index)
            if (index === 0){
              this.showBanner = true;
              this.$children[2].showBanner = true;
              // eventBus.$emit("showBanner",true)
            }else{
              this.showBanner = false;
              this.$children[2].showBanner = false;
              // eventBus.$emit("showBanner",false)
            }
            this.currentView = (!tag || tag === '') ? 'IBuilding' : tag;
          }
        }
    }

</script>

<style>

</style>
