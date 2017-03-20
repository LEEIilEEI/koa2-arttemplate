'use strict'

const template = require('art-template')

const viewsEngine = (path, {
} = {}) => {
  return (ctx, next) => {
    if (ctx.render) {
      return next()
    }

    ctx.render = (tmpPath, datas = {}) => {
      let realPath = path + '/' + tmpPath
      let html = template(realPath, datas)
      ctx.body = html
    }

    return next()
  }
}

module.exports = viewsEngine