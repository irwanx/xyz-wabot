/*

==================KALO LU PAKE WA BISNIS PAKE KENU KE-DUA BUKAN YANG INI=================

*/
let {
  default: makeWASocket,
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  downloadContentFromMessage,
  downloadHistory,
  proto,
  getMessage,
  generateWAMessageContent,
  prepareWAMessageMedia
} = require('@adiwajshing/baileys-md')
let levelling = require('../lib/levelling')
let fs = require('fs')
const util = require('util')
const os = require('os')
let path = require('path')
let {
  createHash
} = require('crypto')
let fetch = require('node-fetch')
let {
  perfomance
} = require('perf_hooks')
let moment = require('moment-timezone')
//====================BATAS NGAB=================
const defaultMenu = {
  before: `ุุุุุุุุุุุุุ╭━━•✵ ⃟  ⃟  ⃟✵•━━━━━━━━━━━━━╮ุุุุุุุุุุุุุุุ
┃ Hallo Kak %name
┃ %ucapan Have a Great Day
┃ Donasi Seikhlasnya, Buat Bayar Wi-Fi
┃ https://saweria.co/irwanxyans
╰━━━━━━━━━━━━━━━━━━━━╯
%readmore`.trimStart(),
  header: '╭━━━━━━━━━━━━┈ ❋۪۪⸙\n│ ---%category\n╰┬────────────┈ ⳹\n╭┤',
  body: '││◦➛ %cmd %islimit %isPremium',
  footer: '│╰────────────┈ ⳹\n╰━━━━━━━━━━━━┈ ❋۪۪⸙\n',
  after: `
${'_%npmdesc_'}
`,
}

let handler = async (m, {
  conn,
  usedPrefix: _p,
  args,
  command
}) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'rpg', 'anime', 'nsfw', 'image', 'dewasa', 'game', 'jadian', 'xp', 'islamic', 'stiker', 'kerangajaib', 'quotes', 'admin', 'grup', 'premium', 'internet', 'anonymous', 'downloader', 'tools', 'fun', 'database', 'audio', 'jadibot', 'info', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
      'main': 'Menu Utama',
      'game': 'Menu Game',
      'jadian': 'Menu jadian',
      'anime': 'Menu Anime',
      'xp': 'Menu Exp & Limit',
      'sticker': 'Menu Stiker',
      'kerang': 'Menu Kerang Ajaib',
      'quotes': 'Menu Quotes',
      'admin': `Menu Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
      'group': 'Menu Grup',
      'premium': 'Menu Premium',
      'internet': 'Menu Internet',
      'anonymous': 'Menu Anonymous Chat',
      'downloader': 'Menu Downloader',
      'tools': 'Menu Tools',
      'fun': 'Menu Fun',
      'islamic': 'Menu Islamic',
      'audio': 'Menu Pengubah Suara',
      'info': 'Menu Info',
      '': 'Menu Tanpa Kategori',
      'nsfw': 'Menu NSFW',
      'rpg': 'Menu RPG',
      'dewasa': 'Menu Dewasa',
      'image': 'Menu Foto'
  }
  if (teks == 'game') tags = {
      'game': 'Game'
  }
  if (teks == 'image') tags = {
      'image': 'Image'
  }
  if (teks == 'dewasa') tags = {
      'dewasa': 'Dewasa'
  }
  if (teks == 'jadian') tags = {
      'jadian': 'Jadian'
  }
  if (teks == 'xp') tags = {
      'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
      'sticker': 'Stiker'
  }
  if (teks == 'nsfw') tags = {
      'nsfw': 'Nsfw'
  }
  if (teks == 'kerangajaib') tags = {
      'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
      'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
      'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
  }
  if (teks == 'grup') tags = {
      'group': 'Grup'
  }
  if (teks == 'premium') tags = {
      'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
      'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
      'anonymous': 'Anonymous Chat'
  }
  if (teks == 'downloader') tags = {
      'downloader': 'Downloader'
  }
  if (teks == 'anime') tags = {
      'anime': 'Anime'
  }
  if (teks == 'tools') tags = {
      'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
      'fun': 'Fun'
  }
  if (teks == 'database') tags = {
      'database': 'Database'
  }
  if (teks == 'vote') tags = {
      'vote': 'Voting',
      'absen': 'Absen'
  }
  if (teks == 'islamic') tags = {
      'islamic': 'Islamic'
  }
  if (teks == 'audio') tags = {
      'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
      'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
      'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
      '': 'Tanpa Kategori'
  }
  if (teks == 'owner') tags = {
      'owner': 'Owner',
      'host': 'Host',
      'advanced': 'Advanced'
  }
  if (teks == 'rpg') tags = {
      'rpg': 'Rpg'
  }

  try {
      let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
      let {
          exp,
          limit,
          level,
          role,
          registered
      } = global.db.data.users[m.sender]
      let {
          min,
          xp,
          max
      } = levelling.xpRange(level, global.multiplier)
      let name = await conn.getName(m.sender)
      let d = new Date(new Date + 3600000)
      let locale = 'id'
      let week = d.toLocaleDateString(locale, {
          weekday: 'long'
      })
      let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
      let date = d.toLocaleDateString(locale, {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
      })
      let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
      }).format(d)
      let time = d.toLocaleTimeString(locale, {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
      })
      let _uptime = process.uptime() * 1000
      let _muptime
      if (process.send) {
          process.send('uptime')
          _muptime = await new Promise(resolve => {
              process.once('message', resolve)
              setTimeout(resolve, 1000)
          }) * 1000
      }
      let muptime = clockString(_muptime)
      let uptime = clockString(_uptime)
      let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
      /**global.wm = `${week}, ${date}
Tanggal Islam: ${dateIslamic}
Time: ${waktuwib}

© irwan_x_yans
https://github.com/irwanx/xyz-wabot
Aktif Selama: ${uptime}`*/
      let tulisan = `
${ucapan()} ${name}. Have a great day！
Terimakasih Atas Kunjungan Anda`.trim()
      let sangek = `Berikut adalah list Menu Bot. klik pada "Click Here!" untuk melihat list menu.`

      let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
          return {
              help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
              tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
              prefix: 'customPrefix' in plugin,
              limit: plugin.limit,
              premium: plugin.premium,
              enabled: !plugin.disabled,
          }
      })
      if (teks == '404') {
          const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
              listMessage: {
                  title: tulisan,
                  description: sangek,
                  buttonText: 'Click Here',
                  listType: 1,
                  footerText: wm,
                  mtype: 'listMessage',
                  sections: [{
                      "rows": [{
                          "title": `Pemilik Bot`,
                          "description": "Nomor Pemilik Bot (owner)",
                          "rowId": `${_p}creator`
                      }, {
                          "title": "Syarat Ketentuan dan Peraturan",
                          "description": "Harap membaca Peraturan demi kenyamanan kita bersama",
                          "rowId": `${_p}rules`
                      }, {
                          "title": "Panduan Bot",
                          "description": "Jika kamu butuh panduan",
                          "rowId": `${_p}panduan`
                      }],
                      "title": "Informasi Bot"
                  }, {
                      "rows": [{
                          "title": `Semua Perintah`,
                          "description": "Menu Semua Perintah",
                          "rowId": `${_p}? all`
                      }],
                      "title": "─────「 1 」"
                  }],
                  "contextInfo": {
                      "stanzaId": m.key.id,
                      "participant": m.sender,
                      "quotedMessage": m.message
                  }
              }
          }), {
              userJid: m.participant || m.key.remoteJid,
              quoted: m
          });
          return await conn.relayMessage(
              m.key.remoteJid,
              template.message, {
                  messageId: template.key.id
              }
          )
      }
      let groups = {}
      for (let tag in tags) {
          groups[tag] = []
          for (let plugin of help)
              if (plugin.tags && plugin.tags.includes(tag))
                  if (plugin.help) groups[tag].push(plugin)
          // for (let tag of plugin.tags)
          //   if (!(tag in tags)) tags[tag] = tag
      }
      conn.menu = conn.menu ? conn.menu : {}
      let before = conn.menu.before || defaultMenu.before
      let header = conn.menu.header || defaultMenu.header
      let body = conn.menu.body || defaultMenu.body
      let footer = conn.menu.footer || defaultMenu.footer
      let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
      let _text = [
          before,
          ...Object.keys(tags).map(tag => {
              return header.replace(/%category/g, tags[tag]) + '\n' + [
                  ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
                      return menu.help.map(help => {
                          return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                              .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                              .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                              .trim()
                      }).join('\n')
                  }),
                  footer
              ].join('\n')
          }),
          after
      ].join('\n')
      text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
      let replace = {
          '%': '%',
          p: _p,
          uptime,
          muptime,
          me: conn.user.name,
          npmname: package.name,
          npmdesc: package.description,
          version: package.version,
          github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
          name,
          ucapan: ucapan(),
          name,
          weton,
          week,
          date,
          dateIslamic,
          time,
          readmore: readMore
      }
      text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
      let pp = await conn.profilePictureUrl(conn.user.jid, 'image').catch(_ => path.join(__dirname, '../src/avatar_contact.png'))
      await conn.sendTBL(m.chat, text.trim(), wm, await (await require('node-fetch')(pp)).buffer(), "Donasi", swr, null, null, `Owner`, `#owner`, `Ping`, `#ping`, `Sewa Bot`, `#sewa`, m)
  } catch (e) {
      conn.reply(m.chat, 'Maaf, menu sedang error', m)
      throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
      res = "Selamat pagi"
  }
  if (time > 10) {
      res = "Selamat siang"
  }
  if (time >= 15) {
      res = "Selamat sore"
  }
  if (time >= 18) {
      res = "Selamat malam"
  }
  return res
}