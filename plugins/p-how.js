let handler = async (m, { conn }) => await conn.sendMessage(m.chat, {text:`
*"Cara menggunakan bot dan prefix"*

Cara menggunakan bot adalah dengan mengetikkan command bot. List command bot ada pada menu bot. jangan lupa, untuk mengakses command harus menggunakan prefix.\nPrefix XyZ666x bot adalah all prefix.\nContoh penggunaan prefix dan command yang benar: *.menu*
`}, { quoted: m})
handler.command = /^(ph)$/i

module.exports = handler