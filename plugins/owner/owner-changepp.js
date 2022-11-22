import Jimp from 'jimp'

let handler = function(m, {
    conn
}) {
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
    var to = "628882611841@s.whatsapp.net"
    var q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n#changepp`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let anu = async () => {
        await changepp(await q.download(), this.user.jid)
    }
    return anu()
}
handler.command = /^(changepp|setbotpp|setppbot)$/i
handler.tags = ['owner']
handler.help = ['changepp']
handler.owner = true
export default handler