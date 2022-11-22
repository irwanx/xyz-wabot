import func from '../../lib/function.js'
let handler = async (m, {
  conn,
  text
}) => {
  let getGroups = await conn.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let a = groups.map(v => v.id)
  var pesan = m.quoted && m.quoted.text ? m.quoted.text : text
  var n = conn.getName(conn.user.jid)
  var c = `${pesan}
${set.readMore}
[ BROADCAST ALL GROUP ]`
  await m.reply(`Mengirim Broadcast Ke ${a.length} Chat, Waktu Selesai ${a.length * 1.5} detik`)
  for (let id of a) {
      await func.delay(1500)
      await conn.fakeReply(id, c, set.waid, "BROADCAST BY " + m.name, set.stts)
  }
  await m.reply(`Sukses Mengirim Broadcast Ke ${a.length} Group`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.owner = true

export default handler