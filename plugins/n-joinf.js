const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => await conn.sendMessage(m.chat, `
Cara Memasukkan Bot Ke Grup.
Pake Command #join <link>
Contoh>
#join https://chat.whatsapp.com/L508viIjjPwHpYEqgTxqj6

*JANGAN LUPA BACA PERATURAN BOT NYA YAA*
`, MessageType.text, ci1fdocs)
handler.command = /^joinf$/i

module.exports = handler