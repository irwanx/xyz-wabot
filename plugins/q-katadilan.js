let handler = async (m, { conn, usedPrefix, command }) => {
    await conn.sendButton(m.chat, `“${pickRandom(global.kontolo)}”`, wm, 'Kata Dilan', `${usedPrefix + command}`, m)
}
handler.help = ['katadilan']
handler.tags = ['quotes', 'update']
handler.command = /^(katadilan)$/i
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

global.kontolo= [
  "Aku tidak ingin mengekangmu. Terserah! Bebas ke mana engkau pergi. Asal aku ikut.",
  "Kalau kamu ninggalin aku, itu hak kamu, asal jangan aku yang ninggalin kamu. Aku takut kamu kecewa.",
  "Bagiku, Kamu adalah bagian terbesar dari hidupku. Aku bisa saja membiarkanmu melakukan apa yang kamu inginkan, tetapi tidak untuk hal yang akan berakibat buruk bagimu.",
  "Terima kasih, kau pernah mau kepadaku. Dan kini, biarkan aku, kalau selalu ingin tahu kabarmu.",
  "Jangan rindu, ini berat. Kau tak akan kuat. Biar aku saja.",
  "Kamu lahir itu sengaja buat bikin aku senang ada di Bumi.",
  "Malam ini, kalau tidur jangan ingat aku, ya! Tapi kalau mau, silakan.",
  "Cinta itu indah. Jika menurutmu tidak indah, pastinya kamu salah memilih pasangan.",
  "Aku gak pandai cemburu. Malahan, kalau kamu ninggalin aku, aku gak bisa apa-apa. Bisaku cuma mencintaimu.",
  "Sekarang aku mungkin bukan aku yang dulu, waktu membawa aku pergi, tetapi perasaan tetap sama, bersifat menjalar, hingga ke depan.",
  "Kukira itu normal. Itu adalah bagian dari suatu proses berduka. Tetapi cepat atau lambat, aku harus bisa menerima sepenuhnya, meskipun sebagian dari diriku masih berharap akan bisa kembali bersama-sama.",
  "Jangan salah paham. Semua sikapku kepadamu, bahkan termasuk ketika aku marah, ketika aku kesal, ketika aku jengkel, kamu harus tahu bahwa semua bersumber dari aku yang sangat mencintaimu",
  "Kalau mencintaimu adalah kesalahan, yasudah. Biar. Aku salah terus saja.",
  "PR-ku adalah merindukanmu. Lebih kuat dari Matematika. Lebih luas dari Fisika. Lebih kerasa dari Biologi.",
  "Dik jangan pergi jauh-jauh kan ada darahku di tubuhmu.",
  "Kalau aku jadi presiden yang harus mencintai seluruh rakyatnya, aduh, maaf, aku pasti tidak bisa karena aku cuma suka Kamu."
]