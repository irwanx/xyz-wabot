const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => await conn.sendMessage(m.chat, `
*"Berlangganan"*

Layanan berlangganan XyZ666x Bot adalah dengan menyewa bot dalam jumlah waktu ke dalam group. Untuk list harga/layanan silahkan baca pada *.sewa*
`, MessageType.text, ci1fdocs)
handler.command = /^panduanberlangganan/i

module.exports = handler