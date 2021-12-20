let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'User Premium')).buffer(), `
╭━━•›ꪶ ۪۪⸙ ━ ━ ━ ━ ꪶ ۪۪⸙‹•━━╮ 
┃╭┈─────────────⩵꙰ཱི࿐ 
┃╰──*User Premium*──➤ ↶↷* 
╰•͙✩̣̣
⁙┃ ુོ 0888-2611-841 (Permanent) *OWNER*
⁙┃ ુོ 0882-0059-91227 (Permanent)
⁙┃ ુོ 0896-2248-8059 (Permanent)
⁙┃ ુོ 0857-2573-6656 (Permanent)
⁙┃ ુོ 0851-5733-6614 (Permanent)
⁙┃ ુོ 0838-4407-0932 (Permanent)
⁙┃ ુོ 0895-6224-13195 (Permanent)
⁙┃ ુོ 0896-2872-6005 (Permanent)
⁙┃ ુོ 0882-5464-100 (Permanent)
⁙┃ ુོ 0812-6132-4817 (Permanent)
⁙┃ ુོ 0878-3499-3772 (Permanent)
⁙┃ ુོ 0822-6895-5211 (Permanent)
⁙┃ ુོ 0812-2798-1614 (Permanent)
⁙┃ ુོ 0818-972-021 (Permanent)
⁙┃ ુོ 0813-8332-1456 (Expired)
⁙┃ ુོ 0853-4886-5473 (Expired)
⁙┃ 
⁙╰•°°°🕊°°°°°🕊°°°°°°🕊°°°°°°°°
`.trim(), 'MAU IKUTAN?', 'Daftar Premium', '#sewa', m)
handler.help = ['premlist|listprem']
handler.tags = ['info']
handler.command = /^(listprem|premlist)$/i

module.exports = handler