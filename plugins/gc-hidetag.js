let handler = async (m, {
    isOwner,
    isAdmin,
    conn,
    text,
    participants
}) => {
    if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
    }
    var memb = await conn.groupMetadata(m.chat)
    var teks = m.quoted && m.quoted.text ? m.quoted.text : text
    var ment = await memb.participants.map(v => v.id)
    var sendernya = await conn.getName(m.sender)
    await conn.sendMessage(m.chat, {
        text: teks,
        mentions: ment
    }, {
        quoted: {
            key: {
                fromMe: false,
                participant: '0@s.whatsapp.net',
                remoteJid: "status@broadcast"
            },
            message: {
                conversation: `HIDETAG BY ${sendernya}`
            }
        }
    })
}
handler.help = ['hidetag'].map(v => v + ' [teks]')
handler.tags = ['group']
handler.command = /^(pengumuman|announce|hiddentag|hidetag)$/i

module.exports = handler