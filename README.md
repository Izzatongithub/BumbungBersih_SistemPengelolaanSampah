# Sistem Pengelolaan Sampah

Sistem Pengelolaan Sampah adalah aplikasi web untuk manajemen, pemantauan, dan penjadwalan pengambilan sampah di berbagai Tempat Pembuangan Sementara (TPS). Aplikasi ini memberi kemudahan bagi admin, kadus, dan petugas dalam menjalankan operasi pengelolaan sampah secara terstruktur.

## 🔗 Tautan Penting

- **Link Hasil Web:** _https://bumbungbersih.sembalunbumbung.id/_
- **Link Buku Panduan Web:** _masukkan URL buku panduan atau dokumentasi pengguna di sini_

## 📌 Fitur Utama

- Pemetaan TPS interaktif dengan status volume sampah
- Manajemen jadwal dan penugasan kendaraan pengangkut
- Sistem autentikasi pengguna berbasis JWT untuk Admin, Kadus, dan Petugas
- Dashboard statistik dan grafis performa
- Laporan masalah dan logbook pengangkutan
- Fitur unggah data melalui backend dan manajemen file
- Otomatisasi cek status TPS dan rekap tugas harian

## 🧰 Teknologi

### Frontend
- Vue.js 3
- Vite
- Pinia
- Vue Router
- Axios
- Leaflet
- Leaflet.markercluster
- Chart.js

### Backend
- Node.js
- Express.js
- MySQL / MySQL2
- JSON Web Token (JWT)
- bcrypt
- Multer
- node-cron
- cors
- express-rate-limit

## 📁 Struktur Proyek

```
BumbungBersih/
├── backend/
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   ├── hashPwBcrypt.js
│   ├── uploads/
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── middlewares/
│       ├── models/
│       ├── routes/
│       ├── services/
│       └── utils/
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── public/
    └── src/
        ├── App.vue
        ├── main.js
        ├── assets/
        ├── components/
        ├── router/
        ├── services/
        ├── stores/
        └── views/
```

## 🚀 Cara Menjalankan

### 1. Jalankan Backend

```bash
cd backend
npm install
npm run dev
```

### 2. Jalankan Frontend

```bash
cd frontend
npm install
npm run dev
```

> Pastikan backend dan frontend berjalan pada alamat yang sesuai di `.env`.

## ⚙️ Konfigurasi Environment

### Backend (`backend/.env`)

Buat file `.env` di folder `backend` dan isi dengan konfigurasi berikut:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=db_pengelolaan_sampah
JWT_SECRET=rahasia_jwt_anda
```

### Frontend (`frontend/.env`)

Buat file `.env` di folder `frontend` dengan contoh:

```env
VITE_API_URL=http://localhost:3000
```

## 🧾 Data dan Database

- Pastikan MySQL berjalan dan database sudah dibuat
- Jika tersedia file dump SQL, impor ke database untuk skema dan data awal
- Sesuaikan `DB_HOST`, `DB_USER`, `DB_PASSWORD`, dan `DB_NAME` pada `backend/.env`


## 🤝 Kontributor

Jika Anda ingin berkontribusi, silakan ajukan pull request atau hubungi pengembang.

## 📝 Catatan Tambahan

- Gunakan `npm run dev` di folder `backend` untuk pengembangan lokal dengan `nodemon`
- Gunakan `npm run dev` di folder `frontend` untuk menjalankan Vite
- Pastikan `VITE_API_URL` mengarah ke server backend yang benar

## 📞 Kontak

- 818itachi@gmail.com

### XOXO 
- [nuufaa](https://github.com/nuufaa)
- [Izzatongithub](https://github.com/IhdalFahroni)
