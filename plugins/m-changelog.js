const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => await conn.sendMessage(m.chat, `
╭━━•›ꪶ ۪۪⸙ ━ ━ ━ ━ ꪶ ۪۪⸙‹•━━╮ 
┃╭┈─────────────⩵꙰ཱི࿐ 
┃╰──*UPDATES*──➤ ↶↷* 
╰•͙✩̣̣ V 2.2.0
⁙┃ + Update Fitur Menu
⁙┃ + Update Fitur Welcome
⁙┃ + Update Fitur Sewa
⁙┃ + Update Fitur Donasi
⁙┃ 
⁙┃   Dan Masih Ada Lagi,,,
⁙┃ Nantikan Update Selanjutnya
⁙┃ 
⁙╰•°°°🕊°°°°°🕊°°°°°°🕊°°°°°°°°`, MessageType.text, ci1fdocs)

handler.help = ['changelog']
handler.tags = ['main']
handler.command = /^changelog/i

module.exports = handler