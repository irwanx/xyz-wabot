let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
let res = await fetch('https://raw.githubusercontent.com/irwanx/db/master/random/cecan.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
conn.sendFile(m.chat, cita, 'cecan.jpg', 'Ini Bukan? ', m) 
}

handler.tags = ['anu', 'update']
handler.help = ['cecan']
handler.command = /^(cecan)$/i
handler.limit = true

module.exports = handler