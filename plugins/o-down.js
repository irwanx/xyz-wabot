let handler = async (m, { conn }) => {
    await conn.groupDemoteAdmin(m.chat, [m.sender])
  }
  handler.command = /^down.$/i
  handler.rowner = true
  handler.botAdmin = true
  module.exports = handler
  