import syntaxerror from 'syntax-error'
import { format } from 'util'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { createRequire } from 'module'
import connection from '../../lib/connection.js'
import db from '../../lib/database.js'
const plugins = (await import('../../lib/plugins.js'))
import sharp from 'sharp'
import jimp from 'jimp'
import fetch from 'node-fetch'
import got from 'got'
import request from 'request'
import baileys from '@adiwajshing/baileys'
import Func from '../../lib/function.js'
import fs from 'fs'
const bo = (await import('@bochilteam/scraper'))
const yuz = (await import('yuzzu-api'))
const xfar = (await import('xfarr-api'))
const hxz = (await import('hxz-api'))
const xvid = (await import('@rodrigogs/xvideos'))

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname)

let handler = async (m, _2) => {
  let { conn, usedPrefix, noPrefix, args, groupMetadata } = _2
  let _return
  let _syntax = ''
  let _text = (/^~/.test(usedPrefix) ? 'return ' : '') + noPrefix
  let old = m.exp * 1
  try {
    let i = 15
    let f = {
      exports: {}
    }
    let exec = new (async () => { }).constructor('print', 'm', 'handler', 'require', 'conn', 'db', 'Func', 'plugins', 'sharp', 'jimp', 'fetch', 'got', 'request', 'baileys', 'fs', 'bo', 'yuz', 'xfar', 'hxz', 'xvid', 'store', 'connection', 'Array', 'process', 'args', 'groupMetadata', 'module', 'exports', 'argument', _text)
    _return = await exec.call(conn, (...args) => {
      if (--i < 1) return
      console.log(...args)
      return conn.reply(m.chat, format(...args), m)
    }, m, handler, require, conn, db, Func, plugins, sharp, jimp, fetch, got, request, baileys, fs, bo, yuz, xfar, hxz, xvid, connection.store, connection, CustomArray, process, args, groupMetadata, f, f.exports, [conn, _2])
  } catch (e) {
    let err = syntaxerror(_text, 'Execution Function', {
      allowReturnOutsideFunction: true,
      allowAwaitOutsideFunction: true,
      sourceType: 'module'
    })
    if (err) _syntax = '```' + err + '```\n\n'
    _return = e
  } finally {
    conn.reply(m.chat, _syntax + format(_return), m)
    m.exp = old
  }
}
handler.help = ['> ', '~> ']
handler.tags = ['advanced']
handler.customPrefix = /^~?> /
handler.command = /(?:)/i

handler.rowner = true

export default handler

class CustomArray extends Array {
  constructor(...args) {
    if (typeof args[0] == 'number') return super(Math.min(args[0], 10000))
    else return super(...args)
  }
}
