const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => await conn.sendMessage(m.chat, `
*"Apa itu bot whatsapp"*

Bot adalah sebuah program komputer yang dijalankan di lingkungan. Bot Whatsapp adalah program komputer yang di-aplikasikan di whatsapp. Bot whatsapp diharapkan dapat membantu beberapa aktifitas maupun sekedar untuk senang senang.
`, MessageType.text, ci1fdocsm)
handler.command = /^panduanbot/i

module.exports = handler