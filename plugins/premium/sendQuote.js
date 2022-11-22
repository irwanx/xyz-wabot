let handler = async (m) => {
    if (!m.quoted) throw 'balas pesannya'
    try {
        var q = await m.getQuotedObj()
        var s = await q.getQuotedObj()
    } finally {
        if (s) return s.forward(m.chat)
        else throw await conn.reply(m.chat, 'Pesan tidak mengandung balasan/tidak didukung', m)
    }
}
handler.command = ['q']
handler.tags = ['premium']
handler.help = ['q']
handler.register = false
handler.premium = true

export default handler