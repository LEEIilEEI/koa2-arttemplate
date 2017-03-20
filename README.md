### 方便使用arttemplate， 有问题可以提issues

### 如何使用
const template = require('koa2-arttemplate')

app.use(template(__dirname + '/views'))

app.use(ctx => {
  ctx.render('index', {
    title: 'title'
  })
})