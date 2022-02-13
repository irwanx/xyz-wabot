const {
  //default: makeWASocket,
  //useSingleFileAuthState,
  WAMessage,
  proto,
  generateWAMessageFromContent
} = require('@adiwajshing/baileys-md')
let handler = async (m, {
  conn
}) => {
  let kontol = `╭━━•✵ ⃟  ⃟  ⃟✵•
┃
┃ *SEWA BOT : ↷↷*
┃ 
┃ *⸙ ુོ➪ Apa saja keuntungan premium?
┃ *〲 ✅Dapatkan fitur khusus premium.
┃ *〲 ✅Masukkan bot ke group anda.
┃ *〲 ✅Limit UNLIMITED (Tidak Terbatas)
┃ 
┃ Ayo gabung bersama mereka yang sudah Premium dan mendapatkan banyak keuntungan dengan akses semua fitur bot.
┃  © XsvsH
┃ *─★‧ﾟ
╰━━━━━━━━⸙
Pembayaran:
Saweria: https://saweria.co/dobdabot (+5.000)
Dana: 08882611841
OVO: 08882611841
  
「Syarat dan Ketentuan」
1. Bot akan keluar jika sudah waktu nya keluar
2. Jangan di kick
3. Mematuhi syarat dan ketentuan bot pada #rules
4. Di larang mengirimkan sesuatu yang mengganggu, contoh: virtex, berbagai macam bug.
5. Di larang spam dalam penggunaan
  `.trim()
  //conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
  const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
      listMessage: {
          title: `${ucapan()} ${await conn.getName(m.sender)}\nHave A Great Day`,
          description: kontol,
          buttonText: 'Daftar Harga Dan Opsi',
          listType: 1,
          footerText: wm,
          mtype: 'listMessage',
          sections: [{
              title: "Silahkan di pilih",
              rows: [{
                      title: 'Premium',
                      description: "Rp50.000\nDapatkan fitur Premium Permanent.",
                      rowId: "#masuk"
                  },
                  {
                      title: '4 Bulan',
                      description: "Rp40.000\nSewa bot ke dalam grup selama 4 bulan.",
                      rowId: "#masuk"
                  },
                  {
                      title: '3 Bulan',
                      description: "Rp30.000\nSewa bot ke dalam grup selama 3 bulan.",
                      rowId: "#masuk"
                  },
                  {
                      title: '2 Bulan',
                      description: "Rp20.000\nSewa bot ke dalam grup selama 2 bulan.",
                      rowId: "#masuk"
                  },
                  {
                      title: '1 Bulan',
                      description: "Rp10.000\nSewa bot ke dalam grup selama 1 bulan.",
                      rowId: "#masuk"
                  },
                  {
                      title: '2 Minggu',
                      description: "Rp7.000\nSewa bot ke dalam grup selama 2 minggu.",
                      rowId: "#masuk"
                  },
                  {
                      title: '1 Minggu',
                      description: "Rp5.000\nSewa bot ke dalam grup selama 1 minggu.",
                      rowId: ".konfir Saya ignin mendaftarkan 1 minggu"
                  },
                  {
                      title: '12 Jam',
                      description: "Rp.0\nMemasukkan bot ke dalam grup selama 12 Jam(-10 limit)",
                      rowId: ".joinf"
                  },
                  {
                      title: 'Peraturan Bot',
                      description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.",
                      rowId: ".rules"
                  },
                  {
                      title: 'Join?',
                      description: "Cara Memasukkan Bot Ke Grup.",
                      rowId: ".panduanadd"
                  }
              ]
          }]
      }
  }), {
      userJid: m.participant || m.key.remoteJid,
      quoted: m
  });
  return await conn.relayMessage(
      m.key.remoteJid,
      template.message, {
          messageId: template.key.id
      }
  )
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler

function ucapan() {
  const time = (new Date().getUTCHours() + 7) % 24
  res = "Woi. Pagi"
  if (time >= 4) {
      res = "Selamat Pagi"
  }
  if (time >= 12) {
      res = "Selamat Siang"
  }
  if (time >= 15) {
      res = "Selamat Sore"
  }
  if (time >= 19) {
      res = "Selamat Malam"
  }
  return res
}