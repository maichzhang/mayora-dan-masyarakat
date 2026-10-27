const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.jpg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.pdf':'application/pdf'};
http.createServer((req,res) => {
  let url;
  try { url = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); } catch { res.writeHead(400).end(); return; }
  if (url === '/') url = '/index.html';
  let file = path.resolve(root, '.' + url);
  if (!file.startsWith(root + path.sep)) {res.writeHead(403).end();return;}
  if (!path.extname(file)) file += '.html';
  fs.readFile(file, (error, data) => {
    if (error) {res.writeHead(404).end('Halaman tidak ditemukan'); return;}
    res.writeHead(200, {'Content-Type':types[path.extname(file)] || 'application/octet-stream'}).end(data);
  });
}).listen(4173, '127.0.0.1', () => console.log('Local: http://127.0.0.1:4173'));
