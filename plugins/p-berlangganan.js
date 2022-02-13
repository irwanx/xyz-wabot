let handler = async (m, { conn }) => await conn.sendMessage(m.chat, {text:`
*"Berlangganan"*

Layanan berlangganan Bot ini adalah dengan menyewa bot dalam jumlah waktu ke dalam group. Untuk list harga/layanan silahkan baca pada *.sewa*
`}, { quoted: m})
handler.command = /^(pl)$/i

module.exports = handler