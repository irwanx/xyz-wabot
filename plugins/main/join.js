import db from '../../lib/database.js'
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, {
  conn,
  args,
  isPrems,
  isOwner,
  usedPrefix,
  command
}) => {
  if (args[0] == 'help') throw `Perintah ini untuk memasukkan bot ke dalam grup.
  Contoh Penggunaan: ${usedPrefix + command} https://chat.whatsapp.com/ `
  if (!args[0]) throw `Link nya mana?`
  let [_,
    code] = args[0].match(linkRegex) || []
  if (!code) throw 'Link Salah'
  var user = db.data.users[m.sender]
  var bot = db.data.settings[conn.user.jid]
  if (!bot.publicJoin) throw 'fitur mati'
  try {
    if (bot.publicJoin) {
      if (!(isPrems || isOwner)) {
        if (user.joincount == 1) throw `Kamu sudah melebihi token/limit memasukkan bot ke dalam group!`
        user.joincount += 1
        var res = await conn.groupAcceptInvite(code)
        var chats = db.data.chats[res]
        chats.expired = + new Date() * 1 + 0.5 * 1000 * 60 * 60 * 24
        m.reply(`Joining group`).then(async () => {
          await m.reply(`Berhasil join grup ${await conn.getName(res)}
Bot akan keluar secara otomatis setelah: 12 jam.
Token joincount mu: ${user.joincount}/1`)
          await conn.fakeReply(owner[0][0] + '@s.whatsapp.net', `@${m.sender.split`@`[0]} telah menambahkan ${conn.user.name} ke ${await conn.getName(res)}, bot akan keluar dalam waktu: 12 jam`, set.waid, "Join Baru", set.stts, {
            mentions: [m.sender]
          })
          await conn.fakeReply(res, `${conn.user.name} adalah sebuah program whatsapp yang dibangun dengan Nodejs, ${conn.user.name} diundang oleh @${m.sender.split(`@`)[0]}

Ketik ${usedPrefix}menu untuk melihat daftar perintah
Bot akan keluar secara otomatis setelah ${await conn.msToDate(await db.data.chats[res].expired - new Date() * 1)}`.trim(), set.waid, 'Hello :)', set.stts, {mentions: [m.sender]})
        })
      } else if (!isOwner) {
        if (user.joincount == 5) throw `Kamu sudah melebihi token/limit memasukkan bot ke dalam group!`
        user.joincount += 1
        var res = await conn.groupAcceptInvite(code)
        var chats = db.data.chats[res]
        chats.expired = + new Date() * 1 + 15 * 1000 * 60 * 60 * 24
        m.reply(`Joining group`).then(async () => {
          await m.reply(`Berhasil join grup ${await conn.getName(res)}
Bot akan keluar secara otomatis setelah: 15 hari.
Token joincount mu: ${user.joincount}/5`)
          await conn.fakeReply(owner[0][0] + '@s.whatsapp.net', `@${m.sender.split`@`[0]} telah menambahkan ${conn.user.name} ke ${await conn.getName(res)}, bot akan keluar dalam waktu: 15 hari`, set.waid, "Join Bos", set.stts, {
            mentions: [m.sender]
          })
          await conn.fakeReply(res, `${conn.user.name} adalah sebuah program whatsapp yang dibangun dengan Nodejs, ${conn.user.name} diundang oleh @${m.sender.split(`@`)[0]}

Ketik ${usedPrefix}menu untuk melihat daftar perintah
Bot akan keluar secara otomatis setelah ${await conn.msToDate(await db.data.chats[res].expired - new Date() * 1)}`.trim(), set.waid, 'Hello :)', set.stts, {mentions: [m.sender]})
        })
      }
      if (isOwner) {
        if (!args[1]) return m.reply(`masukkan Format Yang benar ${usedPrefix + command} <link> <jumlah hari>`)
        var res = await conn.groupAcceptInvite(code)
        var chats = db.data.chats[res]
        m.reply(args[1])
        chats.expired = + new Date() * 1 + args[1] * 1000 * 60 * 60 * 24
        await m.reply(`Joining group`).then(async () => {
          await m.reply(`Berhasil join grup ${await conn.getName(res)}
Bot akan keluar secara otomatis setelah: ${args[1]} hari.`).then(async () => {
              await conn.fakeReply(res, `${conn.user.name} adalah sebuah program whatsapp yang dibangun dengan Nodejs, ${conn.user.name} diundang oleh @${m.sender.split(`@`)[0]}

Ketik ${usedPrefix}menu untuk melihat daftar perintah
Bot akan keluar secara otomatis setelah ${await conn.msToDate(await db.data.chats[res].expired - new Date() * 1)}`.trim(), set.waid, 'Hello :)', set.stts, {
                  mentions: [m.sender]
                })
            })
        })
      }
    }
  } catch (e) {
    throw 'Sepertinya dobdabot Tidak Bisa Join Ke Group Tersebut'
  }
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['']

handler.command = /^join$/i

export default handler