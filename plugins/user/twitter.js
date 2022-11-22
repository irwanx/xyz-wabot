import * as bo from '@bochilteam/scraper'
let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    if (!args[0]) throw `Halo ${m.name} 👋
Selamat Datang di Bot Twitter Downloader.
Saya adalah bot untuk mengunduh video Twitter di dalam WhatsApp.

Saya dapat mengunduh video Twitter dengan praktis. *Cukup kirimkan saya url Twitter.*
Anda juga bisa menggunakan perintah 
*${usedPrefix+command} <link>*


Contoh:
${usedPrefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`
    if (!args[0].match(/(https:\/\/.*twitter.com)/gi)) throw `*Link salah! Perintah ini untuk mengunduh media twitter dengan link*\n\ncontoh:\n${usedPrefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`
    m.reply(wait)
    var res = await bo.twitterdlv2(args[0])
    if (!res) throw eror
    let igs = JSON.stringify(res)
    let json = JSON.parse(igs)
    for (let { type, url } of json) conn.sendFile(m.chat, url, 'twitter' + (type == 'mp4' ? '.mp4' : '.jpg'), wm, m)
}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(twt|twit|twitter)$/i

export default handler