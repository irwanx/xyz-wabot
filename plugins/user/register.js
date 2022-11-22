import { createHash } from 'crypto'
import db from '../../lib/database.js'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
  let user = db.data.users[m.sender]
  if (user.registered === true) throw `Kamu sudah terdaftar\nMau daftar ulang? #unreg <SERIAL NUMBER>`
  if (!Reg.test(text)) throw `contoh:\n#register nama.umur`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 40) throw 'Umur terlalu tua'
  if (age < 5) throw 'Bayi bisa ngetik sesuai format -_-'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`Daftar berhasil!

┌─〔 Info 〕
├ Nama: ${name}
├ Umur: ${age} tahun
├ SN: ${sn}
└────`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|reg(ister)?)$/i

export default handler

