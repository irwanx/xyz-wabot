let handler = async (m, { conn, args, participants }) => {
        const groupAdmins = participants.filter(p => p.admin)
        const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    let txt = await conn.sendTr(`List Admin Group
Total: `) + ' ' +  groupAdmins.length + `


${listAdmin}`
conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })

}
handler.help = ['listadmin']
handler.tags = ['group']
handler.command = /^(adminlist|listadmin)$/i
handler.group = true
handler.register = false

export default handler