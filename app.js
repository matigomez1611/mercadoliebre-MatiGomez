const express = require ("express");
const app = express ();
const path = require ("path");
const publicPath = path.resolve(__dirname, "./public");
const PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.listen(PORT, () =>
    {console.log(`Servidor iniciado en http://localhost:${port}`)});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});