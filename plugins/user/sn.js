import { createHash } from 'crypto'
let handler = async (m, { conn, isGroup, isRegister }) => {
    let sn = createHash('md5').update(m.sender).digest('hex')
    if(m.isGroup) m.reply(`Serial Number telah di kirim ke private chat`)
    conn.reply(m.sender, `${sn}`)
}
handler.help = ['sn']
handler.tags = ['xp']
handler.command = /^((cek)?sn(cek)?)$/i

handler.register = true

export default handler
