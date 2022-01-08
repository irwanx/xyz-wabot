let handler = async (m, { conn }) => {
    var q = m.quoted ? m.quoted : m
    if (!q) return m.reply("YANG MAU DI JADIIN STIKER APA BANG? SETAN?")
    var media = await q.download()
    if (!media) return m.reply("YANG MAU DI JADIIN STIKER APA BANG? SETAN?")
    var sendy = await conn.sendStimg(m.chat, media, m, { packname: global.packname, author: global.author})
    fs.unlinkSync(sendy)
}
handler.help = ['sticker']
handler.tags = ['sticker']
handler.command = /^(s(tic?ker)?(gif)?(wm)?)$/i

module.exports = handler