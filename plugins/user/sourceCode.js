/**
* Guasah Dui Ganti Yaaakk
* ini cuma buat ninggalin credit gw doang sebagai creator
**/

let handler = async (m) => {
let esce = `
This bot Uses Script From

https://github.com/irwanx/xyz-wabot
(Private)`
     await m.reply(esce)
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i
handler.register = false

export default handler
