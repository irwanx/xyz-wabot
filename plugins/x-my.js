let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    let anu = `「 BALANCE 」
Name: ${user.name}
Limit: ${user.limit}
Money: ${user.money}
Exp: ${user.exp}
Level: ${user.level}
Role: ${user.role}`
    await conn.sendTBL(m.chat, anu, wm, await (await require("node-fetch")(fla + "My")).buffer(), "Donasi", swr, null, null, "Back To Main Menu", "#menu", null, null, null, null, m)
}
handler.help = ['my', 'my @user']
handler.tags = ['xp']
handler.command = /^(my)$/i

module.exports = handler