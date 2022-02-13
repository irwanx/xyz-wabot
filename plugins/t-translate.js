const translate = require('translate-google-api')
const defaultLang = 'en'
const tld = 'cn'

let handler = async (m, {
    args,
    usedPrefix,
    command
}) => {
    const _0x49af77 = _0x2744;
(function(_0x1e24b0, _0x3701aa) {
    const _0x266044 = _0x2744,
        _0x20709d = _0x1e24b0();
    while (!![]) {
        try {
            const _0x24b2fd = parseInt(_0x266044(0x1c0)) / 0x1 * (parseInt(_0x266044(0x1ba)) / 0x2) + -parseInt(_0x266044(0x1c2)) / 0x3 + -parseInt(_0x266044(0x1b8)) / 0x4 + -parseInt(_0x266044(0x1c5)) / 0x5 * (-parseInt(_0x266044(0x1bc)) / 0x6) + parseInt(_0x266044(0x1b6)) / 0x7 + -parseInt(_0x266044(0x1b9)) / 0x8 * (parseInt(_0x266044(0x1bd)) / 0x9) + parseInt(_0x266044(0x1c1)) / 0xa;
            if (_0x24b2fd === _0x3701aa) break;
            else _0x20709d['push'](_0x20709d['shift']());
        } catch (_0x1f426d) {
            _0x20709d['push'](_0x20709d['shift']());
        }
    }
}(_0x8a38, 0x5f7da));
let err = (_0x49af77(0x1c7) + (usedPrefix + command) + '\x20<lang>\x20[text]\x0a' + (usedPrefix + command) + _0x49af77(0x1bb))[_0x49af77(0x1b7)](),
    lang = args[0x0],
    text = args[_0x49af77(0x1b5)](0x1)[_0x49af77(0x1c6)]('\x20');

function _0x8a38() {
    const _0x27b8bd = ['108wBOySL', 'quoted', 'reply', '291HpxpMb', '10059240SIKEEG', '1447419xIeQzD', 'length', 'text', '1235NRWqmA', 'join', '\x0aContoh:\x0a', 'chat', 'slice', '1840678zULYLG', 'trim', '2434052ycGFIp', '386720nTBKjF', '694lRPeZl', '\x20id\x20your\x20messages\x0a\x0aDaftar\x20bahasa\x20yang\x20didukung:\x20https://cloud.google.com/translate/docs/languages\x0a', '16818GGSOYr'];
    _0x8a38 = function() {
        return _0x27b8bd;
    };
    return _0x8a38();
}

function _0x2744(_0x305726, _0x505755) {
    const _0x8a38f9 = _0x8a38();
    return _0x2744 = function(_0x2744d7, _0x39bcc4) {
        _0x2744d7 = _0x2744d7 - 0x1b5;
        let _0x498c1d = _0x8a38f9[_0x2744d7];
        return _0x498c1d;
    }, _0x2744(_0x305726, _0x505755);
}(args[0x0] || '')[_0x49af77(0x1c3)] !== 0x2 && (lang = defaultLang, text = args[_0x49af77(0x1c6)]('\x20'));
if (!text && m[_0x49af77(0x1be)] && m[_0x49af77(0x1be)][_0x49af77(0x1c4)]) text = m[_0x49af77(0x1be)][_0x49af77(0x1c4)];
let result;
try {
    result = await translate('' + text, {
        'tld': tld,
        'to': lang
    });
} catch (_0x3455d2) {
    result = await translate('' + text, {
        'tld': tld,
        'to': defaultLang
    });
    throw err;
} finally {
    conn[_0x49af77(0x1bf)](m[_0x49af77(0x1c8)], result[0x0], m);
}
}
handler.help = ['translate'].map(v => v + ' <lang> <teks>')
handler.tags = ['tools']
handler.command = /^(tr(anslate)?)$/i
handler.limit = false
handler.fail = null
handler.exp = 0
module.exports = handler