const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Merhaba, Docker!');
});

app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
