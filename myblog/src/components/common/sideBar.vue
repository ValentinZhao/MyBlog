<template>
  <div class="sidebar-container rd-col-5">
    <div class="sidebar-tips-head">
      <h3 class="sidebar-tips-title">提示</h3>
      <p class="sidebar-tips-content">
        Blog版本：v1.0.0
      </p>
    </div>
    <div class="sidebar-posts">
      <h3 class="sidebar-posts-title">最新发表</h3>
      <ul class="sidebar-posts-list">
        <li class="sidebar-posts-item" v-for="(article, index) in articleList"
          v-if="index < 3">
          {{article.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'articleList'
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
.sidebar-container {
  box-sizing: border-box;
  padding-left: 30px;
}

.sidebar-tips-head {
  width: 100%;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 4px 10px rgba(0, 0, 0, 0.06);
  margin-bottom: 30px;
}

.sidebar-tips-title, .sidebar-posts-title {
  width: 100%;
  height: 55px;
  line-height: 55px;
  padding-left: 15px;
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid #eee;
}

.sidebar-tips-content {
  padding: 20px 10px;
  margin: 0;
  font-size: 14px;
  text-align: center;
}

.sidebar-posts {
  width: 100%;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 4px 10px rgba(0, 0, 0, 0.06);
}

.sidebar-posts-list {
  padding: 0;
}

.sidebar-posts-item {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 44px;
  line-height: 44px;
  padding-left: 15px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid #eee;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    height: 2px;
    width: 0;
    background: #42b983;
    transition: all 0.4s ease-in;
  }
  &:hover {
    background: #f3f3f3;
    &:after{
      width: 100%;
    }
  }
}

</style>
