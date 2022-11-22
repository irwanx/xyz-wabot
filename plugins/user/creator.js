async function handler(m, { conn }) {
	const data = global.set.owner.filter(([id, isCreator]) => id && isCreator)
	const a = await conn.sendCAR(m.chat, data.map(([id, name, _, ...other]) => [id, name, ...other]), m)
	await conn.reply(m.chat, `Hai @${await m.sender.split("@")[0]}\nThis is the number of the owner of the bot, not the bot.\nNo chat is not important.`, a, {
		mentions: [m.sender]
	})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = /^(owner|creator)$/i

export default handler