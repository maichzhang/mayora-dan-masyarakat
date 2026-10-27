# Mayora dan Masyarakat

Weblog akademik untuk tugas Teknik Public Relation. Website statis tanpa instalasi dependensi atau proses build.

## Deploy ke Vercel

1. Unggah isi folder ini ke repository GitHub milikmu.
2. Di Vercel, pilih Add New Project dan impor repository tersebut.
3. Framework Preset: Other.
4. Root Directory: folder yang berisi index.html. Jika seluruh folder mayora-weblog diunggah ke dalam repository lain, pilih mayora-weblog.
5. Build Command: kosongkan (aktifkan Override jika diperlukan).
6. Output Directory: `.` (folder proyek itu sendiri).
7. Deploy. Gunakan URL yang diberikan Vercel untuk pengumpulan tugas.

Alternatif: jalankan Vercel CLI dari folder ini jika sudah tersedia dan terhubung ke akunmu.

## Pratinjau lokal

Jalankan `npm run dev` lalu buka http://127.0.0.1:4173. Halaman utama juga dapat dibuka langsung melalui index.html.

## Isi

- index.html: Beranda, Profil Perusahaan, Berita, dan Galeri.
- rancangan.html: tabel rancangan yang dapat dicetak atau disimpan sebagai PDF dari browser.
- assets: dua foto kegiatan, brosur asli PDF, gambar brosur, favicon.
- style.css dan script.js: tampilan responsif, navigasi ponsel, pembesaran galeri.

## Sumber

Profil: Laporan Tahunan Mayora 2025 dan halaman visi misi resmi perusahaan. Berita serta kedua foto: https://seputarbanten.id/pt-mayora-indah-region-jatake-gelar-program-csr-di-pasir-jaya/ . Berita diringkas dan dikembangkan dari Tugas 1. Brosur adalah karya Tugas 2 yang diberikan pengguna. Kredit dan tautan sumber ditampilkan pada website. Foto pihak ketiga tetap menjadi milik pemegang hak masing-masing.

Tabel rancangan mengikuti implementasi website statis ini, dengan hosting Vercel. Tautan publik belum tersedia sebelum pengguna melakukan deployment.
