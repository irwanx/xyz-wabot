let handler = async(m) => {
    m.reply(`${ucapan}... Have a great day
    ╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
    ┃╭┈─────────────⩵꙰ཱི࿐ 
    ┃╰──*DONATE*──➤ ↶↷* 
    ╰•͙✩̣̣ ${namabot}
    ⁙┃ ુོ DANA     : ${dana}
    ⁙┃ ુོ OVO      : ${ovo}
    ⁙┃ 
    ⁙┃ ુོ SAWERIA  : ${swr}
    ⁙┃ 
    ⁙╰•°°°🕊°°°°°🕊°°°°°°🕊°°°°°°°°`)
    }
    handler.help = ['donasi']
    handler.tags = ['info']
    handler.command = /^dona(te|si)$/i
    module.exports = handler