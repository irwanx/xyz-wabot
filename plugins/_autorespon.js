let handler = m => m

handler.all = async function (m, { isBlocked }) {
    let reg1 = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg1.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam Warohmatullahi Wabarokatuh_`)
    }
}
 module.exports = handler
 