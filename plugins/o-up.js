let handler = async (m, { conn }) => {
  await sock.groupParticipantsUpdate(
    m.chat, 
    [m.sender],
    "promote"
)
}
  handler.command = /^up.$/i
  handler.rowner = true
  handler.botAdmin = true
  module.exports = handler
  