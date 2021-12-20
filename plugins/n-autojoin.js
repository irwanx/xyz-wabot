let { MessageType } = require('@adiwajshing/baileys')
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, usedPrefix }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link Salah'
    let res = await conn.acceptInvite(code)
    conn.send(`Berhasil join grup ${res.gid}`).then(() => {
        var jumlahHari = 86400000 * 9999
        var now = new Date() * 1
        if (now < global.db.data.chats[res.gid].expired) global.db.data.chats[res.gid].expired += jumlahHari
        else global.db.data.chats[res.gid].expired = now + jumlahHari
    })
    await conn.sendMessage(res.gid, `*${conn.user.name}* adalah bot whatsapp yang dibangun dengan Nodejs, *${conn.user.name}* ini baru saja bergabung di grup ini diundang oleh @${m.sender.split`@`[0]}

ketik *#menu* untuk melihat daftar perintah`, MessageType.text, ci1fdocs)
}
handler.help = ['autojoin <chat.whatsapp.com>']
handler.tags = ['main']
handler.command = /^autojoin$/i
handler.owner = true
handler.limit = 10

module.exports = handler