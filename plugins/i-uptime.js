let handler = async (m) => {
m.reply`╭┈─────────────⩵꙰ཱི࿐
╰──STATUS BOT!*──➤ ↶↷*
 *⸙ ુོ➪ Aktif Selama
 *⸙ ુོ➪ ${uptime}`
}
handler.help = ['uptime']
handler.tags = ['info']
handler.command = /^(uptime)$/i

module.exports = handler