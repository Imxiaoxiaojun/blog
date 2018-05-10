<template>
  <div id="app">
    <IHeader></IHeader>
    <component :containerView="containerView" :is="currentView"></component>
    <IFoot></IFoot>
  </div>
</template>
<script>
  import IHeader from './Header.vue'
  import IContainer from './Container.vue'
  import IFoot from './Foot.vue'
  import IBuilding from './building'
  import IAbout from './about/About'
  import IComment from './comment/Comment'
  import eventBus from './eventBus'

  export default {
    name: 'app',
    data() {
      return {
        currentView: IContainer,
        containerView: 'IHome',
      }
    },
    components: {
      IHeader, IContainer, IFoot, IBuilding, IAbout, eventBus,IComment,
    },
    mounted: function () {
    },
    methods: {
      changeCategory: function (tag, index) {
        // console.log(tag,index)
        if (index in ['0', '1']) {
          this.currentView = IContainer;
          this.containerView = tag;
        } else {
          this.currentView = (!tag || tag === '') ? 'IBuilding' : tag;
        }
      }
    }
  }

</script>

<style>

</style>
