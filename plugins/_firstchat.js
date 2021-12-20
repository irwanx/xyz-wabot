const { MessageType } = require('@adiwajshing/baileys')
let moment = require('moment-timezone')
let fetch = require ('node-fetch')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (m.chat.endsWith('broadcast') || m.fromMe || isBlocked || m.isGroup || db.data.settings[this.user.jid].group) return
    let user = global.db.data.users[m.sender]
    let name = conn.user.name
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await conn.sendMessage(m.chat, `
Hai, ${ucapan()}

Saya adalah ${name}, salah satu Bot Whatsapp. harap tidak spam/telpon/minta save ke nomor ini. Ada yang bisa saya bantu?
Silahkan ketik #menu
Untuk Panduan, Silahkan Ketik #panduan
Untuk melihat Syarat Dan Ketentuan Bisa dengan mengetik #snk

_terimakasih_
bot ini menggunakan script dari https://github.com/irwanx/xyz-wabot
`, MessageType.text, ci1fdocs)
user.pc = new Date * 1
}

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