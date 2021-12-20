const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => await conn.sendMessage(m.chat, `
[ *INFORMATION BOT* ]
Base Default: wabot-aq/stikerinbot
_______________________
Script Ini dibuat dari pengodean ulang stikerinbot. Dikode ulang dari 1/1 file di buat dan dipercanggih lagi dan di build menggunakan beberapa api.

https://github.com/irwanx/xyz-wabot
`, MessageType.text, ci1fdocs)

handler.command = /^(sc|script|sumberkode|sourcecode)$/i
handler.help = ['script', 'sc']
handler.tags = ['main']

module.exports = handler