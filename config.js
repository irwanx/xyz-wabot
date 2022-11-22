import { watchFile, unwatchFile, fchmod } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
global.set = {
	desc: 'xyz-wabot',
	browser: 'Firefox',
	copy: 'https://www.whatsapp.com/otp/copy/',
	ig: 'https://instagram.com/irwan_x_yans',
	swr: `https://saweria.co/dobdabot`,
	stts: 'status@broadcast',
	waid: '0@s.whatsapp.net',
	pack: 'ig: ',
	auth: '@irwan_x_yans',
	wm: '© xyz-wabot',
	numb: 400000271,
	owner: [
		,
		['628882611841', 'Irwanx', true, 'Owner', 'irwan080304@gmail.com', 'https://github.com/irwanx', 'Founder Bot/Owner 1st'],
		['6285877109523', 'Amelia Cans', true, 'Owner', 'amelia@dikode-team.com', 'https://amelia.my.id', 'Owner 2nd']
	],
	mods: JSON.parse(fs.readFileSync('./src/mods.json')),
	prems: [],
	readMore: String.fromCharCode(8206).repeat(4001),
	multiplier: 69,
	img: 'https://telegra.ph/file/aa4965eb0caeb011cc7b0.jpg',
	fla: 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
	wait: '\n「 ⏱️ 」 *Tunggu Sedang di Proses...*\n',
	eror: 'Nice Error',
	done: '\n*Dah Kelar ><...*\n',
	APIs: {
		nrtm: 'https://nurutomo.herokuapp.com',
		bg: 'http://bochil.ddns.net',
		xteam: 'https://api.xteam.xyz',
		zahir: 'https://zahirr-web.herokuapp.com',
		zeks: 'https://api.zeks.xyz',
		pencarikode: 'https://pencarikode.xyz',
		LeysCoder: 'https://leyscoders-api.herokuapp.com',
		neoxr: 'https://neoxr-api.herokuapp.com',
		males: 'https://malesin.xyz'
	},
	APIKeys: {
		'https://neoxr-api.herokuapp.com': 'yntkts',
		'https://api.xteam.xyz': 'd90a9e986e18778b',
		'https://zahirr-web.herokuapp.com': 'zahirgans',
		'https://api.zeks.xyz': 'apivinz',
		'https://pencarikode.xyz': 'pais',
		'https://leyscoders-api.herokuapp.com': 'dappakntlll'
	}
}
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
	unwatchFile(file)
	console.log(chalk.redBright("Update 'config.js'"))
	import(`${file}?update=${Date.now()}`)
})