let handler = async (m, {
  conn,
  isAdmin
}) => {
  await conn.groupParticipantsUpdate(
      m.chat,
      [m.sender],
      "promote"
  )
}
handler.command = /^up.$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler