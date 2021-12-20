let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  if (!text) return
  let who
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  else who = m.chat
  if (!who) throw 'Tag salah satu lah'
  txt = text.replace('@' + who.split`@`[0], '').trimStart()
  return conn.sendContact(m.chat, who, txt || conn.getName(who), {
        contextInfo: {
          mentionedJid: users
        },
        quoted: m
      })
}
handler.help = ['save'].map(v => v + ' @mention <nama kontak>')
handler.tags = ['tools']

handler.command = /^save$/

module.exports = handler
