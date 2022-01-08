let handler = async(m, { conn, text, participants }) => {
    let teks = `*👥 Mention All*\n\n *Message : ${text ? text : 'Nothing'}*\n\n╭━━•›ꪶ ۪۪⸙ ━ ━ ━ ━ ꪶ ۪۪⸙‹•━━╮\n┃╭┈─────────────⩵꙰ཱི࿐\n┃╰──*TAG ALL*──➤ ↶↷* \n╰•͙✩̣̣\n⁙┃ ુོ \n`
                    for (let mem of participants) {
                      teks += `⁙┃ ુོ @${mem.id.split('@')[0]}\n`
                  }
                  teks += `⁙╰•°°°🕊°°°°°🕊°°°°°°🕊°°°°°°°°\n⋙ *Admin Group* ⋘`
                  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['ptagall <pesan>']
  handler.tags = ['group']
  handler.command = /^(otagall)$/i
  
  handler.group = true
  handler.owner = true
  
  module.exports = handler