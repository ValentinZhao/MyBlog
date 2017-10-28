const Article = require('../model/article');

const ArticleDetail = require('../model/articledetail')

const article = new Article();
const article_detail = new ArticleDetail();



module.exports = {
  'GET /api/articlelist': async (ctx, next) => {
    await article.queryAll().then(res => {
      articleList = res;
      //设置Content-Type
      ctx.response.type = 'application/json';
      ctx.response.set('Access-Control-Allow-Origin', '*');
      //koa会自动把赋给ctx.response.body的对象转化为JSON并输出到客户端
      ctx.response.body = {
        articleList
      }
    })
  },
  'GET /api/articledetail': async (ctx, next) => {
    const id_param = ctx.url.match(/id=(\w+)/g)[0];
    const id = id_param.substring(id_param.indexOf('=') + 1);
    await article_detail.queryById(id).then(res => {
      const res_detail = res;
      ctx.response.type = 'application/json';
      ctx.response.set('Access-Control-Allow-Origin', '*');
      //koa会自动把赋给ctx.response.body的对象转化为JSON并输出到客户端
      ctx.response.body = {
        res_detail
      }
    })
  }
}
