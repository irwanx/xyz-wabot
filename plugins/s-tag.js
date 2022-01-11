let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, participants, args }) => {
var a = (await conn.groupMetadata(m.chat)).participants.map(u => u.id)
 try{
    var q = m.quoted ? m.quoted : m
    var w = await q.download()
    var o = await webp2png(w)
    } finally {
    if(o) await conn.sendStimg(m.chat, o, m, { mentions : a, packname: packname|| ' ', author: author|| ' ' })
    else throw `balas sticker ny`
}
}
    handler.help = ['stag <reply sticker>', 'stickertag <replay sticker>', 'stikertag <reply sticker>']
handler.tags = ['sticker']
handler.command = /^(s(tag|tickertag|tikertag))$/
handler.group = true
handler.premium = true
module.exports = handler