let handler = async (m) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)

let capt = `┌〔 aktif selama 〕
├ ${uptime}
└────`
await sock.sendTemplateButtonLoc(m.chat, capt, wm, await(await require('node-fetch')(fla + 'Uptime')).buffer(), 'Menu', '#menu', m)
}
handler.help = ['uptime']
handler.tags = ['info']
handler.command = /^(uptime)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}