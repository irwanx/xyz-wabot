let handler = async(m, { isOwner, isAdmin, conn, text, participants }) => {
if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
const delay = time => new Promise(res => setTimeout(res, time))
var b = await conn.groupMetadata(m.chat)
m.reply(`Otw Tag ${b.participants.length} Nomor Selama ${b.participants.length * 1.5} detik`)
const t = m.quoted && m.quoted.text ? m.quoted.text : text
var data = await b.participants.map(v => v.id)
for ( let i = 0 ; i < data.length; i++) {
	await conn.sendMessage(m.chat, {text: `${t}

@${data[i].split("@")[0]}`, mentions: [data[i]]}, {quoted: {key:{fromMe: false, participant: '0@s.whatsapp.net', remoteJid: "status@broadcast"}, message:{ conversation: "Tagall By Admin"}}})
await delay(1500)
}
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(t(agall)?)$/i

module.exports = handler
