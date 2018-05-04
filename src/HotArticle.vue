<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">热门文章</h3>
    </div>
    <div class="panel-body">
      <ul class="list-unstyled sidebar">
        <template v-for="hotArticle in hotList">
          <li>
            <a class="title" style="cursor: pointer;" @click="getDetail(hotArticle.id)">{{hotArticle.title | formatLinkName}}</a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
  import eventBus from './eventBus'
    export default {
        name: "HotArticle",
      data() {
        return {
          hotList: [],
          apiUrl: 'api/article/hotList',
        }
      },
      mounted:function(){
        this.getHotArticle();
      },
      methods: {
        getHotArticle: function () {
          this.$axios.get(this.apiUrl).then((response) => {
            this.hotList = response.data;
          }).catch(function (response) {
            console.log(response)
          });
        },
        getDetail: function (id) {
          eventBus.$emit('articleId', id);
        }
      },

      filters: {
        formatLinkName:function (name) {
          if (name.length > 20){
            name = name.substr(0,20)+"...";
          }
          return name;
        }
      },
    }
</script>

<style scoped>

</style>
