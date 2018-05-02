<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">热门标签3</h3>
    </div>
    <div class="panel-body">
      <div class="labelList">
        <template v-for="tag in tags">
          <a class="label label-default" :style="'background:' + tag.color">{{tag.name}}&nbsp;&nbsp;({{tag.articleCount}})</a>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HotTag",
    data() {
      return {
        tags: [],
        apiUrl: 'api/tag/list',
      }
    },
    mounted:function(){
      this.getList();
    },
    methods: {
      getList: function () {
        this.$axios.get(this.apiUrl).then((response) => {
          this.tags = response.data.records;
        }).catch(function (response) {
          console.log(response)
        });
      },

    }

  }
</script>

<style scoped>
  .numStyle {
    border-radius: 50%;
    height: 13px;
    width: 13px;
    display: inline-block;
    background: white;
    /*vertical-align: top;*/
  }

  .numStyle span {
    display: block;
    height: 13px;
    line-height: 13px;
    text-align: center
  }

</style>
