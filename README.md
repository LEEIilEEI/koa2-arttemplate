## koa2-arttemplate

## how to use
```
const template = require('koa2-arttemplate')

app.use(template('views'), {
  extname: '.html'
})

app.use(ctx => {
  ctx.render('index', {
    title: 'title'
  })
})
```
