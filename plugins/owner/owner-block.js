import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants }) => {
    let users = m.quoted ? [m.quoted.sender] : m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
    if(!users) throw "siapa yang mau di block su?"
    let kickedUser = []
    for (let user of users)
        if (user.endsWith('@s.whatsapp.net')) {
            const res = await conn.updateBlockStatus(user, "block")
            const b = await conn.reply(user, "heheh", null)
            await conn.chatModify({
					delete: true,
					lastMessages: [{
						key: b.key,
						messageTimestamp: b.messageTimestamp
					}]
				}, user)
            kickedUser.concat(res)
            await delay(1 * 1000)
        }
    await conn.reply(m.chat, `Succes Block ${kickedUser.map(v => '@' + v.split('@')[0])}`, m, { mentions: kickedUser })

}
handler.help = ['block', 'bk'].map(v => v + ' @user')
handler.tags = ['owner']
handler.command = /^(block|bk)$/i

handler.owner = true
//handler.group = true
//handler.botAdmin = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))