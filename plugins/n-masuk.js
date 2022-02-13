let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply('Konfirmasi ke owner untuk informasi lebih lanjut.')
  await conn.sendContact(m.chat, global.owner[0], conn.getName(global.owner[0] + '@s.whatsapp.net'), m)
  //this.sendContact(m.chat, '62882008369956@s.whatsapp.net', 'Irwan', m)
}
handler.command = /^(masuk)$/i

module.exports = handler