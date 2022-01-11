let handler = async (m) => {
m.reply(`
Bot ini Menggunakan Script Dari

https://github.com/irwanx/xyz-wabot`)
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler


