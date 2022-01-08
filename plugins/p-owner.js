let handler = async (m, { conn }) => await conn.sendMessage(m.chat, {text:`
*"Penjelasan OWNER/PEMILIK BOT"*

Owner atau Pemilik Bot adalah orang yang membuat bot. OWNER BUKANLAH BOT. chat owner apabila ada kepentingan atau ada yang perlu di tanyakan soal bot whatsapp.
`}, { quoted: m})
handler.command = /^(po)$/i

module.exports = handler