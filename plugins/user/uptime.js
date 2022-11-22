import anu from '../../lib/function.js'
let handler = async (m, { conn }) => {
    let _uptime = process.uptime() * 1000
    let uptime = anu.clockString(_uptime)

m.reply(`
┌─〔 R U N T I M E 〕
├ Bot Aktif Selama 
├ ${uptime}
└────
    `.trim())
}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i
handler.register = false

export default handler