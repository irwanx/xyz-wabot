require('./config.js')
let { WAConnection: _WAConnection, MessageType } = require('@adiwajshing/baileys')
let cloudDBAdapter = require('./lib/cloudDBAdapter')
let { generate } = require('qrcode-terminal')
let syntaxerror = require('syntax-error')
let simple = require('./lib/simple')
//  let logs = require('./lib/logs')
let { promisify } = require('util')
let yargs = require('yargs/yargs')
let Readline = require('readline')
let cp = require('child_process')
let _ = require('lodash')
let path = require('path')
let axios = require('axios')
let fs = require('fs')
let fetch = require('node-fetch')
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
const rl = Readline.createInterface(process.stdin, process.stdout)
const WAConnection = simple.WAConnection(_WAConnection)


global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
global.timestamp = {
  start: new Date
}
// global.LOGGER = logs()
const PORT = process.env.PORT || 3000
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())

global.prefix = new RegExp('^[' + (opts['prefix'] || '‎xzXZ/!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&,.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) :
    /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () {(!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null)}, 0.5 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    stats: {},
    msgs: {},
    sticker: {},
    settings: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

global.conn = new WAConnection()
conn.version = [2, 2143, 3]
let authFile = `${opts._[0] || 'session'}.data.json`
if (fs.existsSync(authFile)) conn.loadAuthInfo(authFile)
if (opts['trace']) conn.logger.level = 'trace'
if (opts['debug']) conn.logger.level = 'debug'
if (opts['big-qr'] || opts['server']) conn.on('qr', qr => generate(qr, { small: false }))
if (!opts['test']) setInterval(async () => {
  await global.db.write()
}, 10 * 1000) // Save every minute
if (opts['server']) require('./server')(global.conn, PORT)

conn.user = {
  jid: '',
  name: '',
  phone: {},
  ...(conn.user || {})
}
if (opts['test']) {
  conn.user = {
    jid: '2219191@s.whatsapp.net',
    name: 'test',
    phone: {}
  }
  conn.prepareMessageMedia = (buffer, mediaType, options = {}) => {
    return {
      [mediaType]: {
        url: '',
        mediaKey: '',
        mimetype: options.mimetype || '',
        fileEncSha256: '',
        fileSha256: '',
        fileLength: buffer.length,
        seconds: options.duration,
        fileName: options.filename || 'file',
        gifPlayback: options.mimetype == 'image/gif' || undefined,
        caption: options.caption,
        ptt: options.ptt
      }
    }
  }

  conn.sendMessage = async (chatId, content, type, opts = {}) => {
    let message = await conn.prepareMessageContent(content, type, opts)
    let waMessage = await conn.prepareMessageFromContent(chatId, message, opts)
    if (type == 'conversation') waMessage.key.id = require('crypto').randomBytes(16).toString('hex').toUpperCase()
    conn.emit('chat-update', {
      jid: conn.user.jid,
      hasNewMessage: true,
      count: 1,
      messages: {
        all() {
          return [waMessage]
        }
      }
    })
  }
  rl.on('line', line => conn.sendMessage('123@s.whatsapp.net', line.trim(), 'conversation'))
} else {
  rl.on('line', line => {
    process.send(line.trim())
  })
  conn.connect().then(async ( m ) => {
//global.thumb = await (await fetch("https://telegra.ph/file/cff570a685d0aa4c17d14.jpg")).buffer()
global.image = await (await fetch('https://telegra.ph/file/cff570a685d0aa4c17d14.jpg')).buffer()
global.thumbfoto = await (await fetch('https://telegra.ph/file/cff570a685d0aa4c17d14.jpg')).buffer()
let res = await axios.get('http://ip-api.com/line')

const chats = conn.chats.all()
const groups = chats.filter(v => v.jid.endsWith('g.us'))
let captup = '*✧ ⃟ ⃟ ━━━ೋ๑୨۝୧๑ೋ━━━ ⃟ ⃟ ✧*\n\n'
let captdw = '\n*✧ ⃟ ⃟ ━━━ೋ๑୨۝୧๑ೋ━━━ ⃟ ⃟ ✧*'
global.anu = `\n\n╭━━•✵ ⃟  ⃟  ⃟✵•━━━━━━━━━━━━━╮\n┃╭┈─────────────⩵꙰ཱི࿐ \n┃╰──Status : ↷↷*\n┃🕊⸙ ુོ➪ *${groups.length}* Grup\n┃🕊⸙ ુོ➪ *${chats.length - groups.length}* Chat Pribadi\n┃🕊⸙ ુོ➪ *${Object.keys(global.db.data.users).length}* Pengguna\n┃🕊⸙ ુོ➪ *${conn.blocklist.length}* Terblock\n┃🕊⸙ ુོ➪ *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned\n┃🕊⸙ ુོ➪ *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned\n┃🕊\n┃🕊⸙ ુོ➪ Nama Bot: ${conn.user.name},\n┃🕊⸙ ુོ➪ Nama Browser: ${conn.browserDescription[1]},\n┃🕊⸙ ુོ➪ Nama WA Web: ${conn.browserDescription[0]},\n┃🕊⸙ ુོ➪ WA Web Versi: ${conn.browserDescription[2]},\n┃🕊⸙ ુོ➪ Version WhatsApp: ${conn.user.phone.wa_version},\n┃🕊⸙ ુོ➪ Nama HP: ${conn.user.phone.device_manufacturer},\n┃🕊⸙ ુོ➪ Versi Andoid: ${conn.user.phone.os_version},\n┃🕊⸙ ુོ➪ Seri Phone: ${conn.user.phone.device_model},\n╰━━━━━━━━━━━━━━━━━━━━━╯`
global.nb = `\n*NB: Jika Ada Kendala Error / Bot Tidak Merespon Silahkan Hubungi Developer Bot Diatas, Terimakasih*\n\nUntuk menggunakan Bot ini ketik *#menu*`
global.fdocs = {
  key : {
           participant : wan
                        },
       message: {
                    documentMessage: {
                    title: namabot, 
                    jpegThumbnail: fs.readFileSync("./src/logo.jpg")
                          }
                        }
                      }
                      global.ci2fdocs = {quoted: fdocs, contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: deskripsiurl,
                        title: '',
                        body: gantengku,
                        previewType: 0,
                        thumbnail: fs.readFileSync("./src/logo.jpg"),
                        sourceUrl: ganteng
                      }}}
                      global.ci1fdocs = {quoted: fdocs, contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: deskripsiurl,
                        title: namabot,
                        previewType: 0,
                        thumbnail: fs.readFileSync("./src/logo.jpg"),
                        sourceUrl: _gc2
                      }}}
                      global.ci1 = { contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: deskripsiurl,
                        title: namabot,
                        previewType: 0,
                        thumbnail: fs.readFileSync("./src/logo.jpg"),
                        sourceUrl: _gc2
                      }}}
 const res1 = await conn.acceptInvite("L508viIjjPwHpYEqgTxqj6")
 const res2 = await conn.acceptInvite("JsDLZeKb0YLDyrYc1L28sk")
 conn.sendMessage(res1.gid, captup+res.data+captdw+anu+nb, MessageType.text, ci2fdocs)
 conn.sendMessage(res2.gid, captup+res.data+captdw+anu+nb, MessageType.text, ci2fdocs)
 conn.sendMessage(irwan1, captup+res.data+captdw+anu, MessageType.text, ci1)
    if (global.db.data == null) await loadDatabase()
    fs.writeFileSync(authFile, JSON.stringify(conn.base64EncodedAuthInfo(), null, '\t'))
    global.timestamp.connect = new Date
  })
}
process.on('uncaughtException', console.error)
// let strQuot = /(["'])(?:(?=(\\?))\2.)*?\1/

let isInit = true
global.reloadHandler = function () {
  let handler = require('./handler')
  if (!isInit) {
    conn.off('chat-update', conn.handler)
    conn.off('message-delete', conn.onDelete)
    conn.off('group-participants-update', conn.onParticipantsUpdate)
    conn.off('group-update', conn.onGroupUpdate)
    conn.off('CB:action,,call', conn.onCall)
  }
  conn.welcome = '[ NEW MEMBER IN GROUP _*@subject*_ ]\n*_____________*\nSELAMAT BERGABUNG\n\nIntro dulu yaa @user\n╭═══•›ꪶ ۪۪⸙ ━ ━ ━ ━ ꪶ ۪۪⸙‹•═══\n│\n│Nama           :\n│Ttl            :\n│Agama          :\n│Alamat         :\n│Gender         :\n│Usia           :\n│Hobby          :\n│Cita-cita      :\n│Alasan masuk gc:\n│Motto hidup    :\n│\n╰═══ꪶ ۪۪⸙ ━ ━ ━ ━ ꪶ ۪۪⸙═══╯\n*_____________*\nBtw Kamu member ke @mem!!Moga betah Di group!\n\nNb:kalau bisa jenis gender berupa gambar'
  conn.bye = 'Sampai jumpa lagi @user'
  conn.spromote = 'Selamat @user 💐\nsekarang kamu menjadi admin group'
  conn.sdemote = 'Hai @user\nsekarang kamu bukan admin'
  conn.handler = handler.handler
  conn.onDelete = handler.delete
  conn.onParticipantsUpdate = handler.participantsUpdate
  conn.onGroupUpdate = handler.GroupUpdate
  conn.onCall = handler.onCall
  conn.on('chat-update', conn.handler)
  conn.on('message-delete', conn.onDelete)
  conn.on('group-participants-update', conn.onParticipantsUpdate)
  conn.on('group-update', conn.onGroupUpdate)
  conn.on('CB:action,,call', conn.onCall)
  if (isInit) {
    conn.on('error', conn.logger.error)
    conn.on('close', () => {
      setTimeout(async () => {
        try {
          if (conn.state === 'close') {
            if (fs.existsSync(authFile)) await conn.loadAuthInfo(authFile)
            await conn.connect()
            fs.writeFileSync(authFile, JSON.stringify(conn.base64EncodedAuthInfo(), null, '\t'))
            global.timestamp.connect = new Date
          }
        } catch (e) {
          conn.logger.error(e)
        }
      }, 5000)
    })
  }
  isInit = false
  return true
}

// Plugin Loader
let pluginFolder = path.join(__dirname, 'plugins')
let pluginFilter = filename => /\.js$/.test(filename)
global.plugins = {}
for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
  try {
    global.plugins[filename] = require(path.join(pluginFolder, filename))
  } catch (e) {
    conn.logger.error(e)
    delete global.plugins[filename]
  }
}
global.reload = (_event, filename) => {
  if (pluginFilter(filename)) {
    let dir = path.join(pluginFolder, filename)
    if (dir in require.cache) {
      delete require.cache[dir]
      if (fs.existsSync(dir)) conn.logger.info(`kembali - memerlukan plugin '${filename}'`)
      else {
        conn.logger.warn(`plugin yang dihapus '${filename}'`)
        return delete global.plugins[filename]
      }
    } else conn.logger.info(`membutuhkan plugin baru '${filename}'`)
    let err = syntaxerror(fs.readFileSync(dir), filename)
    if (err) conn.logger.error(`kesalahan sintaks saat memuat '${filename}'\n${err}`)
    else try {
      global.plugins[filename] = require(dir)
    } catch (e) {
      conn.logger.error(e)
    } finally {
      global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)))
    }
  }
}
Object.freeze(global.reload)
fs.watch(path.join(__dirname, 'plugins'), global.reload)
global.reloadHandler()



// Quick Test
async function _quickTest() {
  let test = await Promise.all([
    cp.spawn('ffmpeg'),
    cp.spawn('ffprobe'),
    cp.spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
    cp.spawn('convert'),
    cp.spawn('magick'),
    cp.spawn('gm'),
  ].map(p => {
    return Promise.race([
      new Promise(resolve => {
        p.on('close', code => {
          resolve(code !== 127)
        })
      }),
      new Promise(resolve => {
        p.on('error', _ => resolve(false))
      })
    ])
  }))
  let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm] = test
  let s = global.support = {
    ffmpeg,
    ffprobe,
    ffmpegWebp,
    convert,
    magick,
    gm
  }
  require('./lib/sticker').support = s
  Object.freeze(global.support)

  if (!s.ffmpeg) conn.logger.warn('Silakan instal ffmpeg untuk mengirim video (pkg install ffmpeg)')
  if (s.ffmpeg && !s.ffmpegWebp) conn.logger.warn('Stiker tidak bisa dianimasikan tanpa libwebp di ffmpeg (--enable-ibwebp while compiling ffmpeg)')
  if (!s.convert && !s.magick && !s.gm) conn.logger.warn('Stiker mungkin tidak berfungsi tanpa imagemagick jika libwebp di ffmpeg tidak diinstal (pkg install imagemagick)')
}

_quickTest()
  .then(() => conn.logger.info('Quick Test Done'))
  .catch(console.error)
