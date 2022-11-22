import JavaScriptObfuscator from 'javascript-obfuscator'
import jsb from 'js-beautify'
let handler = async (m, { conn, text }) => {
    var txt = m.quoted ? m.quoted.text : text
    if(!txt) throw "Apa yang mau di ubah?"
    var obfuscationResult = JavaScriptObfuscator.obfuscate(`${txt}`)
    var result = obfuscationResult.getObfuscatedCode()
    if(!result) throw "hanya support bahasa javascript"
    await m.reply(jsb.js(result))
}
handler.help = ['obfuscate', 'obfuscator'].map(v => v + ' code')
handler.tags = ['premium']
handler.command = /^(obf|obfuscator|obfuscate)$/i

handler.premium = true

export default handler