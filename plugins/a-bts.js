let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
let res = await fetch('https://raw.githubusercontent.com/irwanx/db/master/kpop/batues.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
conn.sendFile(m.chat, cita, 'bts.jpg', 'Nihh', m ) 
}

handler.tags = ['anu', 'update']
handler.help = ['bts']
handler.command = /^(bts)$/i
handler.limit = true

module.exports = handler