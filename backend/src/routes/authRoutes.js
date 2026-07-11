const express = require("express");
const router = express.Router()

const login = require("../controllers/authController");
const validate = require("../middlewares/validateMiddleware");

const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 10,
  message: 'Terlalu banyak percobaan login, coba lagi nanti',
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
  keyGenerator: (req) => {
    const username = req.body?.username || req.headers['x-username'] || 'unknown';
    return `${req.ip}:${String(username).toLowerCase()}`;
  },
});

router.post('/login', validate(['username', 'password']), loginLimiter, login.loginUser);

module.exports = router;
