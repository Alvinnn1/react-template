import { registerAscendedServer } from '@imf/ascended-server'
import * as path from 'path'
const cors = require('@koa/cors')

const Koa = require('koa')
const Router = require('koa-router')
const createStaticServer = require('koa-static')
const ejs = require('ejs')

let version = process.env.version || 'alpha'
let versionDetail = process.env.commitMessage || 'alpha developing'

const app = new Koa()
const compress = require('koa-compress')
const options = {
  threshold: 1024, //数据超过1kb时压缩
}
/**
 * 将所有页面路由都转到主页
 * @param path
 */
function ignorePath(path: string) {
  return async (ctx: { request: { path: string } }, next: () => any) => {
    if (ctx.request.path.startsWith('/' + path)) {
      ctx.request.path = '/'
    }
    await next()
  }
}

async function main(): Promise<void> {
  app.use(
    async (
      ctx: {
        set: (arg0: string, arg1: string) => void
        method: string
        body: number
      },
      next: () => any
    ) => {
      ctx.set('Access-Control-Allow-Origin', '*')
      ctx.set('Access-Control-Allow-Headers', '*')
      ctx.set(
        'Access-Control-Allow-Methods',
        'PUT, POST, GET, DELETE, OPTIONS'
      )
      if (ctx.method == 'OPTIONS') {
        ctx.body = 200
      } else {
        await next()
      }
    }
  )
  app.use(compress(options))
  app.use(ignorePath('page'))

  app.use(
    cors({
      origin: '*', // 前端地址
      credentials: true,
    })
  )
  app.use(createStaticServer('./client', {gzip: true, brotli: true}))
  app.use(
    registerAscendedServer(path.resolve('./client'), version, versionDetail)
  )
  app.listen(80)
}

main()
  .then(() =>
    console.log('[demo] start-quick is starting http://localhost:80')
  )
  .catch((e) => {
    console.log('[demo] start failed. ' + e)
    throw e
  })
