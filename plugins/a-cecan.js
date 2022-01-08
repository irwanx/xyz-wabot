let fetch = require("node-fetch")
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://raw.githubusercontent.com/irwanx/db/master/random/cecan.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
const buttons = [
    {buttonId: `${usedPrefix + command}`, buttonText: {displayText: 'Next'}, type: 1}
  ]
  
  const btn = {
      image: {url: cita},
      caption: "Nihh Ketemuuuu",
      footer: wm,
      buttons: buttons,
      headerType: 4
  }
   await conn.sendMessage(m.chat, btn, {quoted: m, fromMe: false})
}

handler.tags = ['anu', 'update']
handler.help = ['cecan']
handler.command = /^(cecan)$/i
handler.limit = true

module.exports = handler