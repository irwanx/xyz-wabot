let fetch = require('node-fetch')
let moment = require('moment-timezone')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
   let name = conn.getName(m.sender)
    let pndu = `
Halo ${name}, ${ucapan()}

Selamat datang di Menu panduan Bot.
Di menu ini kamu bisa mendapatkan panduan soal bot whatsapp.

Silahkan pilih di bawah ini
    `.trim()
    const button = {
        buttonText: 'Menu Panduan',
        description: pndu,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: 'Panduan Owner', description: "Menampilkan Panduan Owner", rowId:".panduanowner"},
        {title: 'Panduan How', description: "Menampilkan Panduan How", rowId:".panduanhow"},
        {title: 'Panduan Berlangganan', description: "Menampilkan Panduan Berlangganan", rowId:".panduanberlangganan"},
        {title: 'Panduan Add', description: "Menampilkan Panduan Cara Menambahkan bot", rowId:".panduanadd"},
        {title: 'Panduan Bot', description: "Menampilkan informasi bot itu apa", rowId:".panduanbot"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main', 'update']
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