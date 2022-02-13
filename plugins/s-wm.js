let {
    webp2png
} = require('../lib/webp2mp4')
let handler = async (m, {
    conn,
    text
}) => {
    var [p, a] = text.split `|`
    if (!p) return m.reply('Masukkan Nama Package')
    if (!a) return m.reply('Masukkan Nama Author')
    var q = m.quoted ? m.quoted : m
    var w = await q.download()
    if (!w) return m.reply("Balas Stikernya Bodoh")
    var o = await webp2png(w)
    await conn.sendStimg(m.chat, o, m, {
        packname: p || '',
        author: a || ''
    })
}
handler.help = ['wm <packname> <author>']
handler.tags = ['sticker']
handler.command = /^wm$/i

module.exports = handler