const express = require('express');
const path = require('path'); 
const app = express();

app.use(express.json());
app.use(express.static(__dirname)); 


app.get('/', (req, res) => {
    
    res.sendFile(path.join(__dirname, 'index.html')); 
});

app.post('/login', (req, res) => {
    console.log("Datos recibidos:", req.body);
    res.json({ mensaje: "Recibido" });
});

app.listen(3000, () => {
    console.log("Servidor activo en http://localhost:3000");
});