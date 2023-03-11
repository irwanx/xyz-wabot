import db from '../../lib/database.js'
import func from '../../lib/function.js'

let handler = m => m

handler.all = async function (m) {
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]
    var user = db.data.users[m.sender]
    var settings = db.data.settings[this.user.jid]
    var chat = db.data.chats[m.chat]
    if (/^(bot)$/i.exec(m.text) && !m.fromMe) {
      if (!banned) return this.sendButton(m.chat, isBanned ? 'Bot Tidak Aktif Di Chat Ini': 'Bot Aktif di chat ini', wm, null, [[isBanned ? 'Unban': 'Menu', isBanned ? '#unban' : '#?']], m)
      if (banned) return this.sendRHydrated(m.chat, 'Kamu dibanned\nSilahkan Join Group dan tag admin untuk membuka banned kamu', wm, 'https://chat.whatsapp.com/L508viIjjPwHpYEqgTxqj6', 'Join Group Bot', null, null, [['Pemilik Bot', '.owner'], ['Donasi', '.donasi']], m)
    }
    /*if (m.key.fromMe) return
    if (m.isBaileys) return
    if (m.mentionedJid.includes(this.user.jid)) {
        await this.sendMessage(m.chat, { audio: { url: "./src/audio/apasihm.mp3" }, mimetype: 'audio/mpeg', ptt: true, seconds: numb }, { quoted: m })
    }*/
    /*
    * BATAS AUTO RESPON
    * OKE BOSKU
    */
    if (settings.statusUpdate) {
        if (new Date() * 1 - settings.status > 1000) {
            await this.setStatus(`${func.clockString(process.uptime() * 1000)} | ${Object.keys(db.data.users).length} User | ${name} by ${set.owner[0][1]}`).catch(_ => _)
            settings.status = new Date() * 1
        }
    }
    /*
    * ANTI SPAM ON THIS
    */
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.isGroup) {
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 5) {
            if (this.spam[m.sender].count > 5) {
                db.data.users[m.sender].banned = true
                m.reply('*Jangan Spam!!*\nKamu Sudah Di Banned, silahkan chat owner untuk membuka banned, kamu akan di blokir oleh bot dan di keluarkan dari group jika spam 1x lagi')
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
            /*if(this.spam[m.sender].count = 2 ){
            await this.updateBlockStatus(m.sender, "block")
            await this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
            }*/
        }
        } else if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 5) {
            if (this.spam[m.sender].count > 5) {
                db.data.users[m.sender].banned = true
                m.reply('*Jangan Spam!!*\nKamu Sudah Di Banned, silahkan chat owner untuk membuka banned, kamu akan di blokir oleh bot jika spam 1x lagi')
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
            /*if(this.spam[m.sender].count = 2 ){
            await this.updateBlockStatus(m.sender, "block") 
            }*/
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
    /*
    * ANTI ERROR IN HERE
    */
    if ((user.exp * 1) > 99999998) {
        user.exp = 99999999
    } else if ((user.exp * 1) < 0) {
        user.exp = 0
    }
    if ((user.limit * 1) > 49) {
        user.limit = 50
    } else if ((user.limit * 1) < 0) {
        user.limit = 0
    }
    if ((user.level * 1) > 499) {
        user.level = 500
    } else if ((user.level * 1) < 0) {
        user.level = 0
    }
    /*
    * EXPIRED IN HERE
    */
    if (m.isGroup && db.data.chats[m.chat].expired != 0) {
        if (new Date() * 1 >= db.data.chats[m.chat].expired) {
            this.reply(m.chat, `Waktunya *${this.user.name}* untuk meninggalkan grup
Chat Owner bot ini jika ada keperluan, silahkan sewa ke owner untuk selamanya di group ini`, null).then(() => {
                    this.groupLeave(m.chat).then(() => {
                        db.data.chats[m.chat].expired = 0
                })
            })
        }
    }
    /*
    * GET STORY NOT READ STORY, READ IN UNDER THIS
    */
    if (m.chat.endsWith('broadcast')) {
        if (db.data.settings[this.user.jid].getsw) {
            let to = set.owner[0][0] + `@s.whatsapp.net`
            if (to == '') return console.log('[NOTIF STORY] To not found')
            this.fakeReply(to, `[NOTIF STORY]
From: 
@${m.sender.split`@`[0]}`, m.chat, '[NOTIF STORY]', set.stts, { mentions: [m.sender] })

            this.copyNForward(to, m).catch(e => console.log(e, m))
        }
    }
    if (m.sender.startsWith('62')) {
        db.data.users[m.sender].language = 'id'
    } else if (m.sender.startsWith('60')) {
        db.data.users[m.sender].language = 'id'
    } else if (!m.sender.startsWith('62')) {
        db.data.users[m.sender].language = 'en'
    } else if (!m.sender.startsWith('60')) {
        db.data.users[m.sender].language = 'en'
    }
}
export default handler