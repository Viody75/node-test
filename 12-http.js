// objek http
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Ini Halaman Utama..')
    } else if (req.url === '/about') {
        res.end('Ini Halaman Tentang..')
    } else if (req.url === '/download') {
        res.end('Ini Halaman download..')
    } else {
        res.end(`
    <h1> Halaman Tidak Ada!</h1>
    <a href='/'>Kembali</a>
    `)
    }
});

server.listen(8000, 'localhost');