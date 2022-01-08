let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    let reg1 = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg1.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam Warohmatullahi Wabarokatuh_`)
    }
    let reg2 = /(irwan|irwann|irwannnn|irwannn)/i
    let isIrwan = reg2.exec(m.text)
    if (isIrwan && !m.fromMe) {
        sock.reply(m.chat, `Pacarku Mungkin Lagi Sibuk Kak, Tunggu Aja😉`, m)
    }
}
 module.exports = handler
 