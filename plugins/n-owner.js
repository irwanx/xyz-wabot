const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => await conn.sendMessage(m.chat, `
*"Penjelasan OWNER/PEMILIK BOT"*

Owner atau Pemilik Bot adalah orang yang membuat bot. OWNER BUKANLAH BOT. chat owner apabila ada kepentingan atau ada yang perlu di tanyakan soal bot whatsapp.
`, MessageType.text, ci1fdocsm)
handler.command = /^panduanowner/i

module.exports = handler