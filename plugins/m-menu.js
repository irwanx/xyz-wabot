let levelling = require('../lib/levelling')
let { MessageType, mentionedJid } = require('@adiwajshing/baileys')
let fs = require('fs')
const util = require('util')
const os = require('os')
let path = require('path')
let { createHash} = require('crypto')
let fetch = require('node-fetch')
let { perfomance } = require('perf_hooks')
let moment = require('moment-timezone')
//====================BATAS NGAB=================
const defaultMenu = {
  before: `
%readmore`.trimStart(),
  header: '╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮\n┃╭┈─────────────⩵꙰ཱི࿐\n┃╰── %category ──➤ ↶↷\n╰•͙✩̣̣̣̣ Hai, %name!',
  body: '⁙┃〲 %cmd %islimit %isPremium',
  footer: '⁙╰•°°°🕊°°°°°🕊°°°°°°🕊°°°°°°°°\n',
  after: `
${'_%npmdesc_'}
`,
}
//bts============================================================

let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  await conn.fakeReply(m.chat, wait, wan, '', 'status@broadcast')
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'update', 'game', 'jadian', 'xp', 'islamic', 'stiker', 'kerangajaib', 'quotes', 'admin', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'anu', 'info', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'Utama',
    'game': 'Game',
    'jadian': 'jadian',
    'anu': 'Anu', 
    'xp': 'Exp & Limit',
    'sticker': 'Stiker',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup',
    'premium': 'Premium',
    'internet': 'Internet',
    'anonymous': 'Anonymous Chat',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'fun': 'Fun',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'quran': 'Al Qur\'an',
    'islamic': 'Islamic',
    'audio': 'Pengubah Suara',
    'jadibot': 'Jadi Bot',
    'info': 'Info',
    '': 'Tanpa Kategori',
    'nsfw': 'NSFW',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'jadian') tags = {
    'jadian': 'Jadian'
  }
  if (teks == 'anu') tags = {
    'anu': 'Anu'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
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
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
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
  if (teks == 'quran') tags = {
    'quran': 'Al Qur\'an'
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
  if (teks == 'update') tags = {
    'update': 'Update'
  }

  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let tulisan = `
${ucapan()} ${name}. Have a great day！
SC Bot: 
https://github.com/irwanx/xyz-wabot
`.trim()
    let sangek = `Berikut adalah list Menu Bot. klik pada "Click Here!" untuk melihat list menu.\n\nJoin juga grup gabut Bot!\nGrup 1: ${_gc1}\nGrup 2: ${_gc2}\n\n${watermark}`
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
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
    global.wm = `${week}, ${date}
Tanggal Islam: ${dateIslamic}
Time: ${waktuwib}

© irwan_x_yans
https://github.com/irwanx/xyz-wabot
Aktif Selama: ${uptime}`
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": tulisan,
          "description": sangek,
          "buttonText": "Click Here!",
          "listType": "SINGLE_SELECT",
          "sections": [
            {
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
              }, {
                "title": "Script Bot",
                "description": "Sumber kode bot ini",
                "rowId": `${_p}sc`
              }],
              "title": "Informasi Bot"
            }, {
              "rows": [{
                "title": `Semua Perintah`,
                "description": "Menu Semua Perintah",
                "rowId": `${_p}? all`
                }],
              "title": "─────「 1 」"
            }, {
              "rows": [{
                "title": `Game`,
                "description": "Menu untuk Game",
                "rowId": `${_p}? game`
              }],
              "title": "─────「 2 」"
            }, {
              "rows": [{
                "title": `XP`,
                "description": "Menu untuk XP",
                "rowId": `${_p}? xp`
              }],
              "title": "─────「 3 」"
            }, {
              "rows": [{
                "title": `Sticker`,
                "description": "Menu untuk Sticker",
                "rowId": `${_p}? stiker`
              }],
              "title": "─────「 4 」"
            }, {
              "rows": [{
                "title": `Kerang Ajaib`,
                "description": "Puja kerang ajaib...",
                "rowId": `${_p}? kerangajaib`
              }],
              "title": "─────「 5 」"
            }, {
              "rows": [{
                "title": `Quotes`,
                "description": "Menu untuk Quotes",
                "rowId": `${_p}? quotes`
              }],
              "title": "─────「 6 」"
            }, {
              "rows": [{
                "title": `Admin`,
                "description": "Menu untuk Admin",
                "rowId": `${_p}? admin`
              }],
              "title": "─────「 7 」"
            }, {
              "rows": [{
                "title": `Grup`,
                "description": "Menu untuk Group",
                "rowId": `${_p}? group`
              }],
              "title": "─────「 8 」"
            }, {
              "rows": [{
                "title": `Premium`,
                "description": "Menu untuk Premium Users",
                "rowId": `${_p}? premium`
              }],
              "title": "─────「 9 」"
            }, {
              "rows": [{
                "title": `Internet`,
                "description": "Menu untuk menjelajahi Internet...",
                "rowId": `${_p}? internet`
              }],
              "title": "─────「 10 」"
            }, {
              "rows": [{
                "title": `Anonymous Chat`,
                "description": "Menu untuk Anonymous Chat",
                "rowId": `${_p}? anonymous`
              }],
              "title": "─────「 11 」"
            }, {
              "rows": [{
                "title": `Nulis & Logo`,
                "description": "Menu untuk Nulis & Logo",
                "rowId": `${_p}? nulis`
              }],
              "title": "─────「 12 」"
            }, {
              "rows": [{
                "title": `Downloader`,
                "description": "Menu Downloader",
                "rowId": `${_p}? downloader`
              }],
              "title": "─────「 13 」"
            }, {
              "rows":[{
                "title": `Tools`,
                "description": "Menu untuk Tools",
                "rowId": `${_p}? tools`
              }],
              "title": "─────「 14 」"
            }, {
              "rows": [{
                "title": `Fun`,
                "description": "Menu Fun",
                "rowId": `${_p}? fun`
              }],
              "title": "─────「 15 」"
            }, {
              "rows": [{
                "title": `Database`,
                "description": "Menu untuk Database",
                "rowId": `${_p}? database`
              }],
              "title": "─────「 16 」"
            }, {
              "rows": [{
                "title": `Vote & Absen`,
                "description": "Menu untuk Vote & Absen",
                "rowId": `${_p}? vote`
              }],
              "title": "─────「 17 」"
            }, {
              "rows": [{
                "title": `Islamic`,
                "description": "Menu Islamic",
                "rowId": `${_p}? islamic`
              }],
              "title": "─────「 18 」"
            }, {
              "rows": [{
                "title": `Pengubah Suara`,
                "description": "Menu Pengubah Suara",
                "rowId": `${_p}? audio`
              }],
              "title": "─────「 19 」"
            }, {
              "rows": [{
                "title":  `Jadi Bot`,
                "description": "Numpang",
                "rowId": `${_p}? jadibot`
              }],
              "title": "─────「 20 」"
            }, {
              "rows": [{
                "title": `Info`,
                "description": "Menu untuk Info",
                "rowId": `${_p}? info`
              }],
              "title": "─────「 21 」"
            }, {
              "rows": [{
                "title": `Tanpa Kategori`,
                "description": "Menu Tanpa Kategori",
                "rowId": `${_p}? tanpakategori`
              }],
              "title": "─────「 22 」"
            }, {
              "rows": [{
                "title":  `Owner Menu`,
                "description": "Menu Khusus Owner",
                "rowId": `${_p}? owner`
              }],
              "title": "─────「 23 」"
            }, {
              "rows": [{
                "title":  `Anu Menu`,
                "description": "Menu Untuk anu",
                "rowId": `${_p}? anu`
              }],
              "title": "─────「 24 」"
            }, {
              "rows": [{
                "title":  `Jadian Menu`,
                "description": "Menu Nembak Online",
                "rowId": `${_p}? jadian`
              }],
              "title": "─────「 25 」"
            }
          ], "contextInfo": {
            "stanzaId": m.key.id,
            "participant": m.sender,
            "quotedMessage": m.message
          }
        }
      }, {}), { waitForAck: true })
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
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send2ButtonLoc(m.chat, await(await fetch(thumb)).buffer(), text.trim(), wm,'Pemilik Bot', `${_p}owner`, 'Donasi', `${_p}donasi`, m)
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

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

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