let handler = async (m, { conn }) => {
  await sock.groupParticipantsUpdate(
    m.chat, 
    [m.sender],
    "demote" // replace this parameter with "remove", "demote" or "promote"
)
 //   await conn.groupDemoteAdmin(m.chat, [m.sender])
  }
  handler.command = /^down.$/i
  handler.rowner = true
  handler.botAdmin = true
  module.exports = handler
  