let handler = async (m, {
  conn,
  text
}) => {
  const _0x1c9623 = _0x59db;
(function(_0x31c86c, _0x546f8f) {
    const _0x4f1783 = _0x59db,
        _0x16ceb3 = _0x31c86c();
    while (!![]) {
        try {
            const _0x457bb5 = parseInt(_0x4f1783(0x1f9)) / 0x1 + -parseInt(_0x4f1783(0x1ff)) / 0x2 * (parseInt(_0x4f1783(0x1f1)) / 0x3) + -parseInt(_0x4f1783(0x1fb)) / 0x4 + -parseInt(_0x4f1783(0x1fc)) / 0x5 + parseInt(_0x4f1783(0x1fa)) / 0x6 + -parseInt(_0x4f1783(0x1f4)) / 0x7 * (-parseInt(_0x4f1783(0x1ef)) / 0x8) + parseInt(_0x4f1783(0x1fe)) / 0x9 * (parseInt(_0x4f1783(0x1ee)) / 0xa);
            if (_0x457bb5 === _0x546f8f) break;
            else _0x16ceb3['push'](_0x16ceb3['shift']());
        } catch (_0x3a61e0) {
            _0x16ceb3['push'](_0x16ceb3['shift']());
        }
    }
}(_0x3c8c, 0xc1dec));
let id = m[_0x1c9623(0x1f0)];
conn[_0x1c9623(0x200)] = conn[_0x1c9623(0x200)] ? conn['math'] : {};
id in conn[_0x1c9623(0x200)] && (clearTimeout(conn['math'][id][0x3]), delete conn[_0x1c9623(0x200)][id], m['reply'](_0x1c9623(0x1f2)));
let val = text[_0x1c9623(0x1f3)](/[^0-9\-\/+*×÷πEe()piPI/]/g, '')['replace'](/×/g, '*')[_0x1c9623(0x1f3)](/÷/g, '/')[_0x1c9623(0x1f3)](/π|pi/gi, _0x1c9623(0x1f6))[_0x1c9623(0x1f3)](/e/gi, _0x1c9623(0x1f5))[_0x1c9623(0x1f3)](/\/+/g, '/')['replace'](/\++/g, '+')[_0x1c9623(0x1f3)](/-+/g, '-'),
    format = val['replace'](/Math\.PI/g, 'π')[_0x1c9623(0x1f3)](/Math\.E/g, 'e')['replace'](/\//g, '÷')[_0x1c9623(0x1f3)](/\*×/g, '×');
try {
    console[_0x1c9623(0x1fd)](val);
    let result = new Function(_0x1c9623(0x1f7) + val)();
    if (!result) throw result;
    conn['reply'](m[_0x1c9623(0x1f0)], '*' + format + '*\x20=\x20_' + result + '_', m);
} catch (_0x3bad0a) {
    if (_0x3bad0a == undefined) throw 'Isinya?';
    throw _0x1c9623(0x1f8);
}

function _0x59db(_0x15ee81, _0x3f0ee1) {
    const _0x3c8c99 = _0x3c8c();
    return _0x59db = function(_0x59db79, _0x4cd423) {
        _0x59db79 = _0x59db79 - 0x1ee;
        let _0x327a70 = _0x3c8c99[_0x59db79];
        return _0x327a70;
    }, _0x59db(_0x15ee81, _0x3f0ee1);
}

function _0x3c8c() {
    const _0x14b3b6 = ['1830ATykjL', '64080JpKiyY', 'chat', '369933FVlVqd', 'Hmmm...ngecheat?', 'replace', '686yslQWS', 'Math.E', 'Math.PI', 'return\x20', 'Format\x20salah,\x20hanya\x200-9\x20dan\x20Simbol\x20-,\x20+,\x20*,\x20/,\x20×,\x20÷,\x20π,\x20e,\x20(,\x20)\x20yang\x20disupport', '958560wmEvhU', '3563796PzDGWw', '3251528pRhUXf', '2187450PZUaac', 'log', '9846TvgvVG', '8lApMXU', 'math'];
    _0x3c8c = function() {
        return _0x14b3b6;
    };
    return _0x3c8c();
}
}
handler.help = ['kalkulator <soal>']
handler.tags = ['tools']
handler.command = /^(calc(ulat(e|or))?|kalk(ulator)?)$/i
handler.exp = 5
handler.register = false
module.exports = handler