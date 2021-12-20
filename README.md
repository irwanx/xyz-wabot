<p align="center"> 
  <img src="https://github.com/irwanx.png" height="130"/> 
  </p> 
  <h3 align="center">Made with ❤️ by</h3> 
  <p align="center"> 
  <a href="https://github.com/irwanx/"><img title="Author" src="https://img.shields.io/badge/author-irwanx-blue?style=for-the-badge&logo=github"></a> 
  </p> 
  <p align="center"> 
  <a href="https://github.com/irwanx/followers"><img title="Followers" src="https://img.shields.io/github/followers/irwanx?color=blue&style=flat-square"></a> 
  <a href="https://visitor-badge.glitch.me/badge?page_id=irwanx/xyz-wabot"><img title="Viesitor" src="https://visitor-badge.glitch.me/badge?page_id=irwanx/xyz-wabot"></a> 
  <a href="https://github.com/irwanx/xyz-wabot/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/irwanx/xyz-wabot?color=red&style=flat-square"></a> 
  <a href="https://github.com/irwanx/xyz-wabot/network/members"><img title="Forks" src="https://img.shields.io/github/forks/irwanx/xyz-wabot?color=red&style=flat-square"></a> 
  <a href="https://github.com/irwanx/xyz-wabot/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/irwanx/xyz-wabot?label=watchers&color=blue&style=flat-square"></a> 
  </p>
  <p align="center"> 
  <a href="https://github.com/irwanx/xyz-wabot"><img title="Whatsapp-Bot" src="https://img.shields.io/badge/XyZ Whatsapp Bot-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge"></a> 
    <br> 
  WhatsApp Bot Using @adiwajshing/baileys library!<hr> 
  </p> 
<h1 align="left">xyz-wabot</h1>


[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/irwanx/xyz-wabot)

[![Run on Repl.it](https://repl.it/badge/github/irwanx/xyz-wabot)](https://repl.it/github/irwanx/xyz-wabot)

[![Grup WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://chat.whatsapp.com/LIX42RUhLi15MBXhfvrF6K)

# Info
* Kamu dapat menemukan xyz-wabot Multi-Device [`Disini`](https://github.com/irwanx/xyz-wabot/tree/multi-device)

# xyz-wabot
XyZ666x bot adalah bot whatsapp hasil pe-nggarapan ulang dari ariffb25/stikerinbot yang sudah di edit agar bisa di jalankan di termux.
XyZ666x bot juga dapat di jalankan di RPP/VPS/Windows, Heroku, Replit.

# Termux
```
apt install ffmpeg
apt install imagemagick
apt install nodejs
apt install git
git clone https://github.com/irwanx/xyz-wabot
cd xyz-wabot
npm i
node . (option)
````

# RDP/VPS/Windows
* Unduh & Instal Git [`Klik Disini`](https://git-scm.com/downloads)
* Unduh & Instal NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Unduh & Instal FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)
* Unduh & Instal ImageMagick [`Klik Disini`](https://imagemagick.org/script/download.php)
```
git clone https://github.com/irwanx/xyz-wabot
cd xyz-wabot
npm i
node . (option)
```
# Replit
[![Run on Repl.it](https://repl.it/badge/github/irwanx/xyz-wabot)](https://repl.it/github/irwanx/xyz-wabot)
* Klik button
* Buka console
```
npm i
node . (option)
```
# Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/irwanx/xyz-wabot)

*install buildpack
* heroku/nodejs
* https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
* https://github.com/DuckyTeam/heroku-buildpack-imagemagick.git

# Option

## Arguments `node . [--options] [<session name>]`

#### Contoh: `node . --self --restrict --autoread`

### `--self`

Aktifkan mode self (Mengabaikan yang lain)

### `--prefix <prefixes>`

* `prefixes` dipisahkan oleh masing-masing karakter
Setel awalan

### `--server`

Digunakan untuk [heroku](https://heroku.com/) atau pindai melalui situs web

### `--db <json-server-url>`

Gunakan db eksternal alih-alih db lokal, 
Contoh Server `https://json-server.nurutomo.repl.co/`
Code: `https://repl.it/@Nurutomo/json-server`

`node . --db 'https://json-server.nurutomo.repl.co/'`

Server harus memiliki spesifikasi seperti ini

#### GET

```http
GET /
Accept: application/json
```

#### POST

```http
POST /
Content-Type: application/json

{
 data: {}
}
```

### `--big-qr`

Jika qr unicode kecil tidak mendukung

### `--restrict`

Mengaktifkan plugin terbatas (yang dapat menyebabkan nomor Anda **diblokir** jika digunakan terlalu sering)

* Administrasi Grup `add, kick, promote, demote`

### `--img`

Aktifkan pemeriksa gambar melalui terminal

### `--autoread`

Jika diaktifkan, semua pesan masuk akan ditandai sebagai telah dibaca

### `--nyimak`

Tidak ada bot, cukup cetak pesan yang diterima dan tambahkan pengguna ke database

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```

---------

 [![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo) | [![Ariffb](https://github.com/ariffb25.png?size=100)](https://github.com/ariffb25) | [![IrwanX](https://github.com/irwanx.png?size=100)](https://github.com/irwanx)
----|----|----
[Nurutomo](https://github.com/Nurutomo) | [Ariffb](https://github.com/ariffb25) | [Irwanx](https://github.com/irwanx)
 Penulis / Pencipta | Penulis ulang | Penulis ulang
