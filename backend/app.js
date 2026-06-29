const express = require("express");
const cors = require("cors");

const app = express();

const authRoutes = require("./src/routes/authRoutes");
const laporanRoutes = require("./src/routes/laporanRoutes");
const tpsRoutes = require("./src/routes/tpsRoutes");
const dusunRoutes = require("./src/routes/dusunRoutes");
const jadwalRoutes = require("./src/routes/jadwalRoutes");
const kendaraanRoutes = require("./src/routes/kendaraanRoutes");
const daftarTugasRoutes = require("./src/routes/daftarTugasRoutes");
const petugasRoutes = require("./src/routes/petugasRoutes");
const { startScheduler } = require("./src/services/daftarTugasOtomatisService");
const dashboardRoutes = require("./src/routes/dashboardRoutes");
const jamOperasionalRoutes = require("./src/routes/jamOperasionalRoutes");
const desaSettingsRoutes = require('./src/routes/desaSettingsRoutes')
const kadusRoutes = require("./src/routes/kadusRoutes");

app.use(express.json({ limit: '2mb' }));
// const allowedOrigins = [
//   process.env.NODE_ENV === 'production' 
//     ? process.env.FRONTEND_URL 
//     // : 'http://localhost:5173'
//     : 'https://bumbungbersih.sembalunbumbung.id',
//       'http://localhost:3000',
//       'https://sembalunbumbung.id',
//       'https://www.sembalunbumbung.id',
//       'https://api.sembalunbumbung.id',
// ];

const allowedOrigins = [
  "http://localhost:5173",
  "https://bumbungbersih.sembalunbumbung.id",
  "https://sembalunbumbung.id",
  "https://apibb.sembalunbumbung.id",
];

if (process.env.NODE_ENV === 'production') {
  // Force HTTPS
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
      res.redirect(`https://${req.header('host')}${req.url}`);
    } else {
      next();
    }
  });

  // Security headers
  app.use((req, res, next) => {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
  });
}

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use('/api/auth', authRoutes)
app.use('/api/lapor', laporanRoutes)
app.use('/api/tps', tpsRoutes)
app.use("/uploads", express.static("uploads"))
app.use("/api/dusun", dusunRoutes)
app.use("/api/jadwal", jadwalRoutes)
app.use("/api/kendaraan", kendaraanRoutes)
app.use("/api/daftar-tugas", daftarTugasRoutes);
app.use("/api/petugas", petugasRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/jam-operasional", jamOperasionalRoutes);
app.use("/api/kadus", kadusRoutes);
app.use('/api', desaSettingsRoutes);

if (process.env.NODE_ENV !== 'test') {
  startScheduler();
}

app.get("/test", (req, res) => {
    res.json({ satus: 'oke'})
});

module.exports = app;