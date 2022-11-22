import {
    readFileSync
} from 'fs'
import {
    sizeFormatter
} from 'human-readable'
import func from '../../lib/function.js'
import db from '../../lib/database.js'
import osu from 'node-os-utils'
import os from 'os'
let handler = async (m, {
    text,
    conn,
    usedPrefix,
    command
}) => {
    try {
        let {
            self,
            autoread,
            restrict,
            getsw,
            publicJoin,
            unavailable,
            statusUpdate,
            mature,
            autotyping,
            status,
            readsw
        } = db.data.settings[conn.user.jid]
        var format = sizeFormatter({
            std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
            decimalPlaces: 2,
            keepTrailingZeroes: false,
            render: (literal, symbol) => `${literal} ${symbol}B`,
        })
        let NotDetect = 'Not Detect'
        let cpu = osu.cpu
        let drive = osu.drive
        let mem = osu.mem
        let netstat = osu.netstat
        let cpuModel = cpu.model()
        let osVersion = os.version()
        let ip = osu.os.ip()
        let OS = osu.os.platform()
        let HostN = osu.os.hostname()
        let cpuCore = cpu.count()
        let cpuPer
        let p1 = cpu.usage().then(cpuPercentage => {
            cpuPer = cpuPercentage
        }).catch(() => {
            cpuPer = NotDetect
        })
        let driveTotal, driveUsed, drivePer
        let p2 = drive.info().then(info => {
            driveTotal = (info.totalGb + ' GB'),
                driveUsed = info.usedGb,
                drivePer = (info.usedPercentage + '%')
        }).catch(() => {
            driveTotal = NotDetect,
                driveUsed = NotDetect,
                drivePer = NotDetect
        })
        let ramTotal, ramUsed
        let p3 = mem.info().then(info => {
            ramTotal = info.totalMemMb,
                ramUsed = info.usedMemMb
        }).catch(() => {
            ramTotal = NotDetect,
                ramUsed = NotDetect
        })
        let netsIn, netsOut
        let p4 = netstat.inOut().then(info => {
            netsIn = (info.total.inputMb + ' MB'),
                netsOut = (info.total.outputMb + ' MB')
        }).catch(() => {
            netsIn = NotDetect,
                netsOut = NotDetect
        })
        await Promise.all([p1, p2, p3, p4])
        await m.replyv2(wait)
        let _ramTotal = (ramTotal + ' MB')
        let old = performance.now()
        let neww = performance.now()
        let speed = neww - old
        var datab = Object.keys(db.data.users)
        let chats = datab.filter(v => v.endsWith('s.whatsapp.net')).map(v => v)
        var a = await conn.groupFetchAllParticipating()
        let b = Object.entries(a).slice(0).map(entry => entry[1])
        //var groups = b.map(v => v.id)
        let groups = datab.filter(v => v.endsWith('g.us')).map(v => v)
        var groupsIn = groups.filter(v => !v.read_only).length
        let _uptime = process.uptime() * 1000
        let runtime = func.clockString(_uptime)
        let usergakdaftar = Object.keys(db.data.users).length
        let userdaftar = Object.values(db.data.users).filter(user => user.registered == true).length
        let {
            version
        } = await readFileSync('./package.json').toString()
        let txt = `INFORMASI BOT

Library : *Baileys-MD*
Language : *Javascript*
Database : *MongoDB*
Version : *${version}*
Developer : *@${owner[0][0]}*
Runtime : *${runtime}*
Prefix : *Multi Prefix 「 ${usedPrefix} 」*
Mode : *${global.opts['self'] ? 'Self' : 'Public'}*
User : *${usergakdaftar}*
Register : *${userdaftar}*

💬 Info Chat :
- *${groups.length}* Group Chats
- *${groupsIn}* Groups Joined
- *${groups.length - groupsIn}* Groups Left
- *${chats.length - groups.length}* Personal Chats
- *${chats.length}* Total Chats
- *${conn.fetchBlocklist.length}* Terblock
- *${Object.entries(db.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned
- *${Object.entries(db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned

*Setting* :
${autoread ? '✅' : '❌'} *Mode Auto Read*
${autotyping ? '✅' : '❌'} *Mode Auto Typing*
${mature ? '✅' : '❌'} *Mode Dewasa*
${unavailable ? '✅' : '❌'} *Mode Offline*
${restrict ? '✅' : '❌'} *Mode Restrict*
${self ? '✅' : '❌'} *Mode Self*
${getsw ? '✅' : '❌'} *Download Story*
${publicJoin ? '✅' : '❌'} *Public Join*
${readsw ? '✅' : '❌'} *Read Story*
${statusUpdate ? '✅' : '❌'} *Status Update*
*Status Time* : ${await conn.msToDate(status - new Date())}
${set.readMore}

💻 *Server Info* :
RAM: *${format(os.totalmem() - os.freemem())} / ${format(os.totalmem())}*

*Status Bot*
IP: *${ip}*
OS: *${OS}*
HOSTNAME: *${HostN}*
OS Version: *${osVersion}*
CPU Model: *${cpuModel}*
CPU Core: *${cpuCore} Core*
CPU: *${cpuPer}%*
Ram: *${ramUsed} / ${_ramTotal}(${/[0-9.+/]/g.test(ramUsed) && /[0-9.+/]/g.test(ramTotal) ? Math.round(100 * (ramUsed / ramTotal)) + '%' : NotDetect})*
Drive: *${driveUsed} / ${driveTotal} (${drivePer})*
Ping: *${speed} ms*
Internet IN: *${netsIn}*
Internet OUT: *${netsOut}*
Runtime : *${uptime}*`
        await conn.sendButton(m.chat, txt, wm, null, [
            ["Menu", "#menu"]
        ], m, {
            mentions: await conn.parseMention(txt)
        })
        console.log(OS)
    } catch (e) {
        console.log(e)
        throw e
    }
}
handler.help = ['', 'bot'].map(v => 'status' + v)
handler.tags = ['info']
handler.command = /^(bot)?info|status(bot)?$/i

export default handler