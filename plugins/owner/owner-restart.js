import db from '../../lib/database.js'
import { spawn } from 'child_process'
let handler = async (m, { args, usedPrefix, conn }) => {
    //-- HELP
    if (args[0] == 'help') return conn.reply(m.chat, `*HELP COMMAND*

Comand ini untuk merestart bot
Contoh:
${usedPrefix}restart

This command is to restart the bot
Ex:
${usedPrefix}restart`, null, m)
    db.data.settings[conn.user.jid].status = new Date() * 1
    if (!process.send) throw m.reply('Dont: node main.js\nDo: node index.js')
    if (conn.user.jid == conn.user.jid) {
        setTimeout(async () => {
            await m.reply('Bot sukses direstart')
        }, 1000)

        await m.reply(`Bot sedang di restart...`)
        await db.write()
        process.send('reset')

    } else throw '_eeeeeiiittsssss..._'
}

handler.help = ['restart' + (process.send ? '' : ' (Tidak Bekerja)')]
handler.tags = ['owner']
handler.command = /^restart$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
export default handler