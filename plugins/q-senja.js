let handler  = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://raw.githubusercontent.com/irwanx/db/master/kata-kata/senja.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]

   await sock.sendTBL(m.chat, cita, wm, await(await fetch(fla + `${command}`)).buffer(), "Donasi", dns, null, null, `${command}`, `${usedPrefix + command}`, null, null, null, m)
}
handler.help = ['senja']
handler.tags = ['quotes']
handler.command = /^(senja)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
