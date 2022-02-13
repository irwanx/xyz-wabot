let handler = async (m, { conn }) => await conn.sendMessage(m.chat, {text: `
Cara Memasukkan Bot Ke Grup.
Pake Command #join <link> <hari>
Contoh>
#join https://chat.whatsapp.com/L508viIjjPwHpYEqgTxqj6 1`, jpegThumbnail: blur}, { quoted: m})
handler.command = /^pa$/i

module.exports = handler