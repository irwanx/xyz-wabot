let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./src/sticker/Ikutan.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*G*', 'status@broadcast')
}
handler.customPrefix = /^(ikutan|ikut)$/i
handler.command = new RegExp

module.exports = handler