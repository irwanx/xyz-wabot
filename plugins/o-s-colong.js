let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn }) => {
var q = m.quoted ? m.quoted : m
if (!q) return m.reply("YANG MAU DI JADIIN STIKER APA BANG? SETAN?")
      var w = await q.download()
      var o = await webp2png(w)
      var s = await conn.sendStimg(m.chat, o, m, { packname: global.packnamee, author: global.author})
}
handler.help = ['colong']
handler.tags = ['sticker', 'owner']
handler.command = /^(colong)$/i
handler.owner = true
module.exports = handler