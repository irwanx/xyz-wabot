let path = require('path')
  let tags = {
    'main': 'Utama',
  }
  const defaultMenu = {
  before: `ุุุุุุุุุุุุุ╭━━•✵ ⃟  ⃟  ⃟✵•━━━━━━━━━━━━━╮ุุุุุุุุุุุุุุุ
┃ Hallo Kak
┃ ${ucapan} Have a Great Day
╰━━━━━━━━━━━━━━━━━━━━╯
%readmore`.trimStart(),
  header: '╭━━━━━━━━━━━━┈ ❋۪۪⸙\n│ --- %category\n╰┬────────────┈ ⳹\n╭┤◦',
  body: '││◦➛ %cmd %islimit %isPremium',
  footer: '│╰────────────┈ ⳹\n╰━━━━━━━━━━━━┈ ❋۪۪⸙\n',
  after: `
${'_%npmdesc_'}
`,
}
  let handler = async (m, { conn, usedPrefix: _p }) => {
    try {
      let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
      let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
        return {
          help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
          tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
          prefix: 'customPrefix' in plugin,
          limit: plugin.limit,
          premium: plugin.premium,
          enabled: !plugin.disabled,
        }
      })
      for (let plugin of help)
        if (plugin && 'tags' in plugin)
          for (let tag of plugin.tags)
            if (!(tag in tags) && tag) tags[tag] = tag
      conn.menu = conn.menu ? conn.menu : {}
      let before = conn.menu.before || defaultMenu.before
      let header = conn.menu.header || defaultMenu.header
      let body = conn.menu.body || defaultMenu.body
      let footer = conn.menu.footer || defaultMenu.footer
      let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
      let _text = [
        before,
        ...Object.keys(tags).map(tag => {
          return header.replace(/%category/g, tags[tag]) + '\n' + [
            ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
              return menu.help.map(help => {
                return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                  .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                  .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                  .trim()
              }).join('\n')
            }),
            footer
          ].join('\n')
        }),
        after
      ].join('\n')
      text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
      let replace = {
        '%': '%',
        p: _p,
        npmname: package.name,
        npmdesc: package.description,
        version: package.version,
        github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      }
      text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
      let pp = await conn.profilePictureUrl(conn.user.jid, 'image').catch(_ => path.join(__dirname, '../src/avatar_contact.png'))
      await conn.sendTBL(m.chat, text.trim(), wm, await(await require('node-fetch')(pp)).buffer(), "Donasi", dns, null, null, `Owner`, `#owner`, `Ping`, `#ping`, `Sewa Bot`, `#sewa`, m)
    } catch (e) {
      conn.reply(m.chat, 'Maaf, menu sedang error', m)
      throw e
    }
  }
  handler.help = ['menu1', 'help1', '?1']
  handler.tags = ['main']
  handler.command = /^(menu1|help1|\?1)$/i
  handler.owner = false
  handler.mods = false
  handler.premium = false
  handler.group = false
  handler.private = false
  
  handler.admin = false
  handler.botAdmin = false
  
  handler.fail = null
  handler.exp = 3
  
  module.exports = handler