import * as bo from '@bochilteam/scraper'
import db from '../../lib/database.js'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = m => m
handler.all = async function(m) {
    if (!m.fromMe) {
        if (m.chat.endsWith('broadcast')) return
        if (db.data.users[m.sender].banned) return
        if (db.data.chats[m.chat].isBanned) return
        var url = m.text.split(/\n| /i)[0]
        /*
         * AUTO DOWNLOAD MEDIA TWITTER
         */
        if (/https?:\/\/(www\.)?twitter\.com\/.*\/status/i.test(m.text)) {
            var res = await bo.twitterdlv2(m.text.match(/https?:\/\/(www\.)?twitter\.com\/.*\/status\/.*/i)[0].split(/\n| /i)[0])
            if (!res) throw eror
            let igs = JSON.stringify(res)
            let json = JSON.parse(igs)
            this.sendMedia(m.chat, json[0].url, m, {
                caption: wm
            })
        }
        /*
         * AUTO DOWNLOAD MEDIA TIKTOK
         */
        if (/https?:\/\/(www\.|v(t|m)\.|t\.)?tiktok\.com/i.test(m.text)) {
            let resi = (await fetch(API('males', '/tiktok', {
                url: m.text.match(/https?:\/\/(www\.|v(t|m)\.|t\.)?tiktok\.com\/.*/i)[0].split(/\n| /i)[0]
            })))
            let resu = await resi.json()
            if (resu.status != 200) throw resu.message;
            if (!resu) throw resu.message;
            m.reply(set.wait)
            await this.sendMedia(m.chat, resu.video, m, {
                caption: `*Judul:* ${resu.title}\n${resu.author ? `*Pembuat Video:* ${resu.author}` : '\n' } \n\nCara simpan digalery:\n1. Download dulu videonya\n2. Buka terus klik titik 3 pojok kanan atas\n3. lalu klik simpan!`
            })
        }
        /*
         * AUTO DOWNLOAD MEDIA INSTAGRAM
         */
        if (/https?:\/\/(www\.)?instagram\.com\/(p|reel|tv)/i.test(m.text)) {
            var urlig = m.text.match(/https?:\/\/(www\.)?instagram\.com\/(p|reel|tv)\/.*/i)[0].split(/\n| /i)[0]
            let anu = await fetch("http://Api.stazyu.my.id/api/downloader?url=" + urlig)
            var {
                result
            } = await anu.json()
            m.reply(set.wait)
            for (const {
                    url
                }
                of result) this.sendMedia(m.chat, url, m, {
                caption: "DONE BOS!"
            })
        }
        /*
         * AUTO DOWNLOAD FROM FACEBOOK
         */
        if (/https?:\/\/(fb\.watch|(www\.|web\.|m\.)?facebook\.com)/i.test(m.text)) {
            let res = await bo.facebookdlv2(m.text.match(/https?:\/\/(fb\.watch|(www\.|web\.|m\.)?facebook\.com)\/.*/i)[0].split(/\n| /i)[0]).then(v => v.result).then(async v => {
                await this.sendMedia(m.chat, v[0].url, m, {
                    caption: wm
                })
            })
        }
         * AUTO DOWNLOAD MEDIA YOUTUBE
         */
        if (/^(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:shorts\/)?(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})$/i.test(m.text)) {
            let vid = (await bo.youtubeSearch(m.text.split(/\n| /i)[0])).video[0]
            let {
                title,
                description,
                thumbnail,
                videoId,
                durationH,
                viewH,
                publishedTime
            } = vid
            const urll = 'https://www.youtube.com/watch?v=' + videoId
            await this.sendButton(m.chat, `📌 *Title:* ${title}\n🔗 *Url:* ${urll}\n🖹 *Description:* ${description}\n⏲️ *Published:* ${publishedTime}\n⌚ *Duration:* ${durationH}\n👁️ *Views:* ${viewH}`.trim(), author, thumbnail, [
                ['Audio 🎧', `#yta ${urll}`],
                ['Video 🎥', `#ytv ${urll}`]
            ], m)
        }
    }
}
export default handler