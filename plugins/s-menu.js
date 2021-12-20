let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./src/sticker/menu.webp')
conn.reply(m.chat, stc, m)
}
handler.customPrefix = /^(menu|menuu)$/i
handler.command = new RegExp

module.exports = handler