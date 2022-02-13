let handler = async (m, {
  conn
}) => {
  var namaOw = await conn.getName(`${owner[0]}@s.whatsapp.net`)
  await conn.sendContact(m.chat, owner[0], namaOw, m)
  await m.reply('Chat *P* Tidak Di Balas')
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler