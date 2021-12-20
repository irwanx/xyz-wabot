let fs = require('fs')
let handler = m => m

handler.before = async function (m) {

    if (m.isGroup && db.data.chats[m.chat].expired != 0) {
        if (new Date() * 1 >= db.data.chats[m.chat].expired) {
            this.reply(m.chat, `waktunya *${this.user.name}* untuk meninggalkan grup\nKlo mau biar bot ini tetep stay di sini, sewa dulu kak\nSewa Ke Nomor Ini Kak`, null).then(() => {
                this.sendContact(m.chat, mods[0], this.getName(mods[0] + '@s.whatsapp.net')).then(() => {
                    this.groupLeave(m.chat).then(() => {
                        db.data.chats[m.chat].expired = 0
                    })
                })
            })
        }
    }
}


module.exports = handler
