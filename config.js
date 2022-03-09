global.fs = require('fs')
global.fetch = require('node-fetch')
global.chalk = require('chalk')
global.os = require('os')
global.moment = require('moment-timezone')
global.axios = require('axios')
global.scrape = require('./lib/scrape')
global.cheerio = require('cheerio')
global.owner = ['628882611841', '15879075033', '6287833362646', '6285892766102', '6283172366463', '62882008369956', '6281319944687','6289638023602'] // Put your number here
global.mods = ['62882008369956','6289638023602'] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.DeveloperMode = 'false'
global.APIs = { // API Prefix
    // name: 'https://website'
    nrtm: 'https://nurutomo.herokuapp.com',
    bg: 'http://bochil.ddns.net',
    xteam: 'https://api.xteam.xyz',
    zahir: 'https://zahirr-web.herokuapp.com',
    zeks: 'https://api.zeks.xyz',
    pencarikode: 'https://pencarikode.xyz',
    LeysCoder: 'https://leyscoders-api.herokuapp.com',
    neoxr: 'https://neoxr-api.herokuapp.com',
    irwan: 'https://irwan-api1-xyz.herokuapp.com'
}
global.APIKeys = { // APIKey Here
    // 'https://website': 'apikey'
    'https://neoxr-api.herokuapp.com': 'yntkts',
    'https://api.xteam.xyz': 'd90a9e986e18778b',
    'https://irwan-api1-xyz.herokuapp.com': 'IrwanGans',
    'https://zahirr-web.herokuapp.com': 'zahirgans',
    'https://api.zeks.xyz': 'apivinz',
    'https://pencarikode.xyz': 'pais',
    'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = ':)'
global.author = '@dobda.id'
global.packnamee = 'COLONG\nWAJIB FOLLOW IG'

global.gcex = "https://chat.whatsapp.com/L508viIjjPwHpYEqgTxqj6"
global.fotoex = "https://telegra.ph/file/5f6d986c0b87dc6a0d78b.jpg"

//donasi
global.swr = "https://saweria.co/dobdabot"
global.dana = "0888-2611-841"
global.ovo = "0888-2611-841"
global.pulsa = "0896-3802-3602"

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            exp: '✉️',
            money: '💵',
            potion: '🥤',
            diamond: '💎',
            common: '📦',
            uncommon: '🎁',
            mythic: '🗳️',
            legendary: '🗃️',
            pet: '🎁',
            sampah: '🗑',
            armor: '🥼',
            sword: '⚔️',
            kayu: '🪵',
            batu: '🪨',
            string: '🕸️',
            kuda: '🐎',
            kucing: '🐈',
            anjing: '🐕',
            petFood: '🍖',
            gold: '👑',
            emerald: '💚'
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
        if (!results.length) return ''
        else return emot[results[0][0]]
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright("Update 'config.js'"))
    delete require.cache[file]
    require(file)
})
