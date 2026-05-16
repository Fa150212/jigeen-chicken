require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.set("trust proxy", 1);

/* =========================
   🔥 CORS CONFIG PRODUCTION READY
========================= */

const allowedOrigins = [
  "http://localhost:3000",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

/* ========================= */

app.use(express.json());
app.use(cookieParser());

/* =========================
   🔥 IMPORTANT POUR RENDER
========================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Serveur lancé sur le port ${PORT}`)
);