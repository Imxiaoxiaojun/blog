<template>
  <div class="w_container">
    <div class="container">
      <div class="row w_main_row">



        <div class="col-lg-9 col-md-9 w_main_left" style="height: 1000px;">
          <ol class="breadcrumb w_breadcrumb">
            <li><a href="">首页</a></li>
            <li class="active">留言板</li>
            <span class="w_navbar_tip">像“草根”一样，紧贴着地面，低调的存在，冬去春来，枯荣无恙。</span>
          </ol>
          <div class="mainContainner" >
            <div class="commentBox" id="message">
              <div class="Ctop">
                <label class="Ctitle"><img src="/static/img/user_comment.png">我来说两句</label>
                <label class="Ctip">已有<span class="Ccount" id="Ccount">{{total}}</span>条评论</label>
              </div>
              <div class="Cattitude">
                <form>
                  <label>我的态度：</label>
                  <input type="radio" name="attitude"value='1' checked="checked"/><img src="/static/img/zheng.png">
                  <input type="radio" name="attitude"value='-1'/> <img src="/static/img/fan.png">
                  <input type="radio" name="attitude"value='0'/> <img src="/static/img/zhong.png">
                  <!--<input type="radio" name="attitude"value='1' checked="checked"><img src="img/zheng.png"></input>-->
                  <!--<input type="radio" name="attitude"value='-1'><img src="img/fan.png"></input>-->
                  <!--<input type="radio" name="attitude"value='0'><img src="img/zhong.png"></input>-->
                </form>
              </div>
              <div class="Cinput">
                <textarea placeholder="请输入评论内容" class="Ccont" id="Ccont"></textarea>
              </div>
              <!--<div :class="pBody?'':''">
                <div class="OwO-logo" @click="pBody!=pBody">
                  <span>OwO表情</span>
                </div>
              </div>-->
              <div class="icon clearfix">
                <i class="icon iconfont icon-face" @click="showEmoji = !showEmoji"></i>
                <!--<el-button type="success" size="small" @click="submit" class="submit">提交</el-button>-->
                <transition name="fade" mode="">
                  <div class="emoji-box" v-if="showEmoji" >
                    <el-button class="pop-close"
                      :plain="true"
                      type="danger"
                      size="mini"
                      icon="close"
                      @click="showEmoji = false"></el-button>
                    <vue-emoji
                      @select="selectEmoji">
                    </vue-emoji>
                    <span class="pop-arrow arrow"></span>
                  </div>
                </transition>
              </div>
              <div class="Csunbmit">
                <label class="Cnick" >你的昵称：</label>
                <input class="Cusername" placeholder="你的昵称" id="Cusername" ></input>
                <button class="submitBtn" onclick="submit_pl(0)">发布评论</button>
              </div>
            </div>
            <div class="Corder">
              <button id="newBtn" onclick="start(0)">最新</button>
              <button id="hotBtn" onclick="start(1)">最热</button>
            </div>
            <div class="CommentList">
              <template v-for="comment in comments">
                <ul class="listul">{{comment.content}}</ul>
              </template>
            </div>

            <div class="fydiv">
              <v-pagination :total="total" :display="pageSize" :current-page='currentPage' @changePage="getComments"style="text-align: center"/>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>


</template>

<script>
  import pagination from '../common/pagination'
  import vueEmoji from '../common/emoji.vue'
    export default {
      data() {
        return {
          showEmoji: false,
          comments: [],
          total: 0,
          currentPage: 1,
          pageSize: 10,
          apiUrl: 'api/comment/list',
        }
      },
      components:{
        "v-pagination":pagination,vueEmoji
      },
      name: "IComment",
      mounted: function(){
        this.getComments();
      },
      methods:{
        getComments:function () {
          this.$axios.get(this.apiUrl,{
            params: {
              pageSize: this.pageSize,
              pageNo: this.currentPage
            }
          }).then((response) => {
            this.comments = response.data.records;
            this.total = response.data.total;
          }).catch(function (response) {
            console.log(response)
          });
        }
      }
    }
</script>

<style v-bind:type="cssLoaders(scss)">
  ul{
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #message {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 60px auto ;
    width: 500px;
  .icon {
    position: relative;
    margin-top: 20px;
  .iconfont {
    cursor: pointer;
    color: #F7BA2A;
  }
  .emoji-box {
    position: absolute;
    z-index: 10;
    left: -10px;
    top: 24px;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.2);
    background: white;
  .el-button {
    position: absolute;
    border: none;
    color: #FF4949;
    right: 12px;
    top: 12px;
    z-index: 10;
  }
  .arrow {
    left: 10px;
  }
  }
  .submit {
    float: right;
  }
  }
  .comment {
    margin-top: 20px;
  .item {
    margin-top: 20px;
    padding: 10px;
    margin: 0;
    border-top: 1px solid #bfcbd9;
  }
  }
  }
  .clearfix {
  &:after {
     content: '';
     display: block;
     height: 0;
     clear: both;
     visibility: hidden;
   }
  }
  @font-face {font-family: "iconfont";
    src: url('/static/fonts/iconfont.eot?t=1491870595080'); /* IE9*/
    src: url('/static/fonts/iconfont.eot?t=1491870595080#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('/static/fonts/iconfont.woff?t=1491870595080') format('woff'), /* chrome, firefox */
    url('/static/fonts/iconfont.ttf?t=1491870595080') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('/static/fonts/iconfont.svg?t=1491870595080#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-shipin:before { content: "\e622"; }

  .icon-music:before { content: "\e63d"; }

  .icon-xiaoxi:before { content: "\e613"; }

  .icon-jinlingyingcaiwangtubiao38:before { content: "\e749"; }

  .icon-guanzhu:before { content: "\e64a"; }

  .icon-icon6:before { content: "\e609"; }

  .icon-tupian:before { content: "\e604"; }

  .icon-xin-1:before { content: "\e605"; }

  .icon-face:before { content: "\e657"; }

  .icon-loading:before { content: "\e64e"; }

  .icon-zhuanfa:before { content: "\e651"; }





  .fade-enter-active, .fade-leave-active { transition: opacity .5s; }
  .fade-enter, .fade-leave-active { opacity: 0; }
  .fade-move { transition: transform .4s; }

  .list-enter-active, .list-leave-active { transition: all .5s; }
  .list-enter, .list-leave-active { opacity: 0; transform: translateX(30px); }
  .list-leave-active { position: absolute !important; }
  .list-move { transition: all .5s;}

  .commentBox,.CommentList{text-align: center;width: 100%;height:auto;border: 1px solid #65a6d1;padding: 20px;margin-bottom: 10px; }
  .Ctop{height: 25px;border-bottom: 1px solid #4962d6;}
  .Ctitle{float: left;font-weight: bold;}
  .Ctip{float: right;color: blue;}
  .Ccount{color:red}
  .Cattitude{float: left;margin-top: 10px;}
  .Ccont{width: 100%;height: 140px;resize: none;margin-top: 10px;}
  .Csunbmit{height: 35px;margin-top: 10px;margin-bottom: 5px;}
  .Cnick{float: left;}
  .Cusername{float: left;height: 25px;}
  .submitBtn{width: 75px;height: 30px;line-height: 26px;background-color: #339b53;text-align: center;display: block;
    color: #FFFFFF;font-size: 12px;border-radius: 6px;float: left;}
  .Corder{margin-bottom: 10px;}
</style>
