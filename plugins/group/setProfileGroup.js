import Jimp from 'jimp'
let handler = async (m, { conn, usedPrefix, command }) => {
    const changepp = async (buffer, to) => {
        const jimp_1 = await Jimp.read(buffer);
        const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(700, Jimp.AUTO) : jimp_1.resize(Jimp.AUTO, 650)
        const jimp_2 = await Jimp.read(await resz.getBufferAsync(Jimp.MIME_JPEG));
        var res = await resz.getBufferAsync(Jimp.MIME_JPEG)
        await conn.query({
            tag: 'iq',
            attrs: {
                to: to,
                type: 'set',
                xmlns: 'w:profile:picture'
            },
            content: [{
                tag: 'picture',
                attrs: {
                    type: 'image'
                },
                content: res
            }]
        })
    }
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak didukung`
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw 'Gambar tidak ditemukan'
        let anu = async () => {
        await changepp(img, m.chat)
    }
    return anu()
    } else throw `kirim/balas gambar dengan perintah *${usedPrefix + command}*`
}
handler.help = ['setpp']
handler.tags = ['group']

handler.command = /^setpp$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler