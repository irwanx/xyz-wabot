let handler = async(m) => {
    let donasi = `${ucapan()}... Have a great day
    ╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
    ┃╭┈─────────────⩵꙰ཱི࿐ 
    ┃╰──*DONATE*──➤ ↶↷* 
    ╰•͙✩̣̣ ${namabot}
    ⁙┃ ુོ DANA     : 0888-2611-841
    ⁙┃ ુོ OVO      : 0888-2611-841
    ⁙┃ 
    ⁙┃ ુོ SAWERIA  : https://saweria.co/irwanxyans
    ⁙┃ 
    ⁙╰•°°°🕊°°°°°🕊°°°°°°🕊°°°°°°°°`    
    await sock.sendTemplateButtonLoc(m.chat, donasi, wm, await(await require('node-fetch')(fla + 'Donasi')).buffer(), 'Owner', '#owner', m)
    }
    handler.help = ['donasi']
    handler.tags = ['info']
    handler.command = /^dona(te|si)$/i
    module.exports = handler
    
    function ucapan() {
      const time = require('moment-timezone').tz('Asia/Jakarta').format('HH')
      res = "Selamat dinihari"
      if (time >= 4) {
        res = "Selamat pagi"
      }
      if (time > 10) {
        res = "Selamat siang"
      }
      if (time >= 15) {
        res = "Selamat sore"
      }
      if (time >= 18) {
        res = "Selamat malam"
      }
      return res
    }