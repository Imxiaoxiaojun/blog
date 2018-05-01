<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">热门文章</h3>
    </div>
    <div class="panel-body">
      <ul class="list-unstyled sidebar">
        <template v-for="hotArticle in hotList">
          <li>
            <a href="/post/04928311">{{hotArticle.title | filterTitle}}</a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
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
      },

      filters: {
        filterTitle: function (value) {
          var str = value.replace(/(\\r\\n)|(\\n)/g,' ');
          return str
        }
      },
    }
</script>

<style scoped>

</style>
