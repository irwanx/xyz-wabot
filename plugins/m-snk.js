const { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let teks = `
Kebijakan Privasi, Syarat Ketentuan dan Peraturan Bot

Kebijakan Privasi
1. BOT tidak akan merekam data riwayat chat user.
2. BOT tidak akan menyebarkan nomor users.
3. BOT tidak akan menyimpan media yang dikirimkan oleh users.
4. BOT tidak akan menyalah gunakan data data users.
5. Owner BOT berhak melihat data riwayat chat users.
6. Owner BOT berhak melihat status users.
7. Owner BOT dapat melihat riwayat chat, dan media yang dikirimkan users.

Peraturan Bot
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.
6. Users dilarang memasukkan bot di dalam grup yang penting(ada guru, dsb).
Syarat Ketentuan Bot
1. Bot akan keluar dari group apabila sudah waktunya keluar.
2. BOT dapan mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. BOT *tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.*
4. BOT akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. BOT bertanggung jawab atas kesalahan fatal dalam programing maupun owner.

-Irwan

Peraturan: 4 November 2021
`
    conn.sendMessage(m.chat, teks, MessageType.text, ci1fdocs)
}
handler.help = ['peraturan']
handler.command = /^(snk|syarat|peraturan|rules)$/i
handler.tags = ['main']
module.exports = handler