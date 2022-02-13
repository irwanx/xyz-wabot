let handler = async (m, {
    conn
}) => {
    try {
        var q = m.quoted ? m.quoted : m
        var media = await q.download()
        if (!media) return m.reply("YANG MAU DI JADIIN STIKER APA BANG? SETAN?")
    } finally {
        if (media) await conn.sendStimg(m.chat, media, m, {
            packname: global.packname,
            author: global.author
        })
        else throw "YANG MAU DI JADIIN STIKER APA BANG? SETAN?"
    }
}
handler.help = ['sticker']
handler.tags = ['sticker']
handler.command = /^(s(tic?ker)?(gif)?(wm)?)$/i

module.exports = handler