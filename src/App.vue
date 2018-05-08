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
    import eventBus from './eventBus'
    export default {
        name: 'app',
        data(){
          return {
            currentView: IContainer
          }
        },
        components: {
           IHeader,IContainer,IFoot,IBuilding,
        },
        mounted:function () {

        },
        methods: {
          changeCategory: function (tag) {
            if (tag && tag === 'IContainer'){
              eventBus.$emit('showBanner', false)
            }
            this.currentView = (!tag || tag === '') ? 'IBuilding' : tag;
          }
        }
    }

</script>

<style>

</style>
