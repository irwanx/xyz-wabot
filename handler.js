let util = require('util')
let simple = require('./lib/simple')
const uploadImage = require('./lib/uploadImage')
let { MessageType, Presence } = require('@adiwajshing/baileys')
const knights = require('knights-canvas')
let fs = require('fs')
let fetch = require('node-fetch')
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))
module.exports = {
  async handler(chatUpdate) {
    if (global.db.data == null) await global.loadDatabase()
    // console.log(chatUpdate)
    if (!chatUpdate.hasNewMessage) return
    if (!chatUpdate.messages && !chatUpdate.count) return
    let m = chatUpdate.messages.all()[0]
    global.thumb = pickRandom(global.cecanku)
global.image = await (await fetch('https://telegra.ph/file/cff570a685d0aa4c17d14.jpg')).buffer()
    global.thumbfoto = await (await fetch('https://telegra.ph/file/cff570a685d0aa4c17d14.jpg')).buffer()
 
    global.fdocs = {
  key : {
           participant : wan
                        },
       message: {
                    documentMessage: {
                    title: namabot, 
                    jpegThumbnail: image
                          }
                        }
                      }
      global.ci1 = { contextInfo: { externalAdReply :{
      mediaUrl: '',
      mediaType: 2,
      description: deskripsiurl,
      title: namabot,
      previewType: 0,
      thumbnail: image,
      sourceUrl: _gc2
    }}}
    global.ci1fdocs = {quoted: fdocs, contextInfo: { externalAdReply :{
      mediaUrl: '',
      mediaType: 2,
      description: deskripsiurl,
      title: namabot,
      previewType: 0,
      thumbnail: image,
      sourceUrl: _gc2
    }}}
    global.ci2 = { contextInfo: { externalAdReply :{
      mediaUrl: '',
      mediaType: 2,
      description: deskripsiurl,
      title: '',
      body: gantengku,
      previewType: 0,
      thumbnail: image,
      sourceUrl: ganteng
    }}}
    global.ci2fdocs = {quoted: fdocs, contextInfo: { externalAdReply :{
      mediaUrl: '',
      mediaType: 2,
      description: deskripsiurl,
      title: '',
      body: gantengku,
      previewType: 0,
      thumbnail: image,
      sourceUrl: ganteng
    }}}
    global.ciyt = { contextInfo: { externalAdReply :{
      mediaUrl: sumberurl,
      mediaType: 2,
      description: deskripsiurl,
      title: namabot,
      previewType: 0,
      jpegThumbnail: image,
    }}}
    global.ciytfdocs = { quoted: fdocs, contextInfo: { externalAdReply :{
      mediaUrl: sumberurl,
      mediaType: 2,
      description: deskripsiurl,
      title: namabot,
      previewType: 0,
      jpegThumbnail: image,
    }}}
    global.fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...{from: { remoteJid: '6287887038108-1499223893@g.us' }},
        message: {
          videoMessage: {
            title: namabot,
            h: `Hmmm`,
            gifPlayback: 'true',
            caption: deskripsiurl,
            jpegThumbnail: fs.readFileSync('./src/logo.jpg')
          }
        }
      }
    }
    global.ftextthumb = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`, ...(m.chat ?
          {remoteJid: '6287887038108-1499223893@g.us' } : {})
      },
      message: {
        'extendedTextMessage': {
          'text': deskripsiurl,
          'title': namabot,
          'jpegThumbnail': fs.readFileSync('./src/logo.jpg')
        }
      }
    }
    global.ci1fdocsm = {quoted: m, contextInfo: { externalAdReply :{
      mediaUrl: '',
      mediaType: 2,
      description: deskripsiurl,
      title: namabot,
      previewType: 0,
      thumbnail: image,
      sourceUrl: _gc2
    }}}
    global.floc = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`, ...(m.chat ?
          message: { 'locationMessage': { 'title': 'indonesia', 'h': 'aloo', 'jpegThumbnail': "./src/logo.jpg"}})
      }
    }
    global.fvideo = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...{from: { remoteJid: '6287887038108-1499223893@g.us'}},
      },
      message: {
        videoMessage: {
          title: namabot,
          h: `hmm`,
          seconds: '99999',
          caption: deskripsiurl,
          jpegThumbnail: fs.readFileSync('./src/logo.jpg')
        }
      }
    }
    global.ftoko = { key : { fromMe: false, participant: `0@s.whatsapp.net`}, message: {orderMessage: { message: deskripsiurl, thumbnail: fs.readFileSync('./src/logo.jpg')}}}
    global.freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {
      'productMessage': {
        'product': {
          'productImage': fs.readFileSync('./src/logo.jpg'),
          'productId': '4639411602805436',
          'title': `Rp 50.000,00`,
          'description': namabot,
          'productImageCount': 1
        },
        'bussinessOwnerJid': irwan1
      }
    }}
    try {
      simple.smsg(this, m)
      switch (m.mtype) {
        case MessageType.image:
        case MessageType.video:
        case MessageType.audio:
          if (!m.key.fromMe) await delay(1000)
          if (!m.msg.url) await this.updateMediaMessage(m)
          break
      }
      m.exp = 0
      m.limit = false
      try {
        let user = global.db.data.users[m.sender]
        if (typeof user !== 'object') global.db.data.users[m.sender] = {}
        if (user) {
          if (!isNumber(user.exp)) user.exp = 0
          if (!isNumber(user.limit)) user.limit = 10
          if (isNumber(user.money)) user.money = 1000000
          if (!isNumber(user.lastclaim)) user.lastclaim = 0
          if (!isNumber(user.joincount)) user.joincount = 0
          if (!('registered' in user)) user.registered = false
          if (!user.registered) {
            if (!('name' in user)) user.name = this.getName(m.sender)
            if (!isNumber(user.age)) user.age = -1
            if (!isNumber(user.regTime)) user.regTime = -1
          }
          if (!isNumber(user.afk)) user.afk = -1
          if (!('afkReason' in user)) user.afkReason = ''
          if (!('banned' in user)) user.banned = false
          if (!isNumber(user.level)) user.level = 0
          if (!isNumber(user.call)) user.call = 0
          if (!user.role) user.role = 'Bronze'
          if (!('autolevelup' in user)) user.autolevelup = false
          if (!isNumber(user.pc)) user.pc = 0
          if (!isNumber(user.warning)) user.warning = 0
          if (!isNumber(user.joincount)) user.joincount = 0
          if (!isNumber(user.primogem)) user.primogem = 0
          if (!isNumber(user.mora)) user.mora = 0
          if (!isNumber(user.cxp)) user.cxp = 0
          if (!isNumber(user.axp)) user.axp = 0
          if (!isNumber(user.health)) user.health = 100
          if (!isNumber(user.resin)) user.resin = 160
          if (!('pokemon' in user)) user.pokemon = ''
          if (!isNumber(user.pasangan)) user.pasangan = ''
        } else global.db.data.users[m.sender] = {
          exp: 0,
          limit: 10,
          lastclaim: 0,
          joincount: 0,
          registered: false,
          name: this.getName(m.sender),
          age: -1,
          regTime: -1,
          afk: -1,
          afkReason: '',
          banned: false,
          level: 0,
          call: 0,
          role: 'Bronze',
          autolevelup: false,
          pc: 0,
          warning: 0,
          joincount: 0,
          primogem: 0,
          mora: 0,
          cxp: 0,
          axp: 0,
          health: 100,
          pokemon: '',
          pasangan: '',
          resin: 160,
        }

        let chat = global.db.data.chats[m.chat]
        if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
        if (chat) {
          if (!('isBanned' in chat)) chat.isBanned = false
          if (!('welcome' in chat)) chat.welcome = false
          if (!('detect' in chat)) chat.detect = false
          if (!('sWelcome' in chat)) chat.sWelcome = ''
          if (!('sBye' in chat)) chat.sBye = ''
          if (!('sPromote' in chat)) chat.sPromote = ''
          if (!('sDemote' in chat)) chat.sDemote = ''
          if (!('descUpdate' in chat)) chat.descUpdate = true
          if (!('stiker' in chat)) chat.stiker = false
          if (!('delete' in chat)) chat.delete = true
          if (!('antiLink' in chat)) chat.antiLink = false
          if (!isNumber(chat.expired)) chat.expired = 0
          if (!('antiBadword' in chat)) chat.antiBadword = true
          if (!('viewonce' in chat)) chat.viewonce = true
          if (!('privatelink' in chat)) chat.privatelink = false
          if (!('nsfw' in chat)) chat.nsfw = false
        } else global.db.data.chats[m.chat] = {
          isBanned: false,
          welcome: true,
          detect: true,
          sWelcome: '',
          sBye: '',
          sPromote: '',
          sDemote: '',
          descUpdate: true,
          stiker: false,
          delete: true,
          antiLink: false,
          expired: 0,
          antiBadword: true,
          viewonce: true,
          privatelink: false,
          nsfw: false,
        }

        let settings = global.db.data.settings[this.user.jid]
        if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
        if (settings) {
          if (!'anon' in settings) settings.anon = true
          if (!'anticall' in settings) settings.anticall = true
          if (!'antispam' in settings) settings.antispam = true
          if (!'antitroli' in settings) settings.antitroli = true
          if (!'backup' in settings) settings.backup = false
          if (!isNumber(settings.backupDB)) settings.backupDB = 0
          if (!'groupOnly' in settings) settings.groupOnly = false
          if (!'jadibot' in settings) settings.groupOnly = false
          if (!'nsfw' in settings) settings.nsfw = true
          if (!isNumber(settings.status)) settings.status = 0
          if (!'statusUpdate' in settings) settings.statusUpdate = false
          if (!'antivirus' in settings) settings.antivirus = false
          if (!'publicjoin' in settings) settings.publicjoin = false
          if (!'autogetmsg' in settings) settings.autogetmsg = true
        } else global.db.data.settings[this.user.jid] = {
          anon: true,
          anticall: true,
          antispam: true,
          antitroli: true,
          backup: false,
          backupDB: 0,
          groupOnly: false,
          jadibot: false,
          nsfw: true,
          status: 0,
          statusUpdate: false,
          antivirus: false,
          publicjoin: false,
          autogetmsg: true,
        }
      } catch (e) {
        console.error(e)
      }
      if (opts['nyimak']) return
      if (!m.fromMe && opts['self']) return
      if (typeof m.text !== 'string') m.text = ''
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!plugin.all) continue
        if (typeof plugin.all !== 'function') continue
        try {
          await plugin.all.call(this, m, chatUpdate)
        } catch (e) {
          if (typeof e === 'string') continue
          console.error(e)
        }
      }
      if (m.isBaileys) return
      if (m.chat.endsWith('broadcast')) return // Supaya tidak merespon di status
      let blockList = conn.blocklist.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
      if (blockList.includes(m.sender)) return // Pengguna yang diblokir tidak bisa menggunakan bot
      m.exp += Math.ceil(Math.random() * 10)

      let usedPrefix
      let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

      let isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isOwner = isROwner || m.fromMe
      let isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      //let isBeta = isROwner || global.beta.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      //if (!isPrems && !isBeta && !m.isGroup && global.db.data.settings.groupOnly) return
      if (!isPrems && !m.isGroup && global.db.data.settings.groupOnly) return
      let groupMetadata = m.isGroup ? this.chats.get(m.chat).metadata || await this.groupMetadata(m.chat) : {} || {}
      let participants = m.isGroup ? groupMetadata.participants : [] || []
      let user = m.isGroup ? participants.find(u => u.jid == m.sender) : {} // User Data
      let bot = m.isGroup ? participants.find(u => u.jid == this.user.jid) : {} // Data Kamu (bot)
      let isAdmin = user.isAdmin || user.isSuperAdmin || false // Apakah user admin?
      let isBotAdmin = bot.isAdmin || bot.isSuperAdmin || false // Apakah kamu (bot) admin?
      let isBlocked = this.blocklist.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != this.user.jid).includes(m.sender) // Apakah user diblokir?
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!opts['restrict']) if (plugin.tags && plugin.tags.includes('admin')) continue
        const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
        let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
        let match = (_prefix instanceof RegExp ? // RegExp Mode?
          [[_prefix.exec(m.text), _prefix]] :
          Array.isArray(_prefix) ? // Array?
            _prefix.map(p => {
              let re = p instanceof RegExp ? // RegExp in Array?
                p :
                new RegExp(str2Regex(p))
              return [re.exec(m.text), re]
            }) :
            typeof _prefix === 'string' ? // String?
              [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
              [[[], new RegExp]]
        ).find(p => p[1])
        if (typeof plugin.before === 'function') if (await plugin.before.call(this, m, {
          match,
          conn: this,
          participants,
          groupMetadata,
          user,
          bot,
          isROwner,
          isOwner,
          isAdmin,
          isBotAdmin,
          isPrems,
          //isBeta,
          chatUpdate,
          isBlocked,
        })) continue
        if (typeof plugin !== 'function') continue
        if ((usedPrefix = (match[0] || '')[0])) {
          let noPrefix = m.text.replace(usedPrefix, '')
          let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
          args = args || []
          let _args = noPrefix.trim().split` `.slice(1)
          let text = _args.join` `
          command = (command || '').toLowerCase()
          let fail = plugin.fail || global.dfail // Ketika gagal
          let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
            plugin.command.test(command) :
            Array.isArray(plugin.command) ? // Array?
              plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                cmd.test(command) :
                cmd === command
              ) :
              typeof plugin.command === 'string' ? // String?
                plugin.command === command :
                false

          if (!isAccept) continue
          m.plugin = name
          if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
            let chat = global.db.data.chats[m.chat]
            let user = global.db.data.users[m.sender]
            if (!['unbanchat.js', 'profile.js'].includes(name) && chat && chat.isBanned && !isPrems) return // Kecuali ini, bisa digunakan
            if (!['unbanchat.js', 'profile.js'].includes(name) && user && user.banned) return
          }
          if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Keduanya Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.rowner && !isROwner) { // Owner sebenarnya
            fail('rowner', m, this)
            continue
          }
          if (plugin.owner && !isOwner) { // Owner bot
            fail('owner', m, this)
            continue
          }
          if (plugin.mods && !isMods) { // Moderator
            fail('mods', m, this)
            continue
          }
          if (plugin.premium && !isPrems) { // Premium
            fail('premium', m, this)
            continue
          }
          //if (plugin.beta && !isBeta) { // Beta
            //fail('beta', m, this)
            //continue
          //}
          if (plugin.group && !m.isGroup) { // Hanya grup
            fail('group', m, this)
            continue
          } else if (plugin.botAdmin && !isBotAdmin) { // Kamu Admin
            fail('botAdmin', m, this)
            continue
          } else if (plugin.admin && !isAdmin) { // User Admin
            fail('admin', m, this)
            continue
          }
          if (plugin.private && m.isGroup) { // Hanya Private Chat
            fail('private', m, this)
            continue
          }
          if (plugin.register == true && _user.registered == false) { // Butuh daftar?
            fail('unreg', m, this)
            continue
          }
          if (plugin.nsfw && !global.db.data.settings.nsfw) { // Nsfw
            fail('nsfw', m, this)
            continue
          }

          m.isCommand = true
          let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // Pendapatkan XP per Command
          if (xp > 200) m.reply('Ngecit -_-') // Hehehe
          else m.exp += xp
          if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
            this.reply(m.chat, `Limit kamu habis, silahkan beli melalui *${usedPrefix}buy*\nIngin Tanpa limit? Langsung Beli ke Owner`, m)
            continue // Limit habis
          }
          if (plugin.level > _user.level) {
            this.reply(m.chat, `diperlukan level ${plugin.level} untuk menggunakan perintah ini. Level kamu ${_user.level}`, m)
            continue // Jika levelnya belum tercapai
          }
          let extra = {
            match,
            usedPrefix,
            noPrefix,
            _args,
            args,
            command,
            text,
            conn: this,
            participants,
            groupMetadata,
            user,
            bot,
            isROwner,
            isOwner,
            isAdmin,
            isBotAdmin,
            isPrems,
            //isBeta,
            chatUpdate,
            isBlocked,
          }
          try {
            await plugin.call(this, m, extra)
            if (!isPrems) m.limit = m.limit || plugin.limit || false
          } catch (e) {
            // Terjadi kesalahan
            m.error = e
            console.error(e)
            if (e) {
              let text = util.format(e.message ? e.message : e)
              for (let key of Object.values(global.APIKeys))
                text = text.replace(new RegExp(key, 'g'), 'apikey')
              m.reply(text)
            }
          } finally {
            // m.reply(util.format(_user))
            if (typeof plugin.after === 'function') {
              try {
                await plugin.after.call(this, m, extra)
              } catch (e) {
                console.error(e)
              }
            }
            // if (m.limit) m.reply(+ m.limit + ' Limit terpakai') // Jadikan sebagai komentar jika kamu risih dengan pesan ini
          }
          break
        }
      }
    } finally {
      await this.updatePresence(m.chat, Presence.recording) //hapus aja kalo risih
      //console.log(global.db.data.users[m.sender])
      let user, stats = global.db.data.stats
      if (m) {
        if (m.sender && (user = global.db.data.users[m.sender])) {
          user.exp += m.exp
          user.limit -= m.limit * 1
        }

        let stat
        if (m.plugin) {
          let now = + new Date
          if (m.plugin in stats) {
            stat = stats[m.plugin]
            if (!isNumber(stat.total)) stat.total = 1
            if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1
            if (!isNumber(stat.last)) stat.last = now
            if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : now
          } else stat = stats[m.plugin] = {
            total: 1,
            success: m.error != null ? 0 : 1,
            last: now,
            lastSuccess: m.error != null ? 0 : now
          }
          stat.total += 1
          stat.last = now
          if (m.error == null) {
            stat.success += 1
            stat.lastSuccess = now
          }
        }
      }

      try {
        require('./lib/print')(m, this)
      } catch (e) {
        console.log(m, m.quoted, e)
      }
      if (opts['autoread']) await this.chatRead(m.chat).catch(() => { })
    }
  },
  async participantsUpdate({ jid, participants, action }) {
    let chat = global.db.data.chats[jid] || {}
    let text = ''
    switch (action) {
      case 'add':
      case 'remove':
        if (chat.welcome) {
          let groupMetadata = await this.groupMetadata(jid)
          for (let user of participants) {
            if (user.includes(this.user.jid)) return // biar ngga nyambut diri sendiri, kalo simulasi harus tag yang lain
            let pp = './src/avatar_contact.png'
            try {
              pp = await this.getProfilePicture(user)
            } catch (e) {
            } finally {
              text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', this.getName(jid)).replace('@desc', groupMetadata.desc ? String.fromCharCode(8206).repeat(4001) + groupMetadata.desc : '').replace('@mem', groupMetadata.participants.length) :
                (chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace(/@user/g, '@' + user.split('@')[0])
              this.sendButtonImg(jid, pp, text, wm, action === 'add' ? 'Welcome' : 'Goodbye', 'p', {
                key: {
                  fromMe: false,
                  participant: '0@s.whatsapp.net',
                  remoteJid: 'status@broadcast'
                },
                message: {
                  contactMessage: {
                    displayName: this.getName(user),
                    vcard: `BEGIN: VCARD\nVERSION:3.0\nN:;WA;;;\nFN: WA\nTEL ; type=VOICE;waid=${user.split('@')[0]}:${user.split('@')[0]}\nEND:VCARD`
                  }
                }
              }, null, false, {
                contextInfo: {
                  mentionedJid: [user]
                }
              })
            }
          }
        }
        break
      case 'promote':
        text = (chat.sPromote || this.spromote || conn.spromote || '@user sekarang Admin')
      case 'demote':
        if (!text) text = (chat.sDemote || this.sdemote || conn.sdemote || '@user sekarang bukan Admin')
        text = text.replace('@user', '@' + participants[0].split`@`[0])
        if (chat.detect) this.sendMessage(jid, text, MessageType.extendedText, {
          contextInfo: {
            mentionedJid: this.parseMention(text)
          }
        })
        break
    }
  },
  async delete(m) {
    let chat = global.db.data.chats[m.key.remoteJid]
    if (chat.delete) return
    await this.sendButton(m.key.remoteJid, `
Terdeteksi @${m.participant.split`@`[0]} telah menghapus pesan
ketik *.on delete* untuk mematikan pesan ini
`.trim(), wm, 'Matikan Antidelete', ',on delete', m.message, {
      contextInfo: {
        mentionedJid: [m.participant]
      }
    })
    this.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m))
  },
  async onCall(json) {
    let { from } = json[2][0][1]
    let users = global.db.data.users
    let user = users[from] || {}
    if (user.whitelist) return
    if (!db.data.settings.anticall) return
    switch (this.callWhitelistMode) {
      case 'mycontact':
        if (from in this.contacts && 'short' in this.contacts[from])
          return
        break
    }
    user.call += 1
    await this.reply(from, `Jika kamu menelepon lebih dari 2, kamu akan diblokir.\n\n${user.call} / 2`, null)
    if (user.call == 2) {
      await this.blockUser(from, 'add')
      user.call = 0
    }
  },
  async GroupUpdate({ jid, desc, descId, descTime, descOwner, announce }) {
    if (!db.data.chats[jid].descUpdate) return
    if (!desc) return
    let caption = `
    @${descOwner.split`@`[0]} telah mengubah deskripsi grup.
    ${desc}
    ketik *.off desc* untuk mematikan pesan ini
        `.trim()
    this.sendButton(jid, caption, wm, 'Matikan Deskripsi', ',off desc', { contextInfo: { mentionedJid: this.parseMention(caption) } })

  }
}

global.dfail = (type, m, conn) => {
  let msg = {
    rowner: 'This command only can used by _*Owner!*_\nPerintah ini hanya dapat digunakan oleh _*Owner!_*.',
    owner: 'This command only can used by _*Owner!*_\nPerintah ini hanya dapat digunakan oleh _*Owner!_*.',
    mods: 'This command only can used by _*Moderator!*_\nPerintah ini hanya dapat digunakan oleh _*Moderator!*_',
    premium: 'This command only can used by _*Premium Users.*_\nPerintah ini hanya dapat digunakan oleh _*User Premium.*_',
    //beta: 'This command only can used by _*Beta Tester Users.*_\nPerintah ini hanya dapat digunakan oleh *_Beta Tester User/.*_',
    group: 'This command only can used in Group.\nPerintah ini hanya dapat digunakan di Group.',
    private: 'This command only can used in Private Chat.\nPerintah ini hanya dapat digunakan di Chat Pribadi.',
    admin: 'This command only can used by *Group Admin.*\nPerintah ini hanya dapat digunakan oleh *Admin Group.*',
    botAdmin: 'Make the bot number as a group admin to use this command.\nJadikan bot sebagai admin untuk menggunakan perintah ini.',
    unreg: 'Silahkan daftar untuk menggunakan fitur ini dengan cara mengetik:\n\n*#daftar*\n\nContoh: *#daftar*',
    nsfw: 'NSFW doesnt active.\nNSFW tidak aktif.'
  }[type]
  if (msg) return conn.sendMessage(m.chat, msg, MessageType.text, ci1fdocsm)
}
//global.dfail = (type, m, conn) => {
  //let msg = {
    //unreg: '\nIr`0@s.whatsapp.net` Gans'
  //}
  //conn.sendButton(m.chat,`UPS SEPERTINYA KAMU BELUM TERDAFTAR DI DATABASE

  //SILAHKAN DAFTAR TERLEBIH DAHULU UNTUK MENGGUNAKAN FITUR INI
  //`.trim(), '','Daftar', '#daftar', fdocs)
//}
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'handler.js'"))
  delete require.cache[file]
  if (global.reloadHandler) console.log(global.reloadHandler())
})


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.cecanku = [
  'https://telegra.ph/file/46593efc4a003f5c63203.jpg',
  'https://telegra.ph/file/2319c5657c77964cddf98.jpg'
]
