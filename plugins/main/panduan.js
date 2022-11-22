let handler = async (m, {
    conn,
    args
}) => {
    if (args[0] == 'how') throw `*"Cara menggunakan bot dan prefix"*\n\nCara menggunakan bot adalah dengan mengetikkan command bot. List command bot ada pada menu bot. jangan lupa, untuk mengakses command harus menggunakan prefix.\nPrefix bot adalah all prefix.\nContoh penggunaan prefix dan command yang benar: *.menu*`
    if (args[0] == 'join') throw `Cara Memasukkan Bot Ke Grup.\nPake Command #join <link>\nContoh:\n#join https://chat.whatsapp.com/L508viIjjPwHpYEqgTxqj6`
    if (args[0] == 'owner') throw `*"Penjelasan OWNER/PEMILIK BOT"*\n\nOwner atau Pemilik Bot adalah orang yang membuat bot. OWNER BUKANLAH BOT. chat owner apabila ada kepentingan atau ada yang perlu di tanyakan soal bot whatsapp.`
    if (args[0] == 'langganan') throw `*"Berlangganan"*\n\nLayanan berlangganan Bot adalah dengan menyewa bot dalam jumlah waktu ke dalam group. Untuk list harga/layanan silahkan baca pada *.sewa*`
    if (args[0] == 'bot') throw `*"Apa itu bot whatsapp"*\n\nBot adalah sebuah program komputer yang dijalankan di lingkungan. Bot Whatsapp adalah program komputer yang di-aplikasikan di whatsapp. Bot whatsapp diharapkan dapat membantu beberapa aktifitas maupun sekedar untuk senang senang.`
    if (!args[0]) {
        const sections = [{
            title: `${conn.user.name} ACTION`,
            rows: [{
                    title: 'Panduan Owner',
                    description: "Menampilkan Panduan Owner",
                    rowId: "#how owner"
                },
                {
                    title: 'Panduan How',
                    description: "Menampilkan Panduan How",
                    rowId: ".how how"
                },
                {
                    title: 'Panduan Berlangganan',
                    description: "Menampilkan Panduan Berlangganan",
                    rowId: ".how langganan"
                },
                {
                    title: 'Panduan Add',
                    description: "Menampilkan Panduan Cara Menambahkan bot",
                    rowId: ".how join"
                },
                {
                    title: 'Panduan Bot',
                    description: "Menampilkan informasi bot itu apa",
                    rowId: ".how bot"
                }
            ]
        }]
        await conn.sendMessage(m.chat, {
            text: `Selamat datang di Menu panduan Bot.\nDi menu ini kamu bisa mendapatkan panduan soal bot whatsapp.\n\nSilahkan pilih di bawah ini`,
            footer: set.wm,
            title: "",
            buttonText: `${conn.user.name} Multi Device`,
            sections
        }, {
            quoted: m
        })
    }

}
handler.tags = ['main']
handler.command = /^(panduan|how)$/i
handler.help = ['panduan']

export default handler