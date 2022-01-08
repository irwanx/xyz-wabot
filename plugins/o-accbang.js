let handler = async (m, { conn, isAdmin }) => {
  await sock.groupParticipantsUpdate(
    m.chat, 
    [m.sender],
    "promote" // replace this parameter with "remove", "demote" or "promote"
)
  //await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.command = /^up.$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
