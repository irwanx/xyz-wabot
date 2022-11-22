import jsb from 'js-beautify'
let handler = async (m, { conn, text }) => {
    var txt = m.quoted ? m.quoted.text : text
    if(!txt) throw "Apa yang mau di ubah?"
    await m.reply(jsb.js(txt))
}
handler.help = ['beatify', 'jsb'].map(v => v + ' code')
handler.tags = ['premium']
handler.command = /^(beautify|jsb|jsbeaty|jsbeautify)$/i

handler.premium = true

export default handler