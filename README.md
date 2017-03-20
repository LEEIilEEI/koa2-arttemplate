### 如何使用
const template = require('koa2-arttemplate')

app.use(template(__dirname + '/views'))

app.use(ctx => {
  ctx.render('index', {
    title: 'title'
  })
})