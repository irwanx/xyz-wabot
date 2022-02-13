let handler = async (m, {
    conn,
    args
}) => {
    let group = m.chat
    let jmbt = await conn.groupInviteCode(group)
    conn.reply(m.chat, `*Link Group*\n\nhttps://chat.whatsapp.com/` + jmbt, m)
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler