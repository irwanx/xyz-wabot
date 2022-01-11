let handler  = async (m, { conn, usedPrefix, command }) => {
  conn.reply(m.chat, `${pickRandom(global.ilham)}`, m)
}
handler.help = ['kata'].map(v => v + 'ilham')
handler.tags = ['quotes']
handler.command = /^(katailham)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}

global.ilham = [
"Nggak ada yang peduli denganmu di sosmed kecuali kamu cakep” - Kata ilham.",
"Sesimpel ini deh, sibuk itu palsu, semua tergantung prioritas” – kata ilham.",
"Dia hanya menghargaimu, bukan mencintaimu” – kata ilham.",
"Keadilan sosial hanya berlaku bagi warna negara yang good looking.",
"Jangan jadi pelangi untuk orang yang buta warna.",
"Dia yang tertidur nyenyak setelah mematahkan hatimu tidak pantas untuk kamu ingat.",
"Dia cuman bercanda, harusnya kamu ketawa, bukan malah jatuh cinta.",
"Mencintaimu adalah seni menyakiti diri ‘ – kata ilham.",
"Jika tidak bisa mewarnai hidup seseorang, maka jangan pudarkan warna aslinya.",
"Cukup tahu namaku, jangan rupaku” – kata ilham.",
"Sesuatu akan terasa berharga jika sudah kehilangan.",
"Jangan pernah mengeluh ketika kopimu dingin, ia pernah hangat, namun kau diamkan."
]