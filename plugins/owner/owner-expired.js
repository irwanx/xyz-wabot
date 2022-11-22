import db from '../../lib/database.js'
import func from '../../lib/function.js'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0] || isNaN(args[0])) throw `Masukan angka mewakili jumlah hari!\n\ncontoh:\n${usedPrefix + command} 30`

    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    var jumlahHari = 86400000 * args[0]
    var now = new Date() * 1
    if (now < db.data.chats[who].expired) db.data.chats[who].expired += jumlahHari
    else db.data.chats[who].expired = now + jumlahHari
    m.reply(`Berhasil menetapkan hari kedaluarsa untuk *${await conn.getName(who)}* selama ${args[0]} hari.\n\nHitung Mundur : ${await func.msToDate(db.data.chats[who].expired - now)}`)
}
handler.help = ['expired <day>']
handler.tags = ['owner']
handler.command = /^(expi(red)?|addsewa)$/i

handler.owner = true
handler.register = false

export default handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " hari " + hours + " jam " + minutes + " menit";
    // +minutes+":"+sec;
}
