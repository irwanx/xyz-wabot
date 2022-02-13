let handler = async (m, {
    conn,
    usedPrefix,
    command
}) => {
    let res = await fetch('https://raw.githubusercontent.com/irwanx/db/master/kpop/blekping.txt')
    let txt = await res.text()
    let arr = txt.split('\n')
    let cita = arr[Math.floor(Math.random() * arr.length)]
    //conn.sendFile(m.chat, cita, 'tobat.jpg', 'Nihh', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }}) 
    await conn.sendMedia(m.chat, cita, m, {
        caption: "nih banh"
    })
}
handler.tags = ['anu']
handler.help = ['blackpink']
handler.command = /^(blackpink|bp)$/i
handler.limit = true

module.exports = handler