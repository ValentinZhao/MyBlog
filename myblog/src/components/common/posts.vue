<template>
  <div class="posts-container rd-col-14">
    <div class="posts-wrap"
      :class="{'adaptor': showLoading === true}">
      <h1 class="posts-head-title">文章</h1>
      <div class="posts-article"
        transition="fadeIn">
        <ul class="posts-article-list">
          <li class="posts-article-item" v-for="(article,index) in articleList" :key="index">
            <router-link :to="{name: 'articles', params: {id: article._id}}">
              <h4 class="article-head-title">{{article.title}}</h4>
            </router-link>
            <span class="article-head-time">{{article.createTime}}</span>
            <p class="article-content-desc">
              {{article.markedArticle | substrArticle}}
            </p>
            <div class="article-content-nav clearfix">
              <div class="article-tags rd-row-flex">
                <i class="icon-tags ion-ios-pricetags"></i>
                <ul class="article-tags-list">
                  <li class="article-tags-item"
                    v-link="{name: 'tagsContent', params: {id: article.tags}}">{{article.tags}}</li>
                </ul>
              </div>
              <router-link :to="{name: 'articles', params: {id: article._id}}">
                <span class="article-readmore">查看更多>></span>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <page-nav :start="start"></page-nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  mounted () {
    this.getAllArticles().then((res) => {
      console.log('请求文章列表成功')
      console.log(res)
    }).catch((err) => {
      alert('请求文章列表错误')
      console.log(err)
    })
  },
  computed: {
    // getters中get的数据可以直接作为数据使用
    ...mapGetters([
      'articleList',
      'showLoading'
    ])
  },
  methods: {
    ...mapActions([
      'getAllArticles'
    ])
  }
}
</script>


<style lang="scss" scoped>
@import '../../assets/css/animate.css';
.posts-container {
  box-sizing: border-box;
  margin-left: 30px;
  margin-left: 16.3%;
  width: 70%;
  .posts-wrap {
    box-sizing: border-box;
    width: 100%;
    height: auto;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 4px 10px rgba(0, 0, 0, 0.06);
    margin-bottom: 30px;
  }
  .adaptor {
    min-height: 1000px;
  }
}

.posts-head-title {
  box-sizing: border-box;
  width: 100%;
  height: 55px;
  line-height: 55px;
  font-size: 16px;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.4);
  padding: 0 30px;
  margin: 0;
  border-bottom: 1px solid #eee;
}

.posts-article-list {
  .posts-article-item {
    position: relative;
    padding: 15px 30px 10px;
    border-bottom: 1px solid #eee;
    height: 170px;
    a {
      color: black;
    }
    &:after {
      content: '';
      position: absolute;
      bottom: 1px;
      left: 0;
      height: 2px;
      width: 0;
      background: #42b983;
      transition: all 0.4s ease-in;
    }
    &:hover {
      .article-head-title {
        color: #42b983;
      }
      &:after{
        width: 100%;
      }
    }
  }
}

.article-head-title {
  margin: 0 0 10px 0;
  cursor: pointer;
}

.article-head-time {
  display: block;
  font-size: 12px;
  color: #999;
  margin-bottom: 20px;
}

.article-content-desc {
  width: 100%;
  max-height: 100px;
  text-overflow: ellipsis;
  word-break: keep-all;
  margin: 0;
  color: #7f7f7f;
  overflow: hidden;
}

.article-content-nav {
  width: 100%;
  height: auto;
  padding-top: 10px;
  border-top: 1px dotted #ccc;
  .icon-tags {
    font-size: 16px;
    margin-right: 20px;
  }
  .article-tags {
    float: left;
  }
  .article-tags-list {
    padding-top: 2px;
    .article-tags-item {
      position: relative;
      width: auto;
      height: 18px;
      line-height: 16px;
      padding: 0 10px;
      font-size: 12px;
      color: #fff;
      background: #ba8f6c;
      cursor: pointer;
      z-index: 100;
      &:before {
        content: " ";
        width: 0px;
        height: 0px;
        position: absolute;
        top: 0;
        left: -18px;
        border: 9px solid transparent;
        border-right-color: #ba8f6c;
      }
      &:after {
        content: " ";
        width: 4px;
        height: 4px;
        background-color: #fff;
        -webkit-border-radius: 4px;
        border-radius: 4px;
        -webkit-box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.3);
        box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.3);
        position: absolute;
        top: 7px;
        left: 2px;
      }
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .article-readmore {
    float: right;
    width: auto;
    height: 20px;
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    color: #fff;
    background: #4d4d4d;
    border-radius: 2px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
