let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply('Konfirmasi ke owner untuk informasi lebih lanjut.')
  await conn.sendContact(m.chat, global.set.owner[0][0], global.set.owner[0][1], m)
}
handler.command = /^(masuk)$/i

module.exports = handler