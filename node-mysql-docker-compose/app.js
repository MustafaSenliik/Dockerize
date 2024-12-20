const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3003;

// Middleware
app.use(express.json());

// MySQL Connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'nodeapp',
});

connection.connect((err) => {
  if (err) {
    console.error('Veritabanına bağlanırken hata oluştu:', err);
    process.exit(1); // Kritik hata, uygulamayı durdur
  }
  console.log('Veritabanına başarıyla bağlanıldı.');
});

// API Endpoints
app.get('/users', (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).send('Eksik bilgi: name ve email gereklidir.');
    }
    connection.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).send('Kullanıcı eklendi.');
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
