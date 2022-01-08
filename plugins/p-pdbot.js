let handler = async (m, { conn }) => await conn.sendMessage(m.chat, {text:`
*"Apa itu bot whatsapp"*

Bot adalah sebuah program komputer yang dijalankan di lingkungan. Bot Whatsapp adalah program komputer yang di-aplikasikan di whatsapp. Bot whatsapp diharapkan dapat membantu beberapa aktifitas maupun sekedar untuk senang senang.
`}, { quoted: m})
handler.command = /^(pb)$/i

module.exports = handler