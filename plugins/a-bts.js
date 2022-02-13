let fetch = require("node-fetch")
let handler = async (m, {
    conn,
    usedPrefix,
    command
}) => {
    let res = await fetch('https://raw.githubusercontent.com/irwanx/db/master/kpop/batues.txt')
    let txt = await res.text()
    let arr = txt.split('\n')
    let cita = arr[Math.floor(Math.random() * arr.length)]
    //await sock.sendMessage(m.chat, btn, {quoted: m, fromMe: false})
    await sock.sendMedia(m.chat, cita, m, {
        caption: `Nihh bwang ketemuu,,`
    })
}
handler.tags = ['anu', 'update']
handler.help = ['bts']
handler.command = /^(bts)$/i
handler.limit = true

module.exports = handler