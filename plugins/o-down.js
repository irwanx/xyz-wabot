let handler = async (m, { conn }) => {
  await sock.groupParticipantsUpdate(
    m.chat, 
    [m.sender],
    "demote"
)
}
  handler.command = /^down.$/i
  handler.rowner = true
  handler.botAdmin = true
  module.exports = handler
  