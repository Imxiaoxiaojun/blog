<template>
    <div class="w_header">
        <div class="container">
            <div class="w_header_top">
                <a href="" class="w_logo"></a>
                <span class="w_header_nav">
					<ul>
						<li v-for="(category,index) in categorys"><a href="javascript:;" @click="changeContainer(category.enName,index)" :class="{'active':index === activeId}">{{category.cnName}}</a></li>
					</ul>
				</span>
                <div class="w_search">
                    <div class="w_searchbox">
                        <input type="text" placeholder="search"/>
                        <button>搜索</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import eventBus from './eventBus'
  export default {
    data(){
      return {
        categorys: [{enName:'IContainer',cnName:'首页'},{enName:'IContainer',cnName:'文章'},
          {enName:'',cnName:'成长'},{enName:'',cnName:'留言'},
         {enName:'',cnName:'赞赏'},{enName:'IAbout',cnName:'关于'}],
        activeId: 0
      }
    },
    mounted:function () {
      eventBus.$on('articleId',(tag) => tag ? this.activeId = 1:0);
    },
    methods: {
      changeContainer: function (enName, index) {
        this.activeId = index;
        this.$parent.changeCategory(enName)
      }
    }
  }

</script>
