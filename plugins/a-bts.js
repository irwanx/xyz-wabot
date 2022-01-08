let fetch = require("node-fetch")
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://raw.githubusercontent.com/irwanx/db/master/kpop/batues.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
//await sock.sendMessage(m.chat, {image: {url: cita}}, {quoted: m, fromMe: false})
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
   //await sock.sendMessage(m.chat, btn, {quoted: m, fromMe: false})
   await sock.sendTemplateButtonImg(m.chat, `Nihh bwang ketemuu,,`, wm, await(await fetch(cita)).buffer(), 'Next', `${usedPrefix + command}`, m)
  
}
handler.tags = ['anu', 'update']
handler.help = ['bts']
handler.command = /^(bts)$/i
handler.limit = true

module.exports = handler