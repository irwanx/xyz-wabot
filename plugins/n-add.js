const { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendMessage(m.chat, `
*"Cara menambahkan bot ke group"*

Cara menambahkan bot ke dalam group.
pake #join [link]
contohnya

#join https://chat.whatsapp.com/L508viIjjPwHpYEqgTxqj6

Untuk Daftar Premium Silahkan baca pada menu sewa dengan mengetikkan *.sewa*. XyZ bot memberlakukan trial gratis 12 jam. Setelah 12 jam maka bot akan keluar dari group. ada opsi 1 minggu, 1 bulan sampai VIP Permanent
`, MessageType.text, ci1fdocs)
handler.command = /^panduanadd/i

module.exports = handler