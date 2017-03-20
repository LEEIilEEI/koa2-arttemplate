'use strict'

const template = require('art-template')

const viewsEngine = (path, {
  extname = '.html',
  encodeing = 'utf-8'
} = {}) => {
  return (ctx, next) => {
    if (!ctx.render) {
      template.config('base', path)
      template.config('extname', extname)
      template.config('encodeing', encodeing)

      ctx.render = (tmpPath, datas = {}) => {
        ctx.body = template(tmpPath, datas)
      }
    }
    return next()
  }
}

module.exports = viewsEngine