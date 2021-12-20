let fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} muhammad`
  let res = await fetch(global.API('irwan', '/api/muslim/kisahnabi', { nabi: text }, 'apikey'))
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  //if (!json.status) throw json
  let caption = `
  Kisah Ditemukan!

  Nama: ${json.result.name}
  Lahir: ${json.result.kelahiran}
  Wafat Umur: ${json.result.wafat_usia}
  Singah: ${json.result.singgah}
  Kisah: 
  ${json.result.kisah}

  [+] ${namabot} [+]
  `.trim()
  m.reply(caption)
}
handler.help = ['kisahnabi'].map(v => v + ' <teks>')
handler.tags = ['internet']
handler.command = /^(kisahnabi)$/i

module.exports = handler