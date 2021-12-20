let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./src/sticker/Gamau.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Gamau*', 'status@broadcast')
}
handler.customPrefix = /^(gamau|tidakmau|moh|wegah)$/i
handler.command = new RegExp

module.exports = handler