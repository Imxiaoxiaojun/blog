<template>
    <!--PC和WAP自适应版-->
  <div id="SOHUCS"></div>
</template>

<script>
    export default {
      components:{

      },
      name: "IComment",
      mounted: function(){
        window._config = { showScore: true };
        window.changyan.api.config({
          appid: 'cytBHwUiS',
          conf: 'prod_da5e1ce3cf4734e6881a1bf14111bb0f'
        });
      }
    }
</script>

<style scoped>

</style>
