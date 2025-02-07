// Importo il modulo Express
const express = require('express')
const app = express()
const port = 3000

// importo il router
const postsRouter = require('./routers/posts');

// Serve i file statici dalla cartella 'public'
app.use(express.static('public'));

// registro il body-parser per "application/json"
app.use(express.json());

// Gestisce la route principale ('/')
app.get('/', (req, res) => {
    // Invia una semplice risposta testuale
    res.send("Server del mio blog")
});

// Usa il router per le richieste alla route '/posts'
app.use("/posts", postsRouter)

// Avvia il server sulla porta specificata
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})