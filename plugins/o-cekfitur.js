let handler = async (m, { args, usedPrefix, command }) => {
    if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} muhammad`
    let { total, success, last, lastSuccess } = global.db.data.stats[text + '.js']
    m.reply(`
*Plugin ${args[0]}*
*Total :* ${total}
*Berhasil :* ${success}
*Terakhir Kali Digunakan :* ${new Date(last)}
*Terakhir Kali Berhasil :* ${new Date(lastSuccess)}
`.trim())
}

handler.help = ['plugins'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^plugins$/i
module.exports = handler