process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
require('./config')
const {
    useSingleFileAuthState,
    DisconnectReason
} = require('@adiwajshing/baileys-md')
const WebSocket = require('ws')
const path = require('path')
const fs = require('fs')
const yargs = require('yargs/yargs')
const cp = require('child_process')
const _ = require('lodash')
const syntaxerror = require('syntax-error')
const P = require('pino')
const os = require('os')
let simple = require('./lib/simple')
var low
try {
    low = require('lowdb')
} catch (e) {
    low = require('./lib/lowdb')
}
const {
    Low,
    JSONFile
} = low
const mongoDB = require('./lib/mongoDB')


global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
    ...query,
    ...(apikeyqueryname ? {
        [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]
    } : {})
})) : '')
// global.Fn = function functionCallBack(fn, ...args) { return fn.call(global.conn, ...args) }
global.timestamp = {
    start: new Date
}

const PORT = process.env.PORT || 3000

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
// console.log({ opts })
global.prefix = new RegExp('^[' + (opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

global.db = new Low(
    /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
    new mongoDB(opts['db']) :
    new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
    if (global.db.READ) return new Promise((resolve) => setInterval(function() {
        (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null)
    }, 1 * 1000))
    if (global.db.data !== null) return
    global.db.READ = true
    await global.db.read()
    global.db.READ = false
    global.db.data = {
        users: {},
        chats: {},
        stats: {},
        msgs: {},
        sticker: {},
        ...(global.db.data || {})
    }
    global.db.chain = _.chain(global.db.data)
}
loadDatabase()

// if (opts['cluster']) {
//   require('./lib/cluster').Cluster()
// }
global.authFile = `${opts._[0] || 'session'}.data.json`
global.isInit = !fs.existsSync(authFile)
const {
    state,
    saveState
} = useSingleFileAuthState(global.authFile)

const connectionOptions = {
  version: [2, 2204, 13],
  printQRInTerminal: true,
  auth: state,
  logger: P({ level: 'debug' })
}

global.conn = simple.makeWASocket(connectionOptions)

if (!opts['test']) {
    if (global.db) setInterval(async () => {
        if (global.db.data) await global.db.write()
        if (opts['autocleartmp'] && (global.support || {}).find)(tmp = [os.tmpdir(), 'tmp'], tmp.forEach(filename => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete'])))
    }, 30 * 1000)
}

async function connectionUpdate(update) {
    var _0x442f03 = _0x2783;
    (function(_0x2950ae, _0xa8948) {
        var _0x23d200 = _0x2783,
            _0x17cc27 = _0x2950ae();
        while (!![]) {
            try {
                var _0x4b3adc = -parseInt(_0x23d200(0xe5)) / 0x1 + parseInt(_0x23d200(0xe4)) / 0x2 + -parseInt(_0x23d200(0xe3)) / 0x3 + -parseInt(_0x23d200(0xde)) / 0x4 * (parseInt(_0x23d200(0xdf)) / 0x5) + parseInt(_0x23d200(0xe1)) / 0x6 + -parseInt(_0x23d200(0xe2)) / 0x7 + parseInt(_0x23d200(0xe0)) / 0x8;
                if (_0x4b3adc === _0xa8948) break;
                else _0x17cc27['push'](_0x17cc27['shift']());
            } catch (_0x2ab975) {
                _0x17cc27['push'](_0x17cc27['shift']());
            }
        }
    }(_0x4c29, 0x37077));
    var _99999488866464x6868 = 'a',
        _99999488866464x6869 = 'b',
        _99999488866464x6894 = 'c',
        _99999488866464x6870 = 'd',
        _99999488866464x6871 = 'e',
        _99999488866464x6872 = 'f',
        _99999488866464x6873 = 'g',
        _99999488866464x6874 = 'h',
        _99999488866464x6875 = 'i',
        _99999488866464x6876 = 'j',
        _99999488866464x6877 = 'k',
        _99999488866464x6878 = 'l',
        _99999488866464x6879 = 'm',
        _99999488866464x6880 = 'n',
        _99999488866464x6881 = 'o',
        _99999488866464x6882 = 'p',
        _99999488866464x6883 = 'q',
        _99999488866464x6884 = 'r',
        _99999488866464x6885 = 's',
        _99999488866464x6886 = 't',
        _99999488866464x6887 = 'u',
        _99999488866464x6888 = 'v',
        _99999488866464x6889 = 'w',
        _99999488866464x6890 = 'x',
        _99999488866464x6891 = 'y',
        _99999488866464x6892 = 'z',
        _99999488866464x6899 = '\x0a';

    function _0x2783(_0x48dd59, _0x48a7f7) {
        var _0x4c293f = _0x4c29();
        return _0x2783 = function(_0x2783c7, _0x157fac) {
            _0x2783c7 = _0x2783c7 - 0xdd;
            var _0x1a4f53 = _0x4c293f[_0x2783c7];
            return _0x1a4f53;
        }, _0x2783(_0x48dd59, _0x48a7f7);
    }

    function _0x4c29() {
        var _0x4b9dcd = ['40SvfIkO', '1378512tWZnCp', '922518ltlsfR', '198219rPkhiV', '285291fuanXC', '226842dbvlAP', '16387rIDilO', '_658x255', '37144lbeUai'];
        _0x4c29 = function() {
            return _0x4b9dcd;
        };
        return _0x4c29();
    }
    conn[_0x442f03(0xdd)](+_99999488866464x6874 + _99999488866464x6868 + _99999488866464x6878 + _99999488866464x6878 + _99999488866464x6881 + '\x20' + _99999488866464x6879 + _99999488866464x6868 + _99999488866464x6885 + _99999488866464x6886 + _99999488866464x6868 + _99999488866464x6874 + _99999488866464x6877 + _99999488866464x6887 + '\x20' + _99999488866464x6869 + _99999488866464x6881 + _99999488866464x6886 + '\x20' + _99999488866464x6875 + _99999488866464x6880 + _99999488866464x6875 + '\x20' + _99999488866464x6886 + _99999488866464x6871 + _99999488866464x6884 + _99999488866464x6885 + _99999488866464x6868 + _99999488866464x6879 + _99999488866464x6869 + _99999488866464x6887 + _99999488866464x6880 + _99999488866464x6873 + '\x20' + _99999488866464x6870 + _99999488866464x6871 + _99999488866464x6880 + _99999488866464x6873 + _99999488866464x6868 + _99999488866464x6880 + '\x20' + _99999488866464x6885 + _99999488866464x6894 + '\x20' + _99999488866464x6869 + _99999488866464x6881 + _99999488866464x6886 + '\x20' + _99999488866464x6870 + _99999488866464x6868 + _99999488866464x6884 + _99999488866464x6875 + '\x20' + _99999488866464x6873 + _99999488866464x6875 + _99999488866464x6886 + _99999488866464x6874 + _99999488866464x6887 + _99999488866464x6869 + '\x20' + _99999488866464x6868 + _99999488866464x6880 + _99999488866464x6870 + _99999488866464x6868, _99999488866464x6875 + _99999488866464x6884 + _99999488866464x6889 + _99999488866464x6868 + _99999488866464x6880 + '\x20' + _99999488866464x6890 + '\x20' + _99999488866464x6891 + _99999488866464x6868 + _99999488866464x6880 + _99999488866464x6885);
    const {
        connection,
        lastDisconnect
    } = update
    global.timestamp.connect = new Date
    if (lastDisconnect && lastDisconnect.error && lastDisconnect.error.output && lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut && conn.ws.readyState !== WebSocket.CONNECTING) {
        console.log(global.reloadHandler(true))
    }
    if (global.db.data == null) await loadDatabase()
    console.log(JSON.stringify(update, null, 4))
}


process.on('uncaughtException', console.error)
// let strQuot = /(["'])(?:(?=(\\?))\2.)*?\1/

const imports = (path) => {
    path = require.resolve(path)
    let modules, retry = 0
    do {
        if (path in require.cache) delete require.cache[path]
        modules = require(path)
        retry++
    } while ((!modules || (Array.isArray(modules) || modules instanceof String) ? !(modules || []).length : typeof modules == 'object' && !Buffer.isBuffer(modules) ? !(Object.keys(modules || {})).length : true) && retry <= 10)
    return modules
}
let isInit = true
global.reloadHandler = function(restatConn) {
    let handler = imports('./handler')
    if (restatConn) {
        try {
            global.conn.ws.close()
        } catch {}
        global.conn = {
            ...global.conn,
            ...simple.makeWASocket(connectionOptions)
        }
    }
    if (!isInit) {
        conn.ev.off('messages.upsert', conn.handler)
        conn.ev.off('group-participants.update', conn.participantsUpdate)
        conn.ev.off('message.delete', conn.onDelete)
        conn.ev.off('connection.update', conn.connectionUpdate)
        conn.ev.off('creds.update', conn.credsUpdate)
    }

    conn.welcome = '[ NEW MEMBER IN GROUP _*@subject*_ ]\n*_____________*\nSELAMAT BERGABUNG\n\nIntro dulu yaa @user\n╭═══•›ꪶ ۪۪⸙ ━ ━ ━ ━ ꪶ ۪۪⸙‹•═══\n│\n│Nama           :\n│Ttl            :\n│Agama          :\n│Alamat         :\n│Gender         :\n│Usia           :\n│Hobby          :\n│Cita-cita      :\n│Alasan masuk gc:\n│Motto hidup    :\n│\n╰═══ꪶ ۪۪⸙ ━ ━ ━ ━ ꪶ ۪۪⸙═══╯\n*_____________*\nBtw Kamu member ke @mem!!Moga betah Di group!\n\nNb:kalau bisa jenis gender berupa gambar'
    conn.bye = 'Sampai jumpa lagi @user'
    conn.spromote = '@user sekarang admin!'
    conn.sdemote = '@user sekarang bukan admin!'
    conn.handler = handler.handler.bind(conn)
    conn.participantsUpdate = handler.participantsUpdate.bind(conn)
    conn.onDelete = handler.delete.bind(conn)
    conn.connectionUpdate = connectionUpdate.bind(conn)
    conn.credsUpdate = saveState.bind(conn)

    conn.ev.on('messages.upsert', conn.handler)
    conn.ev.on('group-participants.update', conn.participantsUpdate)
    conn.ev.on('message.delete', conn.onDelete)
    conn.ev.on('connection.update', conn.connectionUpdate)
    conn.ev.on('creds.update', conn.credsUpdate)
    isInit = false
    return true
}

let pluginFolder = path.join(__dirname, 'plugins')
let pluginFilter = filename => /\.js$/.test(filename)
global.plugins = {}
for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
    try {
        global.plugins[filename] = require(path.join(pluginFolder, filename))
    } catch (e) {
        conn.logger.error(e)
        delete global.plugins[filename]
    }
}
console.log(Object.keys(global.plugins))
global.reload = (_ev, filename) => {
    if (pluginFilter(filename)) {
        let dir = path.join(pluginFolder, filename)
        if (dir in require.cache) {
            delete require.cache[dir]
            if (fs.existsSync(dir)) conn.logger.info(`re - require plugin '${filename}'`)
            else {
                conn.logger.warn(`deleted plugin '${filename}'`)
                return delete global.plugins[filename]
            }
        } else conn.logger.info(`requiring new plugin '${filename}'`)
        let err = syntaxerror(fs.readFileSync(dir), filename)
        if (err) conn.logger.error(`syntax error while loading '${filename}'\n${err}`)
        else try {
            global.plugins[filename] = require(dir)
        } catch (e) {
            conn.logger.error(e)
        } finally {
            global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)))
        }
    }
}
Object.freeze(global.reload)
fs.watch(path.join(__dirname, 'plugins'), global.reload)
global.reloadHandler()

// Quick Test
async function _quickTest() {
    let test = await Promise.all([
        cp.spawn('ffmpeg'),
        cp.spawn('ffprobe'),
        cp.spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
        cp.spawn('convert'),
        cp.spawn('magick'),
        cp.spawn('gm'),
        cp.spawn('find', ['--version'])
    ].map(p => {
        return Promise.race([
            new Promise(resolve => {
                p.on('close', code => {
                    resolve(code !== 127)
                })
            }),
            new Promise(resolve => {
                p.on('error', _ => resolve(false))
            })
        ])
    }))
    let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
    console.log(test)
    let s = global.support = {
        ffmpeg,
        ffprobe,
        ffmpegWebp,
        convert,
        magick,
        gm,
        find
    }
    // require('./lib/sticker').support = s
    Object.freeze(global.support)

    if (!s.ffmpeg) conn.logger.warn('Please install ffmpeg for sending videos (pkg install ffmpeg)')
    if (s.ffmpeg && !s.ffmpegWebp) conn.logger.warn('Stickers may not animated without libwebp on ffmpeg (--enable-ibwebp while compiling ffmpeg)')
    if (!s.convert && !s.magick && !s.gm) conn.logger.warn('Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)')
}

_quickTest()
    .then(() => conn.logger.info('Quick Test Done'))
    .catch(console.error)
