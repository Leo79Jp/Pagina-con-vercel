
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Mi Página EJS',
        message: '¡Hola desde EJS!'
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
});