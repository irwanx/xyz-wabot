let fetch = require('node-fetch')
let handler = async (m, {
    conn,
    text,
    usedPrefix,
    command
}) => {
    if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} sayang`
    let res = await (await fetch(`https://irwan-api1-xyz.herokuapp.com/api/music/liriklagu?query=${text}&apikey=IrwanGans`)).json()
    m.reply(wait)
    sock.sendMessage(m.chat, {
        text: res.result,
        jpegThumbnail: blur
    }, {
        quoted: m
    })
}
handler.help = ['lyrics', 'lirik'].map(v => v + ' <teks>')
handler.tags = ['internet']
handler.command = /^(lyrics|lirik)$/i

module.exports = handler