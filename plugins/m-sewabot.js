let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `╭━━•✵ ⃟  ⃟  ⃟✵•
┃
┃ *SEWA BOT : ↷↷*
┃ 
┃ *⸙ ુོ➪ Apa saja keuntungan premium?
┃ *〲 ✅Dapatkan fitur khusus premium.
┃ *〲 ✅Masukkan bot ke group anda.
┃ *〲 ✅Limit UNLIMITED (Tidak Terbatas)
┃ 
┃ Ayo gabung bersama mereka yang sudah Premium dan mendapatkan banyak keuntungan dengan akses semua fitur bot.
┃  © XsvsH
┃ *─★‧ﾟ
╰━━━━━━━━⸙
Pembayaran:
Saweria: https://saweria.co/irwanxyans (+5.000)
Dana: 08882611841
OVO: 08882611841
    
「Syarat dan Ketentuan」
1. Bot akan keluar jika sudah waktu nya keluar
2. Jangan di kick
3. Mematuhi syarat dan ketentuan bot pada #rules
4. Di larang mengirimkan sesuatu yang mengganggu, contoh: virtex, berbagai macam bug.
5. Di larang spam dalam penggunaan
    `.trim()
    const button = {
        buttonText: 'List Harga',
        description: kontol,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: 'Premium', description: "Rp50.000\nDapatkan fitur Premium Permanent.", rowId:".konfir Saya ingin mendaftarkan premium"},
        {title: '4 Bulan', description: "Rp40.000\nSewa bot selama 4 bulan.", rowId:".konfir Saya ingin mendaftarkan 4 bulan"},
        {title: '3 Bulan', description: "Rp30.000\nSewa bot selama 3 bulan.", rowId:".konfir Saya ingin mendaftarkan 3 bulan"},
        {title: '2 Bulan', description: "Rp20.000\nSewa bot selama 2 bulan.", rowId:".konfir Saya ingin mendaftarkan 2 bulan"},
        {title: '1 Bulan', description: "Rp10.000\nSewa bot selama 1 bulan.", rowId:".konfir Saya ingin mendaftarkan 1 bulan"},
        {title: '2 Minggu', description: "Rp7.000\nSewa bot selama 2 minggu.", rowId:".konfir Saya ingin mendaftarkan 2 minggu"},
        {title: '1 Minggu', description: "Rp5.000\nSewa bot selama 1 minggu.", rowId:".konfir Saya ignin mendaftarkan 1 minggu"},
        {title: '12 Jam', description: "Rp.0\nMemasukkan bot selama 12 Jam(-10 limit)", rowId:".joinf"},
        {title: 'Owner? ', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".rules"},
        {title: 'Join?', description: "Cara Memasukkan Bot Ke Grup.", rowId:".panduanadd"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main', 'update']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler