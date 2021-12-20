//let { getBuffer, succes } = require('../lib/functions.js');
let fs = require('fs')

let handler = async (m, { conn, text }) => {

let data = fs.readFileSync('./lib/hack.js')
let parse = JSON.parse(data)
let random = Math.floor(Math.random() * parse.length);
let json = parse[random]

  conn.send2Button(m.chat, `Sukses Bobol Bank Satria\n\nSaldo & Limit Yang Diambil ${json.exp}\nKamu Bisa Cek LIMIT/EXP KAMU Di Bawah Ini`, wm, 'Cek', '#limit', 'Hack Lagi', 'xhack', m)
   global.db.data.users[m.sender].exp += json.exp * 1
   global.db.data.users[m.sender].limit += json.exp * 1
}
handler.help = ['hack']
handler.tags = ['premium', 'update']
handler.command = /^hack$/i
handler.owner = false
handler.mods = false
handler.premium = true

handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = 150

module.exports = handler