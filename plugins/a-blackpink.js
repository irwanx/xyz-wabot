let fetch = require("node-fetch")
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://raw.githubusercontent.com/irwanx/db/master/kpop/blekping.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
//conn.sendFile(m.chat, cita, 'tobat.jpg', 'Nihh', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }}) 
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

handler.tags = ['anu']
handler.help = ['blackpink']
handler.command = /^(blackpink|bp)$/i
handler.limit = true

module.exports = handler