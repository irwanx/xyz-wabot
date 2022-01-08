let handler = async (m, { conn }) => {
    let bot = conn.user.jid // Bot
    let q = m.quoted ? m.quoted : m
        conn.updateProfilePicture(bot, img)
        m.reply('Berhasil!')
}
handler.help = ['setbotpp']
handler.command = /^(setbotpp)$/i
handler.owner = true

module.exports = handler
