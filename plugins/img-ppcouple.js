let { fetchRandomJson } = require('../lib/randomm')
let fetch = require('node-fetch')

let handler = async (m, { conn }) => {

fetchRandomJson('https://raw.githubusercontent.com/irwanx/db/master/random/couple.js').then(v => {
sock.sendMessage(
    m.chat, 
    { 
image: {url : v.male},
fileLength: 999999999, caption: "Cowonya Make yang ini"
    }, {quoted: m}
)
 sock.sendMessage(
    m.chat, 
    { 
image: {url : v.female},
fileLength: 999999999, caption: "Ceweny Make yang ini"
    }, {quoted: m}
)
console.log(v)
})
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['image']
handler.command = /^(ppcp|ppcouple)$/i

module.exports = handler
