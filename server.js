const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors()); 

const PORT = process.env.PORT || 8080;

// Configuración dinámica usando Variables de Entorno de la pauta
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'secret',
  database: process.env.DB_NAME || 'innovatech_metadata'
});

db.connect((err) => {
  if (err) {
    console.log('Fallo de conexión a la BD, reintentando...');
  } else {
    console.log('Conexión exitosa a la Base de Datos en subred privada.');
  }
});

app.get('/api/datos', (req, res) => {
  res.json({ mensaje: "Conexión Front-Back Exitosa. Datos protegidos." });
});

app.listen(PORT, () => {
  console.log(`Backend escuchando en puerto ${PORT}`);
});