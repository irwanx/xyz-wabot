const { createHash } = require('crypto')
let handler = async function (m, { args }) {
  if (!args[0]) throw 'Serial Number kosong\nMager Nulis SN mnding gausah unreg.wkkw'
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Serial Number salah'
  user.registered = false
  const caption = `Unreg berhasil!`
conn.sBL(m.chat, caption, wm, await(await require('node-fetch')(img)).buffer(), [['Menu', '#menu']], m)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['xp']

handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler

