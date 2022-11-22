import uploadFile from '../../lib/uploadFile.js'
import uploadImage from '../../lib/uploadImage.js'
let handler = async (m, { conn }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada media yang ditemukan'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`${conn.user.name}\n\n${link}
${media.length} Byte(s)
${isTele ? '(Tidak Ada Tanggal Kedaluwarsa)' : '(Tidak diketahui)'}`)
}
handler.help = ['tourl <reply image>']
handler.tags = ['tools']
handler.command = /^(upload|tourl)$/i
handler.register = false

export default handler