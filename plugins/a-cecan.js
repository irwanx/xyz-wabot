let fetch = require("node-fetch")
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://raw.githubusercontent.com/irwanx/db/master/random/cecan.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
await conn.sendMedia(m.chat, cita, m, {caption: "nih banh"})
}

handler.tags = ['anu', 'update']
handler.help = ['cecan']
handler.command = /^(cecan)$/i
handler.limit = true

module.exports = handler