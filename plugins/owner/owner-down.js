let handler = async(m, {
    conn
}) => {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], "demote")
}
handler.command = /^down.$/i
handler.tags = ['owner']
handler.help = ['down']

handler.register = false
handler.owner = true
handler.botAdmin = true
export default handler