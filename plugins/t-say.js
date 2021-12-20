const { MessageType } = require("@adiwajshing/baileys")

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `uhm. teksnya mana?\n\ncontoh:\n${usedPrefix + command} halo`
    conn.sendMessage(m.chat, text, MessageType.text, ci1fdocs)
}
handler.help = ['say <teks>']
handler.tags = ['tools']
handler.command = /^(say)$/i

module.exports = handler