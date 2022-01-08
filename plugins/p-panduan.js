let fetch = require('node-fetch')
let moment = require('moment-timezone')
let {
    WAMessage,
    proto,
    generateWAMessageFromContent
  } = require('@adiwajshing/baileys-md')
  
let handler = async(m, { conn }) => {
   let name = conn.getName(m.sender)
    let pnd = `Selamat datang di Menu panduan Bot.
Di menu ini kamu bisa mendapatkan panduan soal bot whatsapp.

Silahkan pilih di bawah ini
    `.trim()
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        listMessage: {
            title: `${ucapan()} ${await conn.getName(m.sender)}\nHave A Great Day`,
            description: pnd,
            buttonText: 'Menu Panduan',
            listType: 1,
            footerText: wm,
            mtype: 'listMessage',
            sections: [{title: "Silahkan di pilih", rows: [
                {title: 'Panduan Owner', description: "Menampilkan Panduan Owner", rowId:".po"},
                {title: 'Panduan How', description: "Menampilkan Panduan How", rowId:".ph"},
                {title: 'Panduan Berlangganan', description: "Menampilkan Panduan Berlangganan", rowId:".pl"},
                {title: 'Panduan Add', description: "Menampilkan Panduan Cara Menambahkan bot", rowId:".pa"},
                {title: 'Panduan Bot', description: "Menampilkan informasi bot itu apa", rowId:".pb"}
               ]}]
    }}), { userJid: m.participant || m.key.remoteJid, quoted: m });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
}
handler.tags = ['main']
handler.command = /^(panduan|how)$/i
handler.help = ['panduan']
module.exports = handler

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
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