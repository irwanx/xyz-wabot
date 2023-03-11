import moment from 'moment-timezone'
import db from '../../lib/database.js'
let handler = async (m, {
  conn, args
}) => {
  let name = db.data.users[m.sender].name
  if (!args[0]) {
    let desk = `Apa saja keuntungannya?\n〲 ✅Dapatkan fitur khusus premium.\n〲 ✅Masukkan bot ke group anda.\n〲 ✅Limit UNLIMITED (Tidak Terbatas)\n\nAyo gabung bersama mereka yang sudah Premium dan mendapatkan banyak keuntungan dengan akses semua fitur bot.\n\nPembayaran:\nSaweria: ${set.swr} (+5.000)\nDana: 08882611841\nOVO: 08882611841\n\nSyarat dan Ketentuan\n1. Bot akan keluar jika sudah waktu nya keluar\n2. Jangan di kick\n3. Mematuhi syarat dan ketentuan bot pada #rules\n4. Di larang mengirimkan sesuatu yang mengganggu, contoh: virtex, berbagai macam bug.\n5. Di larang spam dalam penggunaan`
    const sections = [{
      title: "Informasi Bot",
      rows: [{
        title: "Pemilik Bot",
        rowId: "#owner",
        description: "Nomor Pemilik Bot (owner)"
      },
        {
          title: "Syarat Ketentuan Dan Peraturan",
          rowId: "#snk",
          description: "Harap membaca Peraturan demi kenyamanan kita bersama"
        },
        {
          title: "Group Official DOBDABOT",
          rowId: "#sewa xyzwabot",
          description: "Gabung untuk mendapatkan informasi mengenai bot atau sekedar meramaikan"
        }]
    },
      {
        title: "─────「 1 」",
        rows: [{
          title: "Free Trial 12 Jam",
          rowId: "#join",
          description: "Masukkan bot secara gratis selama  12 Jam"
        }]
      },
      {
        title: "─────「 2 」",
        rows: [{
          title: "Berlangganan 1 Bulan. Rp30.000",
          rowId: "#sewa 1",
          description: "Masukkan bot secara berlangganan 1 bulan ke dalam group"
        }]
      },
      {
        title: "─────「 3 」",
        rows: [{
          title: "Berlangganan 2 Bulan. Rp55.000",
          rowId: "#sewa 2",
          description: "Masukkan bot secara berlangganan 2 bulan ke dalam group"
        }]
      },
      {
        title: "─────「 Premium 」",
        rows: [{
          title: "Menjadi users premium! Rp30.000",
          rowId: "#sewa prem",
          description: "Menggunakan fitur tanpa limitasi, membuka fitur premium, bonus limit dan exp tambahan!"
        }]
      },
      {
        title: "─────「 Sewa Permanent 」",
        rows: [{
          title: "Permanent! Rp120.000",
          rowId: "#sewa perm",
          description: "Masukkan bot ke dalam group tanpa batasann waktu!"
        }]
      }]
    const lm = {
      text: desk,
      footer: "Silahkan tekan tombol \"Click Here\" untuk melihat daftar harga Bot.\n\nJika ada pertanyaan atau semacamnya silahkan hubungi owner.",
      title: `${ucapan()}, ${name}`.trim(),
      buttonText: "Click Here",
      sections
    }
    await conn.sendMessage(m.chat, lm, {
      quoted: m
    })
  } else if (args[0] == 1) {
    await conn.reply(m.chat, `Memasukkan bot ke group selama 1 bulan *Rp30.000*\n\nPembayaran dapat melalui:\nSaweria: ${set.swr} (+5.000)\nDana: 0888-2611-841\nOVO: 0888-2611-841\n\nSilahkan hubungi owner untuk mengkonfirmasi atau bertanya.`, m)
  } else if (args[0] == 2) {
    await conn.reply(m.chat, `Memasukkan bot ke group selama 2 bulan *Rp55.000*\n\nPembayaran dapat melalui:\nSaweria: ${set.swr} (+5.000)\nDana: 0888-2611-841\nOVO: 0888-2611-841\n\nSilahkan hubungi owner untuk mengkonfirmasi atau bertanya.`, m)
  } else if (args[0] === 'prem') {
    await conn.reply(m.chat, `Menjadi user premium selama 3 bulan *Rp30.000*\n\nPembayaran dapat melalui:\nSaweria: ${set.swr} (+5.000)\nDana: 0888-2611-841\nOVO: 0888-2611-841\n\nSilahkan hubungi owner untuk mengkonfirmasi atau bertanya.`, m)
  } else if (args[0] === 'perm') {
    await conn.reply(m.chat, `Memasukkan bot TANPA BATASAN WAKTU! *Rp120.000*\n\nPembayaran dapat melalui:\nSaweria: ${set.swr} (+5.000)\nDana: 0888-2611-841\nOVO: 0888-2611-841\n\nSilahkan hubungi owner untuk mengkonfirmasi atau bertanya.`, m)
  } else if (args[0] === 'xyzwabot') {
    await conn.reply(m.chat, 'Buka tautan ini untuk bergabung ke grup WhatsApp saya: https://chat.whatsapp.com/L508viIjjPwHpYEqgTxqj6', m)
  }
}
handler.command = /^(sewa)$/
handler.help = ['sewa']
handler.tags = ['main', '', 'info']

export default handler

  function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    var res = "Selamat Dinihari"
    if (time >= 4) {
      var res = "Selamat Pagi"
    }
    if (time > 10) {
      var res = "Selamat Siang"
    }
    if (time >= 15) {
      var res = "Selamat Sore"
    }
    if (time >= 18) {
      var res = "Selamat malam"
    }
    return res
  }