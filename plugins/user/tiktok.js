import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Halo ${m.name} 👋
Selamat Datang di Bot Tiktok Downloader.
Saya adalah bot untuk mengunduh video Tiktok di dalam WhatsApp.

Saya dapat mengunduh video tanpa tanda air. *Cukup kirimkan saya url tiktok.*
Anda juga bisa menggunakan perintah 
*${usedPrefix+command} <link>*

Contoh:
${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    let resi = (await fetch(API('males', '/tiktok', { url: args[0] } )));
    let res = await resi.json()
    if (res.status != 200) throw res.message;
    if (!res) throw res.message;
    m.reply(wait)
    await conn.sendMedia(m.chat, res.video, m, { caption: `*Judul:* ${res.title}\n${res.author ? `*Pembuat Video:* ${res.author}` : '\n' } \n\nCara simpan digalery:\n1. Download dulu videonya\n2. Buka terus klik titik 3 pojok kanan atas\n3. lalu klik simpan!` })
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(dl)?)$/i
handler.register = false

export default  handler