let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${Math.floor(Math.random() * 10)} ${pickRandom(['Iya','Bisa','Tentu saja bisa','Tentu bisa','Sudah pasti','Sudah pasti bisa','Tidak','Tidak bisa','Tentu tidak','tentu tidak bisa','Sudah pasti tidak'])}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['', 'kah'].map(v => 'bisa' + v + ' <teks>?')
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^bisa(kah)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
