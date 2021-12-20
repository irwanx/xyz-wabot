let fs = require('fs')
//bts================================================
global.owner = ['62882008369956', '628882611841', '62895384992596', '6285725736656'] // Letakan nomor kamu disini
global.mods = ['62882008369956', '628882611841'] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  vhtear: 'https://api.vhtear.com',
  lolhum: 'https://api.lolhuman.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  aqul: 'https://api.justaqul.xyz',
  irwan: 'https://irwan-api1-xyz.herokuapp.com',
  mel: 'https://melcanz.com'

}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'apikey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://api.lolhuman.xyz': 'apikey',
  'https://api.vhtear.com': 'sayahafiz',
  'https://fxc7-api.herokuapp.com': 'apikey',
  'https://api.justaqul.xyz': 'apikey',
  'http://zekais-api.herokuapp.com': 'apikey',
  'https://irwan-api1-xyz.herokuapp.com': 'memek',
  'https://melcanz.com': 'trial'

}

// Sticker WM
global.packname = ':)'
global.author = '@irwan_x_yans'
global.irwan1 = '62882008369956@s.whatsapp.net'
global.wan = `0@s.whatsapp.net` //gausah di ubah
global.wait = '「 ⏱️ 」Loading...'
global.ganteng = 'https://wa.me/62882008369956?text=Hallo Mas, Kamu Ganteng'
global.gantengku = 'Link Ke Whatsapp Developer Bot'
global.eror = '「❗」Server ERROR!'
global._gc1 = 'https://chat.whatsapp.com/L508viIjjPwHpYEqgTxqj6'
global._gc2 = 'https://chat.whatsapp.com/JsDLZeKb0YLDyrYc1L28sk'
global.fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='
global.watermark = '© Irwan ᝣ Yans'
global.wm = '© Irwan ᝣ Yans'
global.gc1 = '6281228040725-1623203905@g.us'
global.gc2 = '6287887038108-1499223893@g.us'
global.sumberurl = 'https://www.youtube.com/watch?v=TaXTvW0HGmE'
global.deskripsiurl = 'xyz-wabot adalah salah satu bot WhatsApp, yang mempunyai ±350 fitur'
global.namabot = "xyz-wabot" //manual di sini
global.thanks = `Thanks to:\n•Allah swt\n•Nurutomo\n•IrwanX\n•Ariffb\n•Aca Mirabel\n•Penyedia Layanan API\n•Orang-orang yang Berdonasi\n•Wifi Tetangga\n\nJika menemukan bug atau request fitur dan join bot harap chat owner dengan cara:\n*#report* [pesan].\n\n(Bot join group NOT FREE!)\nPrice:\n10K untuk 1 bulan\nUntuk 1 group\n\nNb:bot ini masih terus dikembangkan.`
global.multiplier = 69 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})