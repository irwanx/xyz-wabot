let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*⚠GRUP BOT⚠*
1. https://chat.whatsapp.com/L508viIjjPwHpYEqgTxqj6
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 BOT TERPERCAYA 🔥*', 'status@broadcast')
}
handler.help = ['gcb', 'gcbt']
handler.tags = ['main', 'update']
handler.command = /^gcbt|gcb$/i

module.exports = handler