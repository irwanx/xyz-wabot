import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants }) => {
    let users = m.quoted ? [m.quoted.sender] : m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
    let kickedUser = []
    for (let user of users)
        if (user.endsWith('@s.whatsapp.net')) {
            const res = await conn.updateBlockStatus(user, "unblock")
            const b = await conn.reply(user, "heheh", null)
            kickedUser.concat(res)
            await delay(1 * 1000)
        }
    m.reply(`Succes Unblock ${kickedUser.map(v => '@' + v.split('@')[0])}`, null, { mentions: kickedUser })

}
handler.help = ['unblock', 'unbk'].map(v => v + ' @user')
handler.tags = ['owner']
handler.command = /^(unblock|unbk)$/i

handler.owner = true
//handler.group = true
//handler.botAdmin = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))