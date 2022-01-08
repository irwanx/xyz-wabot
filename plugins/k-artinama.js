let handler = async(m, { conn, text }) => {
 
    if (!text) return conn.reply(m.chat, 'Silahkan masukan nama yang akan diartikan', m)
 
  await m.reply(wait)
	axios.get(`https://mnazria.herokuapp.com/api/arti?nama=${text}`).then ((res) => {
	 	let hasil = `Arti Namamu Adalah\n\n${res.data.result}`
 
    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['artinama'].map(v => v + ' [nama]')
handler.tags = ['kerang']
handler.command = ['artinama']

module.exports = handler
