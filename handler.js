const simple = require('./lib/simple')
const util = require('util')

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))

module.exports = {
    async handler(chatUpdate) {
        if (global.db.data == null) await loadDatabase()
        this.msgqueque = this.msgqueque || []
        // console.log(chatUpdate)
        if (!chatUpdate) return
        // if (chatUpdate.messages.length > 2 || !chatUpdate.messages.length) return
        if (chatUpdate.messages.length > 1) console.log(chatUpdate.messages)
        let m = chatUpdate.messages[chatUpdate.messages.length - 1]
        let _uptime = process.uptime() * 1000
        global.uptime = clockString(_uptime)
        const more = String.fromCharCode(8206)
        global.readMore = more.repeat(4001)
        global.img = pickRandom(global.fotom)
        global.blur = pickRandom(global.blurr)
        global.wait = pickRandom(global.waitt)
        global.fla = pickRandom(global.flaa)
        global.eror = pickRandom(global.emror)
        global.scn = pickRandom(global.waktuk)
        global.namabot = conn.user.name
        global.ucapan = ucapan()
        global.pickRandom = pickRandom
        global.sock = conn
        global.wm1 = `© irwan_x_yans`
        global.d = new Date(new Date + 3600000)
        const hariRaya = new Date('December 31, 2022 23:59:59')
        const sekarang = new Date().getTime()
        const Selisih = hariRaya - sekarang
        const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
        const ddetik = Math.floor( Selisih % (1000 * 60) / 1000)
        const ultah = new Date('march 7, 2022 23:59:59')
        const sekarat = new Date().getTime() 
        const Kurang = ultah - sekarat
        const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
        const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
        const detek = Math.floor( Kurang % (1000 * 60) / 1000)
        global.locale = 'id'
        global.week = d.toLocaleDateString(locale, { weekday: 'long' })
        global.date = d.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
        })
        global.dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
        }).format(d)
        global.wib= require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
        global.wm = `Waktu: ${wib} WIB\nTanggal : ${week}, ${date}\nTanggal Islam: ${dateIslamic}\nAktif Selama: ${uptime}\n\n© falin`
/*
Ultah Owner: ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`
Kurang ${jhari} Hari ${jjam} Jam ${mmmenit} Menit ${ddetik} Detik Lagi Tahun Baru.. `
*/
        if (!m) return
        console.log(JSON.stringify(m, null, 4))
        try {
            m = simple.smsg(this, m) || m
            if (!m) return
            // console.log(m)
            m.exp = 0
            m.limit = false
            try {
                let user = global.db.data.users[m.sender]
                if (user) {
            if (!isNumber(user.healt)) user.healt = 0
            if (!isNumber(user.stamina)) user.stamina = 0
            if (!isNumber(user.level)) user.level = 0
            if (!isNumber(user.exp)) user.exp = 0
            if (!isNumber(user.pc)) user.pc = 0
            if (!isNumber(user.limit)) user.limit = 10
            if (!isNumber(user.lastclaim)) user.lastclaim = 0
            if (!isNumber(user.money)) user.money = 0
            if (!isNumber(user.duidharam)) user.duidharam = 500
            
            if (!isNumber(user.trofi)) user.trofi= 0
            if (!user.rtrofi) user.rtrofi = 'Perunggu'
            if (!isNumber(user.rumahsakit)) user.rumahsakit= 0
            if (!isNumber(user.fortress)) user.fortress = 0
            if (!isNumber(user.troopcamp)) user.troopcamp = 0
            if (!isNumber(user.shield)) user.shield = false
            if (!isNumber(user.pertanian)) user.pertanian = 0
            if (!isNumber(user.tambang)) user.tambang = 0
            
            //
            if (!isNumber(user.diamond)) user.diamond = 0
            if (!isNumber(user.iron)) user.iron = 0

            if (!isNumber(user.common)) user.common = 0
            if (!isNumber(user.uncommon)) user.uncommon = 0
            if (!isNumber(user.mythic)) user.mythic = 0
            if (!isNumber(user.legendary)) user.legendary = 0
            if (!isNumber(user.pet)) user.pet = 0
            if (!isNumber(user.psepick)) user.psepick = 0
            if (!isNumber(user.psenjata)) user.psenjata = 0
        
            if (!isNumber(user.potion)) user.potion = 0
            if (!isNumber(user.sampah)) user.sampah = 0
            if (!isNumber(user.armor)) user.armor = 0
            if (!isNumber(user.pancing)) user.pancing = 0
            
            if (!isNumber(user.kucing)) user.kucing = 0
            if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
            if (!isNumber(user.kuda)) user.kuda = 0
            if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
            if (!isNumber(user.rubah)) user.rubah = 0
            if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
            if (!isNumber(user.anjing)) user.anjing = 0
            if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0
            //Penambah STAMINA
             if (!isNumber(user.apel)) user.apel = 0
             if (!isNumber(user.ayamb)) user.ayamb = 0
             if (!isNumber(user.ayamg)) user.ayamg = 0
             if (!isNumber(user.sapir)) user.sapir = 0
             if (!isNumber(user.ssapi)) user.ssapi = 0
             if (!isNumber(user.esteh)) user.esteh = 0
             if (!isNumber(user.leleb)) user.leleb = 0
             if (!isNumber(user.leleg)) user.leleg = 0
             
            if (!'Banneduser' in user) user.Banneduser = false
            if (!'BannedReason' in user) user.BannedReason = ''
            if (!isNumber(user.warn)) user.warn = 0

            if (!isNumber(user.afk)) user.afk = -1
            if (!'afkReason' in user) user.afkReason = ''
            
            if (!isNumber(user.pedagang)) user.pedagang = false
            if (!isNumber(user.polisi)) user.polisi = false
            if (!isNumber(user.dokter)) user.dokter = false
            if (!isNumber(user.ojek)) user.ojek = false
            if (!isNumber(user.petani)) user.petani = false
            if (!isNumber(user.kuli)) user.kuli = false
            if (!isNumber(user.montir)) user.montir = false
            if (!isNumber(user.job)) user.job = false
            //last Job
            if (!isNumber(user.lastjb)) user.lastjb = 0
            
            if (!isNumber(user.nila)) user.nila = 0
            if (!isNumber(user.bawal)) user.bawal = 0
            if (!isNumber(user.lele)) user.lele = 0
            if (!isNumber(user.paus)) user.paus = 0
            if (!isNumber(user.kepiting)) user.kepiting = 0
            if (!isNumber(user.gurita)) user.gurita = 0
            if (!isNumber(user.cumi)) user.cumi= 0
            if (!isNumber(user.buntal)) user.buntal = 0
            if (!isNumber(user.dory)) user.dory = 0
            if (!isNumber(user.lumba)) user.lumba = 0
            if (!isNumber(user.lobster)) user.lobster = 0
            if (!isNumber(user.hiu)) user.hiu = 0
           if (!isNumber(user.udang)) user.udang = 0
            if (!isNumber(user.ikan)) user.ikan = 0
            if (!isNumber(user.orca)) user.orca = 0
        
            if (!isNumber(user.banteng)) user.banteng = 0
            if (!isNumber(user.harimau)) user.harimau = 0
            if (!isNumber(user.gajah)) user.gajah = 0
     if (!isNumber(user.kambing)) user.kambing = 0
     if (!isNumber(user.panda)) user.panda = 0
     if (!isNumber(user.buaya)) user.buaya = 0
     if (!isNumber(user.kerbau)) user.kerbau = 0
     if (!isNumber(user.sapi)) user.sapi = 0
     if (!isNumber(user.monyet)) user.monyet = 0
     if (!isNumber(user.babihutan)) user.babihutan = 0
     if (!isNumber(user.babi)) user.babi = 0
     if (!isNumber(user.ayam)) user.ayam = 0
     if (!isNumber(user.rusa)) user.rusa = 0
     if (!isNumber(user.keledai)) user.keledai = 0
     if (!isNumber(user.beruang)) user.beruang = 0
     if (!isNumber(user.unta)) user.unta = 0
     //
      if (!isNumber(user.lastberbru)) user.lastberbru = 0
            if (!isNumber(user.anakkucing)) user.anakkucing = 0
            if (!isNumber(user.anakkuda)) user.anakkuda = 0
            if (!isNumber(user.anakrubah)) user.anakrubah = 0
            if (!isNumber(user.anakanjing)) user.anakanjing = 0
            if (!isNumber(user.makananpet)) user.makananpet = 0

            if (!isNumber(user.antispam)) user.antispam = 0
            if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0

            if (!isNumber(user.kayu)) user.kayu = 0
            if (!isNumber(user.string)) user.string = 0
            if (!isNumber(user.batu)) user.batu = 0
            if (!isNumber(user.besi)) user.besi = 0
            if (!isNumber(user.emas)) user.emas = 0
            if (!isNumber(user.makanan)) user.makanan = 0
            
            if (!isNumber(user.sword)) user.sword = 0
            if (!isNumber(user.sworddurability)) user.sworddurability = 100
            if (!isNumber(user.pickaxe)) user.pickaxe = 0
            if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
            if (!isNumber(user.fishingrod)) user.fishingrod = 0
            if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
           //KERAJAAN
           //
            
            if (!isNumber(user.lastadventure)) user.lastadventure = 0
            if (!isNumber(user.lastfishing)) user.lastfishing = 0
            if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
            
            if (!isNumber(user.lastsda)) user.lastsda = 0
            if (!isNumber(user.lastsda)) user.lastwar = 0
            
            if (!isNumber(user.lastduel)) user.lastduel = 0
            if (!isNumber(user.lastmining)) user.lastmining = 0
            if (!isNumber(user.lasthunt)) user.lasthunt = 0
            if (!isNumber(user.lastweekly)) user.lastweekly = 0
            if (!isNumber(user.lastmonthly)) user.lastmontly = 0
            if (!isNumber(user.lastbansos)) user.lastbansos = 0
            if (!isNumber(user.lastrampok)) user.lastrampok = 0
            /////if (!('kingdom' in user)) user.kingdom = false
            if (!isNumber(user.pasangan)) user.pasangan = ''
            if (!('registered' in user)) user.registered = false
            if (!user.registered) {
                if (!('name' in user)) user.name = this.getName(m.sender)
                if (!isNumber(user.age)) user.age = -1
                if (!isNumber(user.regTime)) user.regTime = -1
                if (!user.role) user.role = 'Beginner'
            }
            if (!('autolevelup' in user)) user.autolevelup = false
          } else global.db.data.users[m.sender] = {
            healt: 100,
            stamina: 100,
            level: 0,
            pc: 0,
            duidharam: 500,
            //
            trofi: 0,
            rtrofi: 'perunggu',
            rumahsakit: 0,
            troopcamp: 0,
            fortress: 0,
            makanan: 0,
            shield: false,
            //
            exp: 0,
            limit: 10,
            lastclaim: 0,
            money: 0,
            diamond: 0,
            iron: 0,
            common: 0,
            uncommon: 0,
            mythic: 0,
            legendary: 0,
            pet: 0,
            psepick: 0,
            psenjata: 0,
            potion: 0,
            pancing: 0,
            sampah: 0,
            armor: 0,
            kucing: 0,
            kucinglastclaim: 0,
            kuda: 0,
            kudalastclaim: 0,
            rubah: 0,
            rubahlastclaim: 0,
            anjing: 0,
            anjinglastclaim: 0,
            Banneduser: false,
            BannedReason: '',
            warn: 0,
            afk: -1,
            afkReason: '',
            //
            polisi: 0,
          petani: 0,
          pedagang: 0,
          ojek: 0,
          dokter: 0,
          kuli: 0,
          montir: 0,
          //
          lele: 0,
          nila: 0,
          bawal: 0,
          paus: 0,
          kepiting: 0,
           gurita: 0,
          cumi: 0,
          buntal: 0,
          dory: 0,
          lumba: 0,
          lobster: 0,
          hiu: 0,
          udang: 0,
          ikan: 0,
          orca: 0,
          banteng: 0,
          harimau: 0,
          gajah: 0,
          kambing: 0,
          panda: 0,
          buaya: 0,
          kerbau : 0,
          sapi: 0,
          monyet : 0,
          babihutan: 0,
          babi: 0,
          ayam: 0,
    
          apel: 20,
          ayamb: 0,
          ayamg: 0,
          ssapi: 0,
          sapir: 0,
          leleb: 0,
          leleg: 0,
          esteh: 0,
    
            anakkucing: 0,
            anakkuda: 0,
            anakrubah: 0,
            anakanjing: 0,
            makananpet: 0,
            antispam: 0,
            antispamlastclaim: 0,
            //SDA
            string: 0,
            kayu: 0,
            batu: 0,
            besi: 0,
            emas: 0,
            makanan: 0,
            //
            sword: 0,
            sworddurability: 0,
            pickaxe: 0,
            pickaxedurability: 0,
            fishingrod: 0,
            fishingroddurability: 0,
            lastadventure: 0,
            lastfishing: 0,
            lastdungeon: 0,
            lastsda: 0,
            lastwar: 0,
            lastduel: 0,
            lastmining: 0,
            lasthunt: 0,
            lastjb: 0,
            lastweekly: 0,
            lastmonthly: 0,
            lastbansos: 0,
            lastrampok: 0,
            registered: false,
            name: this.getName(m.sender),
            age: -1,
            regTime: -1,
            role: 'Beginner',
            autolevelup: false,
            pasangan: '',
        }
                let chat = global.db.data.chats[m.chat]
                if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
                if (chat) {
                    if (!('isBanned' in chat)) chat.isBanned = false
                    if (!('welcome' in chat)) chat.welcome = true
                    if (!('detect' in chat)) chat.detect = true
                    if (!('sWelcome' in chat)) chat.sWelcome = ''
                    if (!('sBye' in chat)) chat.sBye = ''
                    if (!('sPromote' in chat)) chat.sPromote = ''
                    if (!('sDemote' in chat)) chat.sDemote = ''
                    if (!('delete' in chat)) chat.delete = true
                    if (!('antiLink' in chat)) chat.antiLink = true
                    if (!('viewonce' in chat)) chat.viewonce = false
                    if (!('antiToxic' in chat)) chat.antiToxic = false
                    if (!('nsfw' in chat)) chat.nsfw = true
                } else global.db.data.chats[m.chat] = {
                    isBanned: false,
                    welcome: true,
                    detect: true,
                    sWelcome: '',
                    sBye: '',
                    sPromote: '',
                    sDemote: '',
                    delete: true,
                    antiLink: true,
                    viewonce: false,
                    antiToxic: true,
                    nsfw: true, 
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
            if (opts['pconly'] && m.chat.endsWith('g.us')) return
            if (opts['gconly'] && !m.chat.endsWith('g.us')) return
            if (opts['swonly'] && m.chat !== 'status@broadcast') return
            if (typeof m.text !== 'string') m.text = ''
            if (opts['queque'] && m.text) {
                this.msgqueque.push(m.id || m.key.id)
                await delay(this.msgqueque.length * 1000)
            }
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
            m.exp += Math.ceil(Math.random() * 10)

            let usedPrefix
            let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

            let isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
            let isOwner = isROwner || m.fromMe
            let isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
            let isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
            let groupMetadata = (m.isGroup ? (conn.chats[m.chat] || {}).metadata : {}) || {}
            let participants = (m.isGroup ? groupMetadata.participants : []) || []
            let user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
            let bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
            let isAdmin = user && user.admin || false // Is User Admin?
            let isBotAdmin = bot && bot.admin || false // Are you Admin?
            let DevMode = (global.DeveloperMode.toLowerCase() == 'true') || false
            for (let name in global.plugins) {
                let plugin = global.plugins[name]
                if (!plugin) continue
                if (plugin.disabled) continue
                if (!opts['restrict']) if (plugin.tags && plugin.tags.includes('admin')) {
                    // global.dfail('restrict', m, this)
                    continue
                }
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
                    chatUpdate,
                })) continue
                if (typeof plugin !== 'function') continue
                if ((usedPrefix = (match[0] || '')[0])) {
                    let noPrefix = m.text.replace(usedPrefix, '')
                    let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                    args = args || []
                    let _args = noPrefix.trim().split` `.slice(1)
                    let text = _args.join` `
                    command = (command || '').toLowerCase()
                    let fail = plugin.fail || global.dfail // When failed
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
                        if (name != 'unbanchat.js' && chat && chat.isBanned) return // Except this
                        if (name != 'unbanuser.js' && user && user.banned) return
                    }
                    if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
                        fail('owner', m, this)
                        continue
                    }
                    if (plugin.rowner && !isROwner) { // Real Owner
                        fail('rowner', m, this)
                        continue
                    }
                    if (plugin.owner && !isOwner) { // Number Owner
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
                    if (plugin.group && !m.isGroup) { // Group Only
                        fail('group', m, this)
                        continue
                    } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
                        fail('botAdmin', m, this)
                        continue
                    } else if (plugin.admin && !isAdmin) { // User Admin
                        fail('admin', m, this)
                        continue
                    }
                    if (plugin.private && m.isGroup) { // Private Chat Only
                        fail('private', m, this)
                        continue
                    }
                    if (plugin.nsfw && !global.db.data.settings.nsfw) { // Nsfw
                    fail('nsfw', m, this)
                    continue
                    }
                    if (plugin.register == true && _user.registered == false) { // Butuh daftar?
                        fail('unreg', m, this)
                        continue
                    }
                    m.isCommand = true
                    let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
                    if (xp > 200) m.reply('Ngecit -_-') // Hehehe
                    else m.exp += xp
                    if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
                        this.reply(m.chat, `Limit anda habis, silahkan beli melalui *${usedPrefix}buy*`, m)
                        continue // Limit habis
                    }
                    if (plugin.level > _user.level) {
                        this.reply(m.chat, `diperlukan level ${plugin.level} untuk menggunakan perintah ini. Level kamu ${_user.level}`, m)
                        continue // If the level has not been reached
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
                        chatUpdate,
                        DevMode,
                    }
                    try {
                        await plugin.call(this, m, extra)
                        if (!isPrems) m.limit = m.limit || plugin.limit || false
                    } catch (e) {
                        // Error occured
                        m.error = e
                        console.error(e)
                        if (e) {
              let text = util.format(e)
              for (let key of Object.values(global.APIKeys))
                text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                if (DevMode && text.length > 100) {
                        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid))  m.reply(`*file:* ${m.plugin}\n*Nomor:* ${m.sender}\n*Text:* ${m.text}\n\n\`\`\`${text}\`\`\``, jid)
                }
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
                        //if (m.limit) m.reply(+ m.limit + ' Limit terpakai')
                    }
                    break
                }
            }
        } catch (e) {
            console.error(e)
        } finally {
        conn.sendPresenceUpdate("composing", m.chat)
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

            // try {
            //     require('./lib/print')(m, this)
            // } catch (e) {
            //     console.log(m, m.quoted, e)
            // }
            if (opts['autoread']) await this.chatRead(m.chat, m.isGroup ? m.sender : undefined, m.id || m.key.id).catch(() => { })
            let quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
            if (opts['queque'] && m.text && quequeIndex !== -1) this.msgqueque.splice(quequeIndex, 1)
        }
    },
    async participantsUpdate({ id, participants, action }) {
        if (opts['self']) return
        // if (id in conn.chats) return // First login will spam
        if (global.isInit) return
        let chat = global.db.data.chats[id] || {}
        let text = ''
        switch (action) {
            case 'add':
            case 'remove':
                if (chat.welcome) {
                    let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
                    for (let user of participants) {
                        let pp = "./src/avatar_conctact.png"
                        try {
                            pp = await this.profilePictureUrl(user, 'image')
                        } catch (e) {
                        } finally {
                            text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', this.getName(id)).replace('@desc', groupMetadata.desc.toString()).replace('@mem', groupMetadata.participants.length) :
                                (chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user', '@' + user.split('@')[0])
                            this.sendFile(id, pp, 'pp.jpg', text, {
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
                            /*this.sendTemplate2UrlButtonLoc(id, text, wm1, await(await fetch(pp)).buffer(), action === 'add' ? 'Welcome' : 'Goodbye', 'p', null, {
                            contextInfo: {
                             mentionJid: [user]
                             }
                          })*/
                        }
                    }
                }
                break
            case 'promote':
                text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
            case 'demote':
                if (!text) text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
                text = text.replace('@user', '@' + participants[0].split('@')[0])
                if (chat.detect) this.sendMessage(id, text, MessageType.extendedText, {
                    contextInfo: {
                        mentionedJid: this.parseMention(text)
                    }
                })
                break
        }
    },
    async delete({ remoteJid, fromMe, id, participant }) {
        if (fromMe) return
        let chats = Object.entries(conn.chats).find(([user, data]) => data.messages && data.messages[id])
        if (!chats) return
        let msg = JSON.parse(chats[1].messages[id])
        let chat = global.db.data.chats[msg.key.remoteJid] || {}
        if (chat.delete) return
        await this.reply(msg.key.remoteJid, `
Terdeteksi @${participant.split`@`[0]} telah menghapus pesan
Untuk mematikan fitur ini, ketik
*.enable delete*
`.trim(), msg, {
            mentions: [participant]
        })
        this.copyNForward(msg.key.remoteJid, msg).catch(e => console.log(e, msg))
    }
}

global.dfail = (type, m, conn) => {
    let msg = {
        rrowner: 'This command only can used by _*Owner!*_\nPerintah ini hanya dapat digunakan oleh _*Owner!_*.',
        owner: 'This command only can used by _*Owner!*_\nPerintah ini hanya dapat digunakan oleh _*Owner!_*.',
        mods: 'This command only can used by _*Moderator!*_\nPerintah ini hanya dapat digunakan oleh _*Moderator!*_',
        premium: 'This command only can used by _*Premium Users.*_\nPerintah ini hanya dapat digunakan oleh _*User Premium.*_',
        group: 'This command only can used in Group.\nPerintah ini hanya dapat digunakan di Group.',
        private: 'This command only can used in Private Chat.\nPerintah ini hanya dapat digunakan di Chat Pribadi.',
        admin: 'This command only can used by *Group Admin.*\nPerintah ini hanya dapat digunakan oleh *Admin Group.*',
        botAdmin: 'Make the bot number as a group admin to use this command.\nJadikan bot sebagai admin untuk menggunakan perintah ini.',
        unreg: 'Silahkan daftar untuk menggunakan fitur ini dengan cara mengetik:\n\n*#daftar*\n\nContoh: *#daftar setan.15*',
        nsfw: 'NSFW doesnt active.\nNSFW tidak aktif.',
        restrict: 'Fitur ini di *disable*!'
    }[type]
    if (msg) return conn.sB(m.chat, msg.trim(), wm, null, [[`Menu`, `#menu`]], m)
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright("Update 'handler.js'"))
    delete require.cache[file]
    if (global.reloadHandler) console.log(global.reloadHandler())
})

function ucapan() {
      const time = require('moment-timezone').tz('Asia/Jakarta').format('HH')
      res = "Selamat dinihari"
      if (time >= 4) {
        res = "Selamat pagi"
      }
      if (time > 10) {
        res = "Selamat siang"
      }
      if (time >= 15) {
        res = "Selamat sore"
      }
      if (time >= 18) {
        res = "Selamat malam"
      }
      return res
    }
    
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

global.emror = [
'Error', 
'Astagfirullah Error', 
'Nice Error', 
'Salah Format Keknya :v', 
'error bro', 
'Kocak Error :v', 
'Wtf Error :v', 
'Ciaaa error', 
'Error cuyy', 
'Dahlah (emot batu) Error',
'Kyaa Error',
'Error Sayangg', 
'Error Mengcapek Keknya Aku', 
'Astoge Error, Yok Bisa Yok', 
'Buset Error :)',
'Lah Gabisa, Kurang Donasi Aku Ni Keknya'
]

global.waitt = [
'「 ⏱️ 」 _Tunggu Sedang di Proses..._',
'「 ⏱️ 」Loading...',
'「 ⏱️ 」Loanjing...',
'bntr lgi bedmud aku',
'iya lagi di proses',
'sabar y',
'bntr aku usahain dlu', 
'mulai dari nol yahh say', 
'tunggu bntar, jan kemana-mana y', 
'wait a minute', 
'wait a second', 
'iya iyaaa bntar woila', 
'iya bntar lagiii, jan spam ya',
'lagi di proses, kurang cepet? donasi banh, jan make doang, huhuu'
]
global.fotom = [
'https://telegra.ph/file/849936d28fdd89938d149.jpg',
'https://telegra.ph/file/c5ef982665828d85fbf82.jpg',
'https://telegra.ph/file/bee9604b24633dd3c2c8e.jpg',
'https://telegra.ph/file/e639f3bbcd923f1f53870.jpg',
'https://telegra.ph/file/f183bcee8ebda68e6eb83.jpg',
'https://telegra.ph/file/6ff8cd034fa543fdb1500.jpg',
'https://telegra.ph/file/8426ad10aba926f0d4e61.jpg',
'https://telegra.ph/file/f53b40c1c62b00a616f73.jpg',
'https://telegra.ph/file/a06b592a21330c905db78.jpg',
'https://telegra.ph/file/9d44abbc83cecd9a65a23.jpg',
'https://telegra.ph/file/a97a2961cc6e6775280ee.jpg',
'https://telegra.ph/file/6c79245e6b5b274b29668.jpg',
'https://telegra.ph/file/52c3d0dfcafb270aa2e91.jpg',
'https://telegra.ph/file/5757544239266a71f1504.jpg',
'https://telegra.ph/file/d6ee12419fda342be47f9.jpg',
'https://telegra.ph/file/3c3c1318a7a075f7bab98.jpg',
'https://telegra.ph/file/0fc2ddad634d95ed5f8f2.jpg',
'https://telegra.ph/file/83d79437d2771488d1f76.jpg',
'https://telegra.ph/file/1930f6546d678de68aee3.jpg'
]

global.flaa = [
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
 ]

global.blurr = [
'https://telegra.ph/file/1886961d3a87ae6f7a6d7.jpg',
'https://telegra.ph/file/dcf8e695b461c957ce0a5.jpg',
'https://telegra.ph/file/ed8cad6d77c75921337f8.jpg',
'https://telegra.ph/file/6e56424b1beebd3042b97.jpg',
'https://telegra.ph/file/e892cb11a77ef52f740c2.jpg'
]

global.waktuk = [
   9, 5454, 4949,
   99, 545454, 49,
   999, 54545454, 494949,
   9999, 5454545454, 49494949,
   99999, 545454545454, 4949494949,
   999999, 54545454545454, 4949494949494,
   9999999, 12121212121212, 3232323232323232,
   99999999, 121212121212, 32323232323232,
   999999999, 1212121212, 323232323232,
   9999999999, 12121212, 3232323232,
   99999999999, 121212, 3232,
   999999999999, 1212, 323232,
   9999999999999, 12, 32323232
   ]