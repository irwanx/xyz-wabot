let handler = m => m

handler.before = async function (m, { conn, isAdmin, isBotAdmin }) {
if (m.key.fromMe) return 
if (m.isBaileys) return 
  if (m.mentionedJid.includes(conn.user.jid)) {
await conn.sendMessage(m.chat, {sticker: {url: './src/sticker/tag.webp'}}, m)
await sock.sendMessage(m.chat, { audio: { url: "./src/audio/apasihm.mp3" }, mimetype: 'audio/mpeg', ptt: true, seconds: scn}, {quoted: m })
   } else if (m.text.toLowerCase() == 'ikutan') {
    await conn.sendMessage(m.chat, {sticker: {url: './src/sticker/Ikutan.webp'}}, m)
   } else if (m.text.toLowerCase() == 'gamau') {
    await conn.sendMessage(m.chat, {sticker: {url: './src/sticker/Gamau.webp'}}, m)
   } else if (m.text.toLowerCase() == 'dongo') {
    await conn.sendMessage(m.chat, {sticker: {url: './src/sticker/Dongo.webp'}}, m)
   } else if (m.text.toLowerCase() == 'g') {
    await conn.sendMessage(m.chat, {sticker: {url: './src/sticker/Enggak.webp'}}, m)
   } else if (m.text.toLowerCase() == 'menu') {
    await conn.sendMessage(m.chat, {sticker: {url: './src/sticker/menu.webp'}}, m)
   } else if (m.text.toLowerCase() == 'kuntul') {
    await sock.sendMessage(m.chat, { audio: { url: "./src/audio/kuntul.m4a" }, mimetype: 'audio/mpeg', ptt: true, seconds: scn}, {quoted: m})
   } else if (m.text.toLowerCase() == 'sayang') {
    await sock.sendMessage(m.chat, { audio: { url: "./src/audio/iyaapasyg.mp3" }, mimetype: 'audio/mpeg', ptt: true, seconds: scn}, {quoted: m})
   } else if (m.text.toLowerCase() == 'kangen') {
    await sock.sendMessage(m.chat, { audio: { url: "./src/audio/kangen.mp3" }, mimetype: 'audio/mpeg', ptt: true, seconds: scn}, {quoted: m})
   } else if (m.text.toLowerCase() == 'bot') {
    await sock.sendMessage(m.chat, { audio: { url: "./src/audio/halosyg.mp3" }, mimetype: 'audio/mpeg', ptt: true, seconds: scn}, {quoted: m})
   } else if (m.text.toLowerCase() == 'nyanyi') {
    await sock.sendMessage(m.chat, { audio: { url: "./src/audio/nyanyi.mp3" }, mimetype: 'audio/mpeg', ptt: true, seconds: scn}, {quoted: m})
   } else if (m.text.toLowerCase() == 'mwah') {
    await sock.sendMessage(m.chat, { audio: { url: "./src/audio/mwah.mp3" }, mimetype: 'audio/mpeg', ptt: true, seconds: scn}, {quoted: m})
   } else if (m.text.toLowerCase() == 'anjay') {
    await sock.sendMessage(m.chat, { audio: { url: "./src/audio/whoah.mp3" }, mimetype: 'audio/mpeg', ptt: true, seconds: scn}, {quoted: m})
   } else if (m.text.toLowerCase() == 'anjing') {
    await sock.sendMessage(m.chat, { audio: { url: "./src/audio/IhOmKasar.ogg" }, mimetype: 'audio/mpeg', ptt: true, seconds: scn}, {quoted: m})
   } else if (m.text.toLowerCase() == 'p') {
    m.reply('pa pe pa pe salam yg bener kontol')
   } else if (m.text.toLowerCase() == 'terimakasih') {
    m.reply('Iya kak sama² semoga bermanfaat')
   }
  return true
}

module.exports = handler
