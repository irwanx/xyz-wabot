const { igdl, tiktok, twitter, pin } = require('../lib/scrape')
const { servers, yta, ytv } = require('../lib/y2mate')
const fetch = require('node-fetch')
const axios = require('axios')
const cheerio = require('cheerio')
let yts = require('yt-search')
let util = require('util')
let handler = m => m

handler.all = async function (m, { isPrems }) {

    if (m.chat.endsWith('broadcast')) return
    if (db.data.users[m.sender].banned) return
    if (db.data.chats[m.chat].isBanned) return

    let url = m.text.split(/\n| /i)[0]

    if (/^.*tiktok/i.test(m.text)) {
        let link = ''
    a = await axios.get('https://ttdownloader.com/', {
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            "cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
        }
    })
    const $ = cheerio.load(a.data)
    let token = $('#token').attr('value')
    let config = {
        'url': url,
        'format': '',
        'token': token
    }
    await axios('https://ttdownloader.com/req/', {
        method: 'POST',
        data: new URLSearchParams(Object.entries(config)),
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            "cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
        }
    })
        .then(({ data }) => {
            const $ = cheerio.load(data)
            link += $('div:nth-child(2) > div.download > a').attr('href')
        })
    if (link.startsWith(`http`)) return conn.sendFile(m.chat, link, `tiktok-downloader.mp4`, wm1, m, 0, { mimetype: 'video/gif' })
        .catch((err) => {
            throw "Error"
        })
    }

    //if (/^.*cocofun/i.test(m.text)) {
        //let res = await fetch(API('jojo', '/api/cocofun-no-wm', { url }))
        //if (!res.ok) return m.reply(eror)
        //let json = await res.json()
        //await m.reply(wait)
        // m.reply(util.format(json))
        //await this.sendFile(m.chat, json.download, '', wm, m)
    //}

    if (/^.*(fb.watch|facebook.com)/i.test(m.text)) {
        let res = await fetch(API('neoxr', '/api/download/fb', { url }, 'apikey'))
        if (!res.ok) return m.reply(eror)
        let json = await res.json()
        if (!json.status) return m.reply(util.format(json))
        await m.reply(wait)
        await conn.sendFile(m.chat, json.data.sd.url, '', `HD: ${json.data.hd.url}\nUkuran: ${json.data.hd.size}\n\n� stikerin`, m)
    }

    if (/^.*instagram.com\//i.test(m.text)) {
        igdl(url).then(async res => {
            let igdl = JSON.stringify(res)
            let json = JSON.parse(igdl)
            await m.reply(wait)
            for (let { downloadUrl, type } of json) {
                this.sendFile(m.chat, downloadUrl, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), wm, m, 0, { thumbnail: await (await fetch(downloadUrl)).buffer() })
            }
        }).catch(_ => _)
    }

    if (/^.*(pinterest.com\/pin|pin.it)/i.test(m.text)) {
        pin(url).then(async res => {
            let pin = JSON.stringify(res)
            let json = JSON.parse(pin)
            if (!json.status) return m.reply(eror)
            await m.reply(wait)
            m.reply(util.format(json))
            await this.sendFile(m.chat, json.data.url, '', wm, m)
        }).catch(_ => _)
    }

    if (/^.*twitter.com\//i.test(m.text)) {
        twitter(url).then(async res => {
            let twit = JSON.stringify(res)
            let json = JSON.parse(twit)
            let pesan = json.data.map((v) => `Link: ${v.url}`).join('\n------------\n')
            await m.reply(wait)
            for (let { url } of json.data) {
                this.sendFile(m.chat, url, 'ig' + (/mp4/i.test(url) ? '.mp4' : '.jpg'), wm, m)
            }
        }).catch(_ => _)
    }

    if (/^https?:\/\/.*youtu/i.test(m.text)) {
        let results = await yts(url)
        let vid = results.all.find(video => video.seconds < 3600)
        if (!vid) return m.reply('Video/Audio Tidak ditemukan')
        let yt = false
        let usedServer = servers[0]
        for (let i in servers) {
            let server = servers[i]
            try {
                yt = await yta(vid.url, server)
                yt2 = await ytv(vid.url, server)
                usedServer = server
                break
            } catch (e) {
                m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
            }
        }
        if (yt === false) return m.reply(eror)
        if (yt2 === false) return m.reply(eror)
        let { dl_link, thumb, title, filesize, filesizeF } = yt
        await this.sBL(m.chat, `
Judul: ${title}
Ukuran File Audio: ${filesizeF}
Ukuran File Video: ${yt2.filesizeF}
Server y2mate: ${usedServer}
`.trim(), wm, await (await fetch(thumb)).buffer(), [['Audio', `.yta ${vid.url}`], ['Video', `.yt ${vid.url}`]])
    }

}

handler.limit = true
module.exports = handler