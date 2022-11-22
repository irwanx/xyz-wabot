let handler = async (m, { conn }) => {
    let donasi = `╭┈─────────────⩵꙰ཱི࿐ 
╰──*DONATE*──➤ ↶↷* 
 ${conn.user.name}

 • DANA     : 0888-2611-841
 • OVO      : 0888-2611-841
 • SAWERIA  : ${set.swr}`
    await m.reply(donasi)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler