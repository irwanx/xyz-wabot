let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (isBlocked || m.fromMe || m.chat.endsWith('broadcast')) return
    let set = db.data.settings[this.user.jid]
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]
    let name = conn.user.name

    // ketika ditag
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.send2Button(m.chat,
                isBanned ? `${name} lagi tidur` : banned ? 'kamu dibanned' : `${name} disini`,
                wm,
                isBanned ? 'Unban' : banned ? 'Pemilik Bot' : 'Menu',
                isBanned ? '.unban' : banned ? '.owner' : '.?',
                m.isGroup ? 'Ban' : isBanned ? 'Unban' : 'Donasi',
                m.isGroup ? '.ban' : isBanned ? '.unban' : '.donasi', m)
        }
    } catch (e) {
        return
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.send2Button(m.chat, `╭━━•✵ ⃟  ⃟  ⃟✵•━━━━━━━━━━━━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰──Sewa Bot!*──➤ ↶↷*
┃
┃ *⸙ Gratis 12 jam percobaan untuk grup! Agar bot tetap berada di grup anda dengan waktu lebih lama silahkan sewa bot dengan harga dibawah ini
┃ *⸙ ુོ➪ Info untuk Gabung premium :
┃ *〲 Rp. 5k = 1 minggu Premium
┃ *〲 Rp. 7k = 2 minggu Premium
┃ *〲 Rp. 10k = 1 bulan Premium
┃ *〲 Rp. 20k = 2 bulan Premium
┃ *〲 Rp. 30k = 3 bulan Premium
┃ *〲 Rp. 40k = 4 bulan Premium
┃ *〲 Rp. 50k = VIP PERMANEN
┃
╰•°°°🕊°°°°°🕊°°°°°°🕊°°°°°°°°
`.trim(), wm, 'Pemilik Bot', ',owner', 'Cara memasukkan bot', '.panduanadd', m)
    }
    
    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`)
    }
    let reg1 = /^(p)$/i
    let isPe = reg1.exec(m.text)
    if (isPe && !m.fromMe) {
        m.reply(`Ya?`)
    }
    let reg2 = /(irwan|irwann|irwannnn|irwannn)/i
    let isIrwan = reg2.exec(m.text)
    if (isIrwan && !m.fromMe) {
        m.reply(`Bebeb Gua Mana Yak??`)
    }

    // backup db
    if (set.backup) {
        if (new Date() * 1 - set.backupTime > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            set.backupTime = new Date() * 1
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database, Premium, Event: ${date}`, null)
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./src/premium.json'), 'premium.json', '', 0, 0, { mimetype: 'application/json' })
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./src/event.json'), 'event.json', '', 0, 0, { mimetype: 'application/json' })
        }
    }

    // update status
    if (set.autoupdatestatus) {
        if (new Date() * 1 - set.status > 1000) {
            let _uptime = process.uptime() * 1000
            let uptime = clockString(_uptime)
            await this.setStatus(`Aktif selama ${uptime} | Mode: ${set.self ? 'Private' : set.group ? 'Hanya Grup' : 'Publik'} | XyZ666x Bot By Irwan X Yans`).catch(_ => _)
            set.status = new Date() * 1
        }
    }
}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}