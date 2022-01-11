let handler = async (m, { conn, command, args }) => {
   if (!args[0]) return conn.reply(m.chat, 'Tidak ada url', m)
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
let res = await(await fetch(`https://mnazria.herokuapp.com/api/screenshotweb?url=${args[0]}`)).json()
await conn.sendMedia(m.chat, res.gambar, m, { fileLength: scn, caption: "Sukses Banh, Mantapps.. "})
}
handler.help = ['ss'].map(v => v + ' <url>')
handler.tags = ['internet']
handler.command = /^ss$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = 1
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler