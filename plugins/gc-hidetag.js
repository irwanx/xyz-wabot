let handler = async(m, { isOwner, isAdmin, conn, text, participants }) => {
if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
var b = await conn.groupMetadata(m.chat)
const t = m.quoted && m.quoted.text ? m.quoted.text : text
var d = await b.participants.map(v => v.id)
	await conn.sendMessage(m.chat, {text: `${t}`, mentions: d}, {quoted: {key:{fromMe: false, participant: '0@s.whatsapp.net', remoteJid: "status@broadcast"}, message:{ conversation: "HIDETAG BY ADMIN"}}})
}
handler.help = ['hidetag'].map(v => v + ' [teks]')
handler.tags = ['group']
handler.command = /^(pengumuman|announce|hiddentag|hidetag)$/i

module.exports = handler
