import { youtubeSearch } from '@bochilteam/scraper'
import Func from '../../lib/function.js'
let handler = async (m, {
    conn,
    command,
    text,
    usedPrefix
}) => {
    if (!text) throw `Halo ${m.name} 👋
Selamat Datang di Bot YouTube Downloader.
Saya adalah bot untuk mengunduh Video dan Audio YouTube di dalam WhatsApp.

Saya dapat mengunduh Video dan Audio dengan beberapa detik saja.
Caranya Cukup Mudah, Anda cukup kirimkan link YouTube di chat ini dan bisa juga menggunakan perintah
*${usedPrefix+command} [judul]*

Contoh:
${usedPrefix + command} widodari denny caknan`
    let vid = (await youtubeSearch(text)).video[0]
    if (!vid) throw 'Video/Audio Tidak ditemukan'
    var {
        title,
        description,
        thumbnail,
        videoId,
        durationH,
        viewH,
        publishedTime
    } = vid
    var url = 'https://www.youtube.com/watch?v=' + videoId
    await conn.sendButton(m.chat, `
📌 *Title:* ${title}
🔗 *Url:* ${url}
🖹 *Description:* ${description}
⏲️ *Published:* ${publishedTime}
⌚ *Duration:* ${durationH}
👁️ *Views:* ${viewH}
  `.trim(), wm, await Func.sharp(thumbnail, 400), [
        ['Audio', `${usedPrefix}yta ${url} yes`],
        ['Video', `${usedPrefix}ytv ${url} yes`],
        [`Search ${text}`, `${usedPrefix}yts ${text}`]
    ], m, { asLocation: true })
}
handler.help = ['play', 'play2', 'p'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(p|play2|play)$/i

export default handler