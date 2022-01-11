let handler  = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://raw.githubusercontent.com/irwanx/db/master/kata-kata/fiersa-besari.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]

   await conn.reply(m.chat, cita, m)
}
handler.help = ['fiersa'].map(v => v + 'besari')
handler.tags = ['quotes']
handler.command = /^(fiersabesari)$/i
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
