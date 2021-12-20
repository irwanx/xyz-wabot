function handler(m) {
    m.reply('Konfirmasi ke owner untuk informasi lebih lanjut.')
    //this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
    this.sendContact(m.chat, '628882611841@s.whatsapp.net', 'Irwan', m)
  }
  handler.command = /^(masuk)$/i
  
  module.exports = handler
  