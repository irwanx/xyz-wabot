const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => await conn.sendMessage(m.chat, `
*"Cara menggunakan bot dan prefix"*

Cara menggunakan bot adalah dengan mengetikkan command bot. List command bot ada pada menu bot. jangan lupa, untuk mengakses command harus menggunakan prefix.\nPrefix XyZ666x bot adalah all prefix.\nContoh penggunaan prefix dan command yang benar: *.menu*
`, MessageType.text, ci1fdocs)
handler.command = /^panduanhow/i

module.exports = handler