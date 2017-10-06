const Article = require('../model/article');

const article = new Article();




module.exports = {
  'GET /api/articlelist': async (ctx, next) => {
    await article.queryAll().then(res => {
      console.log(res)
      articleList = res;
      //设置Content-Type
      ctx.response.type = 'application/json';
      ctx.response.set('Access-Control-Allow-Origin', '*');
      //koa会自动把赋给ctx.response.body的对象转化为JSON并输出到客户端
      ctx.response.body = {
        articleList
      }
    })
  }
}
