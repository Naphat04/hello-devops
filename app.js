const express = require('express');
const app = express();
app.use(express.json());

app.get('/books', (req, res) => {
    res.json([{ id: 1, title: '1984', author: 'Orwell' }]);
});

app.post('/books', (req, res) => {
    res.status(201).json({ id: Date.now(), ...req.body });
});

app.get('/books/search', (req, res) => {
    const { q } = req.query; res.json({ message: `Results for ${q}` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
