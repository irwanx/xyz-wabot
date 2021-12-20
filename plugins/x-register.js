let fs = require('fs')
const { createHash } = require('crypto')
let util = require('util')
let path = require('path')
let fetch = require('node-fetch')
let levelling = require('../lib/levelling')
let PhoneNumber = require('awesome-phonenumber')
let { perfomance } = require('perf_hooks')
let { MessageType, mentionJid } = require('@adiwajshing/baileys')

let handler = async function (m, { conn, text, usedPrefix }) {
  let user =global.db.data.users[m.sender]
  let pepe = image
  if (user.registered === true) throw `Anda Sudah Terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN>`
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let totalreg = Object.keys(global.db.data.users).length
  let name = conn.getName(m.sender)
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
let caption = `
╭━━━━━━━━━━━━┈ ❋۪۪⸙
│ *DAFTAR SUKSES*
│ *Terimakasih Sudah*
│ *Mendaftarkan Diri*
│ *Dalam Database*
╰┬────────────┈ ⳹
┌┤◦➛*Nama*    : ${name}
││◦➛*Nomor*   : ${who.split`@`[0]}
││◦➛*SN*      : ${sn}
││◦➛*Total Reg* : ${totalreg} Orang
││◦➛*Status*    : ☑️TERVERIFIKASI
│╰────────────┈ ⳹
│ *Silahkan Ketik* *_#menu_*
│ *Untuk Melanjutkan*
╰━━━━━━━━━━━━┈ ❋۪۪⸙

*「 ${namabot} 」*
`.trim()
conn.sendMessage(m.chat, caption, MessageType.text, ci1fdocs)
}
handler.help = ['daftar', 'reg', 'register']
handler.tags = ['xp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler