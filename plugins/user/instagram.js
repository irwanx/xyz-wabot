import fetch from 'node-fetch'
let handler = async (m, {
  conn, args, usedPrefix, command
}) => {
  if (!args[0]) throw `Halo ${m.name} 👋
Selamat Datang di Bot Instagram Downloader.
Saya adalah bot untuk mengunduh video Instagram di dalam WhatsApp.

Saya dapat mengunduh video Instagram dengan praktis. *Cukup kirimkan saya url Instagram.*
Anda juga bisa menggunakan perintah 
*${usedPrefix+command} <link>*

Contoh:
${usedPrefix}${command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`
  let anu = await fetch("http://Api.stazyu.my.id/api/downloader?url=" + args[0])
  var {
    result
  } = await anu.json()
  for (const {
    url
  } of result) await conn.sendMedia(m.chat, url, m, {
    caption: set.done
  })
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ig(dl)?)$/i
handler.register = false

export default handler